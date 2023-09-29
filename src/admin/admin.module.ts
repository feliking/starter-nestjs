import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { JwtModule } from '@nestjs/jwt';
import { configJwt } from './constants';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { BannerController } from './controllers/banner.controller';
import { BannerService } from './services/banner.service';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { DeliveryTypeController } from './controllers/delivery-type.controller';
import { DeliveryTypeService } from './services/delivery-type.service';
import { DeliveryPointController } from './controllers/delivery-point.controller';
import { DeliveryPointService } from './services/delivery-point.service';
import { ParamController } from './controllers/param.controller';
import { ParamService } from './services/param.service';
import { OrderController } from './controllers/order.controller';
import { OrderService } from './services/order.service';
import { ConfigModule } from '@nestjs/config';
import { LotteryController } from './controllers/lottery.controller';
import { LotteryService } from './services/lottery.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register(configJwt),
  ],
  controllers: [
    UserController,
    CategoryController,
    BannerController,
    ProductController,
    DeliveryTypeController,
    DeliveryPointController,
    ParamController,
    OrderController,
    LotteryController
  ],
  providers: [
    UserService,
    CategoryService,
    BannerService,
    ProductService,
    DeliveryTypeService,
    DeliveryPointService,
    ParamService,
    OrderService,
    LotteryService
  ],
})
export class AdminModule {}
