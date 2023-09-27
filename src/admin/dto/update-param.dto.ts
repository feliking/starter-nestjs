import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateParamDto {
  @IsString()
  @IsNotEmpty()
  value: string;
}
