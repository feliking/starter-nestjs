import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { BaseController } from 'src/common/base-controller';
import { BotService } from '../services/bot.service';

//@UseGuards(AuthGuard)
@Controller('bot')
export class BotController extends BaseController {
  constructor(private readonly botService: BotService) {
    super();
  }

  @Post()
  async replyBot(@Body() datos: any) {
    console.log(datos)
    if(datos.message.includes('P-')){
      return await this.botService.completeOrder(datos)
    }
    if(datos.message.toLowerCase().includes('.confirmar')) {
      return await this.botService.confirmOrder(datos)
    }
    return []
  }
}
