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
import { RewardService } from '../services/reward.service';
import { CreateRewardDto } from '../dto/reward.dto';

@UseGuards(AuthGuard)
@Controller('admin/reward')
export class RewardController extends BaseController {
  constructor(private readonly rewardService: RewardService) {
    super();
  }

  @Get()
  async getRewards() {
    const result = await this.rewardService.getRewards();
    return this.success(result);
  }

  @Post()
  async create(@Body() datos: CreateRewardDto) {
    const result = await this.rewardService.create(datos);
    return this.successCreate(result);
  }

  @Patch(':id')
  async update(
    @Body() datos: CreateRewardDto,
    @Param() param: { id: string },
  ) {
    const result = await this.rewardService.update(datos, param.id);
    return this.successUpdate(result);
  }

  @Delete(':id')
  async delete(@Param() param: { id: string }) {
    const result = await this.rewardService.delete(param.id);
    return this.successDelete(result);
  }
}
