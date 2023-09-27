import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { BaseController } from 'src/common/base-controller';
import { ParamService } from '../services/param.service';
import { UpdateParamDto } from '../dto/update-param.dto';

@UseGuards(AuthGuard)
@Controller('admin/param')
export class ParamController extends BaseController {
  constructor(private readonly paramService: ParamService) {
    super();
  }

  @Get()
  async getParams() {
    const result = await this.paramService.getParams();
    return this.success(result);
  }

  @Patch(':id')
  async update(@Body() datos: UpdateParamDto, @Param() param: { id: string }) {
    const result = await this.paramService.update(datos, param.id);
    return this.successUpdate(result);
  }
}
