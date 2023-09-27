import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { RegisterUserDto } from '../dto/register-user.dto';
import { LoginDto } from '../dto/login.dto';
import { AuthGuard } from '../guards/auth.guard';
import { BaseController } from 'src/common/base-controller';
import { Request } from 'express';

@Controller()
export class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }

  @UseGuards(AuthGuard)
  @Get('admin/user')
  async getUsers() {
    const result = await this.userService.getUsers();
    return this.success(result);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async getMe(@Req() req: Request) {
    const idUser = this.getUser(req);
    const result = await this.userService.getMe(idUser);
    return this.success(result);
  }

  @Post('register')
  async registerUser(@Body() user: RegisterUserDto) {
    const result = await this.userService.register(user);
    return this.success(result);
  }

  @Post('login')
  async login(@Body() login: LoginDto) {
    const result = await this.userService.login(login);
    return this.success(result);
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  async logout() {
    const result = await this.userService.logout();
    return this.success(result);
  }
}
