import { Body, Post, UseFilters, UseGuards } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './core/filter/exception';
import { RolesGuard } from './core/guards/user.guard';
import { mainDto } from './core/dto';


@Controller()
@UseGuards(RolesGuard)
@UseFilters( new HttpExceptionFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiProperty()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(@Body() data: mainDto): string {
    return this.appService.getHello();
  }
}
