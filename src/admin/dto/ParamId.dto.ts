import { IsNotEmpty, IsString } from "class-validator";

export class ParamIdDto {
  @IsString()
  @IsNotEmpty()
  id: string
}