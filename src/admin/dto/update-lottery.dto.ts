import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateLotteryDto {
  @IsString()
  @IsOptional()
  startDate?: string;

  @IsString()
  @IsOptional()
  endDate?: string;

  @IsBoolean()
  @IsOptional()
  state?: boolean;

  @IsArray()
  @IsOptional()
  tickets?: {code: string};

  @IsArray()
  @IsOptional()
  winner?: {code: string};
}
