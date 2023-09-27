import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';
import { CreateDeliveryPointDto } from '../dto/create-delivery-point.dto';

@Injectable()
export class DeliveryPointService {
  async getDeliveryPoints() {
    const { getDocuments } = FirestoreService();
    return getDocuments('delivery_points');
  }

  async create(datos: CreateDeliveryPointDto) {
    const { saveDocument } = FirestoreService();
    await saveDocument('delivery_points', datos);
  }

  async update(datos: CreateDeliveryPointDto, id: string) {
    const { updateDocument } = FirestoreService();
    await updateDocument('delivery_points', id, datos);
  }

  async delete(id: string) {
    const { deleteDocument } = FirestoreService();
    return await deleteDocument('delivery_points', id);
  }
}
