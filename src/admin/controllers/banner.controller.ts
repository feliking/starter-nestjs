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
import { BannerService } from '../services/banner.service';
import { CreateBannerDto } from '../dto/create-banner.dto';

@UseGuards(AuthGuard)
@Controller('admin/banner')
export class BannerController extends BaseController {
  constructor(private readonly bannerService: BannerService) {
    super();
  }

  @Get()
  async getBanners() {
    const result = await this.bannerService.getBanners();
    return this.success(result);
  }

  @Post()
  async create(@Body() datos: CreateBannerDto) {
    const result = await this.bannerService.create(datos);
    return this.successCreate(result);
  }

  @Patch(':id')
  async update(@Body() datos: CreateBannerDto, @Param() param: { id: string }) {
    const result = await this.bannerService.update(datos, param.id);
    return this.successUpdate(result);
  }

  @Delete(':id')
  async delete(@Param() param: { id: string }) {
    const result = await this.bannerService.delete(param.id);
    return this.successDelete(result);
  }
}
