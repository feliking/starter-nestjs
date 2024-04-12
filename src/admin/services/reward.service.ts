import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';
import { CreateRewardDto } from '../dto/reward.dto';

@Injectable()
export class RewardService {
  async getRewards() {
    const { getDocuments } = FirestoreService();
    return getDocuments('rewards');
  }

  async create(datos: CreateRewardDto) {
    const { saveDocument } = FirestoreService();
    await saveDocument('rewards', datos);
  }

  async update(datos: CreateRewardDto, id: string) {
    const { updateDocument } = FirestoreService();
    await updateDocument('rewards', id, datos);
  }

  async delete(id: string) {
    const { deleteDocument } = FirestoreService();
    return await deleteDocument('rewards', id);
  }
}
