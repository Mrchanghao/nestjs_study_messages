import { IsString, isString } from "class-validator";

export class CreateMessageDto {
  
  @IsString()
  content: string;
  
}