import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';
import { UpdateDeliveryTypeDto } from '../dto/update-delivery-type.dto';

@Injectable()
export class DeliveryTypeService {
  async getDeliveryTypes() {
    const { getDocuments } = FirestoreService();
    return getDocuments('delivery_types');
  }

  async update(datos: UpdateDeliveryTypeDto, id: string) {
    const { updateDocument } = FirestoreService();
    await updateDocument('delivery_types', id, datos);
  }
}
