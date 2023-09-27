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
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';

@UseGuards(AuthGuard)
@Controller('admin/category')
export class CategoryController extends BaseController {
  constructor(private readonly categoryService: CategoryService) {
    super();
  }

  @Get()
  async getCategories() {
    const result = await this.categoryService.getCategories();
    return this.success(result);
  }

  @Post()
  async create(@Body() datos: CreateCategoryDto) {
    const result = await this.categoryService.create(datos);
    return this.successCreate(result);
  }

  @Patch(':id')
  async update(
    @Body() datos: CreateCategoryDto,
    @Param() param: { id: string },
  ) {
    const result = await this.categoryService.update(datos, param.id);
    return this.successUpdate(result);
  }

  @Delete(':id')
  async delete(@Param() param: { id: string }) {
    const result = await this.categoryService.delete(param.id);
    return this.successDelete(result);
  }
}
