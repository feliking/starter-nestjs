import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { BaseController } from 'src/common/base-controller';
import { OrderService } from '../services/order.service';

@UseGuards(AuthGuard)
@Controller('admin/order')
export class OrderController extends BaseController {
  constructor(private readonly orderService: OrderService) {
    super();
  }

  @Get()
  async getOrders() {
    const result = await this.orderService.getOrders();
    return this.success(result);
  }
}
