import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';
import { CreateCategoryDto } from '../dto/create-category.dto';

@Injectable()
export class CategoryService {
  async getCategories() {
    const { getDocuments } = FirestoreService();
    return getDocuments('categories');
  }

  async create(datos: CreateCategoryDto) {
    const { saveDocument } = FirestoreService();
    await saveDocument('categories', datos);
  }

  async update(datos: CreateCategoryDto, id: string) {
    const { updateDocument } = FirestoreService();
    await updateDocument('categories', id, datos);
  }

  async delete(id: string) {
    const { deleteDocument } = FirestoreService();
    return await deleteDocument('categories', id);
  }
}
