import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { BaseController } from 'src/common/base-controller';
import { ProductService } from '../services/product.service';
import { CreateProductDto } from '../dto/create-product.dto';

@UseGuards(AuthGuard)
@Controller('admin/product')
export class ProductController extends BaseController {
  constructor(private readonly productService: ProductService) {
    super();
  }

  @Get()
  async getProducts() {
    const result = await this.productService.getProducts();
    return this.success(result);
  }

  @Post()
  async create(@Body() datos: CreateProductDto) {
    const result = await this.productService.create(datos);
    return this.successCreate(result);
  }

  @Patch(':id')
  async update(
    @Body() datos: CreateProductDto,
    @Param() param: { id: string },
  ) {
    const result = await this.productService.update(datos, param.id);
    return this.successUpdate(result);
  }

  @Delete(':id')
  async delete(@Param() param: { id: string }) {
    const result = await this.productService.delete(param.id);
    return this.successDelete(result);
  }
}
