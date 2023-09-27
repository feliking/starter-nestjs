import { IsOptional } from 'class-validator';

export class SuccessResponseDto {
  @IsOptional()
  success: boolean;

  @IsOptional()
  message: string;

  @IsOptional()
  data: any;
}
