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
import { DeliveryPointService } from '../services/delivery-point.service';
import { CreateDeliveryPointDto } from '../dto/create-delivery-point.dto';

@UseGuards(AuthGuard)
@Controller('admin/delivery-point')
export class DeliveryPointController extends BaseController {
  constructor(private readonly deliveryPointService: DeliveryPointService) {
    super();
  }

  @Get()
  async getDeliveryPoints() {
    const result = await this.deliveryPointService.getDeliveryPoints();
    return this.success(result);
  }

  @Post()
  async create(@Body() datos: CreateDeliveryPointDto) {
    const result = await this.deliveryPointService.create(datos);
    return this.successCreate(result);
  }

  @Patch(':id')
  async update(
    @Body() datos: CreateDeliveryPointDto,
    @Param() param: { id: string },
  ) {
    const result = await this.deliveryPointService.update(datos, param.id);
    return this.successUpdate(result);
  }

  @Delete(':id')
  async delete(@Param() param: { id: string }) {
    const result = await this.deliveryPointService.delete(param.id);
    return this.successDelete(result);
  }
}
