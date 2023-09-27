import { IsBoolean } from 'class-validator';

export class UpdateDeliveryTypeDto {
  @IsBoolean()
  state: boolean;
}
