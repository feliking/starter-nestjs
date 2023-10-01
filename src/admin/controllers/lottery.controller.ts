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
import { LotteryService } from '../services/lottery.service';
import { CreateLotteryDto } from '../dto/create-lottery.dto';
import { UpdateLotteryDto } from '../dto/update-lottery.dto';
import { ParamIdDto } from '../dto/ParamId.dto';

@UseGuards(AuthGuard)
@Controller('admin/lottery')
export class LotteryController extends BaseController {
  constructor(private readonly lotteryService: LotteryService) {
    super();
  }

  @Get()
  async getLotteries() {
    const result = await this.lotteryService.getLotteries();
    return this.success(result);
  }

  @Get(':id')
  async getLottery(@Param() param: ParamIdDto) {
    const result = await this.lotteryService.getLottery(param.id);
    return this.success(result);
  }

  @Post()
  async create(@Body() datos: CreateLotteryDto) {
    const result = await this.lotteryService.create(datos);
    return this.successCreate(result);
  }

  @Patch(':id')
  async update(
    @Body() datos: UpdateLotteryDto,
    @Param() param: { id: string },
  ) {
    const result = await this.lotteryService.update(datos, param.id);
    return this.successUpdate(result);
  }

  @Delete(':id')
  async delete(@Param() param: { id: string }) {
    const result = await this.lotteryService.delete(param.id);
    return this.successDelete(result);
  }
}
