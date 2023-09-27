import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';
import { UpdateParamDto } from '../dto/update-param.dto';

@Injectable()
export class ParamService {
  async getParams() {
    const { getDocuments } = FirestoreService();
    return getDocuments('params');
  }

  async update(datos: UpdateParamDto, id: string) {
    const { updateDocument } = FirestoreService();
    await updateDocument('params', id, datos);
  }
}
