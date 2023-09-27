import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeliveryPointDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
