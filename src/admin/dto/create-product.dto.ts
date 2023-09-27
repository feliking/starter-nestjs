import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { DocumentDto } from './document.dto';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumberString()
  @IsNotEmpty()
  price: number;

  @IsNumberString()
  @IsOptional()
  priceDiscount: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsArray()
  @IsOptional()
  sizes: string[];

  @IsArray()
  @IsOptional()
  colors: string[];

  @ValidateNested({ each: true })
  @Type(() => DocumentDto)
  @ArrayMinSize(1)
  documents: DocumentDto[];
}
