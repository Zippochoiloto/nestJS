import { UseFilters, UseGuards } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './core/filter/exception';
import { RolesGuard } from './core/guards/user.guard';

@Controller()
@UseGuards(RolesGuard)
@UseFilters( new HttpExceptionFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
