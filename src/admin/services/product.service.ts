import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class ProductService {
  async getProducts() {
    const { getDocuments } = FirestoreService();
    return getDocuments('products');
  }

  async create(datos: CreateProductDto) {
    const { saveDocument } = FirestoreService();
    await saveDocument('products', datos);
  }

  async update(datos: CreateProductDto, id: string) {
    const { updateDocument } = FirestoreService();
    await updateDocument('products', id, datos);
  }

  async delete(id: string) {
    const { deleteDocument } = FirestoreService();
    return await deleteDocument('products', id);
  }
}
