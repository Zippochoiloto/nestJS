import { Body, UseGuards } from '@nestjs/common';
import { Controller, Get, Post, UseFilters, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/core/filter/exception';
import { RolesGuard } from 'src/core/guards/user.guard';
import { LoggerMiddleware } from 'src/core/middleware/logger';
import { UserDataDto } from './dto/userdatadto';
import { UserService } from './user.service';
// User HTTP Get

@UseInterceptors(LoggerMiddleware)
@UseGuards(RolesGuard)
@UseFilters( new HttpExceptionFilter())
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('/')
  postHello( @Body(new ValidationPipe()) userDataDto: UserDataDto): string {
    return this.userService.getHello();
  }

  
}
