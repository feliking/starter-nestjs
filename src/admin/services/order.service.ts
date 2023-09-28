import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs'
import { FirestoreService } from 'src/utlils/firestore';

@Injectable()
export class OrderService {
  async getOrders() {
    const { getDocuments } = FirestoreService();
    const orders = await getDocuments('orders');
    orders.sort((a, b) => dayjs(b.timestamps).unix() - dayjs(a.timestamps).unix())
    return orders;
  }
}
