import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'


export class mainDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEmail()
  @ApiProperty()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  description: string;
}