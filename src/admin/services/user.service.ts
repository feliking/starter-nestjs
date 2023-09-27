import { HttpException, Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';
import { RegisterUserDto } from '../dto/register-user.dto';
import { hash, compare } from 'bcrypt';
import { LoginDto } from '../dto/login.dto';
import { collection, query, where } from 'firebase/firestore';
import { User } from '../models/user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService) {}
  async getMe(idUser: string) {
    const { getDocument } = FirestoreService();
    const result = await getDocument('users', idUser);
    return { user: result };
  }

  async getUsers() {
    const { getDocuments } = FirestoreService();
    return getDocuments('users');
  }

  async register(user: RegisterUserDto) {
    const { saveDocument } = FirestoreService();
    const { password } = user;
    const plainToHash = await hash(password, 10);
    user = { ...user, password: plainToHash };
    await saveDocument('users', user);
  }

  async login(login: LoginDto) {
    const { db, customQuery } = FirestoreService();
    const { phone, password } = login;
    const result = await customQuery(
      query(collection(db, 'users'), where('phone', '==', phone)),
    );
    const user: User = result[0];
    const checkPassword = await compare(password, user?.password || '');
    if (result.length === 0 && !checkPassword) {
      throw new HttpException('Usuario o contraseña incorrecta', 403);
    }
    const payload = { id: user.id, phone: user.phone };
    const token = await this.jwtService.sign(payload);
    const data = {
      user: user,
      token,
    };
    return data;
  }
  async logout() {
    return 'Sesión terminada';
  }
}
