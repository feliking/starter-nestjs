import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';
import { CreateLotteryDto } from '../dto/create-lottery.dto';
import { UpdateLotteryDto } from '../dto/update-lottery.dto';

@Injectable()
export class LotteryService {
  async getLotteries() {
    const { getDocuments } = FirestoreService();
    return getDocuments('lotteries');
  }

  async getLottery(id: string) {
    const { getDocument } = FirestoreService();
    return await getDocument('lotteries', id);
  }

  async create(datos: CreateLotteryDto) {
    const { saveDocument } = FirestoreService();
    await saveDocument('lotteries', datos);
  }

  async update(datos: UpdateLotteryDto, id: string) {
    const { updateDocument } = FirestoreService();
    await updateDocument('lotteries', id, datos);
  }

  async delete(id: string) {
    const { deleteDocument } = FirestoreService();
    return await deleteDocument('lotteries', id);
  }
}
