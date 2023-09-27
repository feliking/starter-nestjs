import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { BaseController } from 'src/common/base-controller';
import { DeliveryTypeService } from '../services/delivery-type.service';
import { UpdateDeliveryTypeDto } from '../dto/update-delivery-type.dto';

@UseGuards(AuthGuard)
@Controller('admin/delivery-type')
export class DeliveryTypeController extends BaseController {
  constructor(private readonly deliveryTypeService: DeliveryTypeService) {
    super();
  }

  @Get()
  async getDeliveryTypes() {
    const result = await this.deliveryTypeService.getDeliveryTypes();
    return this.success(result);
  }

  @Patch(':id')
  async update(
    @Body() datos: UpdateDeliveryTypeDto,
    @Param() param: { id: string },
  ) {
    const result = await this.deliveryTypeService.update(datos, param.id);
    return this.successUpdate(result);
  }
}
