import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';

@Injectable()
export class OrderService {
  async getOrders() {
    const { getDocuments } = FirestoreService();
    return getDocuments('orders');
  }
}
