import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';
import { CreateBannerDto } from '../dto/create-banner.dto';
import { CreateCategoryDto } from '../dto/create-category.dto';

@Injectable()
export class BannerService {
  async getBanners() {
    const { getDocuments } = FirestoreService();
    return getDocuments('banners');
  }

  async create(datos: CreateBannerDto) {
    const { saveDocument } = FirestoreService();
    await saveDocument('banners', datos);
  }

  async update(datos: CreateBannerDto, id: string) {
    const { updateDocument } = FirestoreService();
    await updateDocument('banners', id, datos);
  }

  async delete(id: string) {
    const { deleteDocument } = FirestoreService();
    return await deleteDocument('banners', id);
  }
}
