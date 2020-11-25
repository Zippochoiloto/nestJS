import { Body, UseGuards } from '@nestjs/common';
import { Controller, Get, Post, UseFilters, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/shared/filter/exception';
import { RolesGuard } from 'src/shared/guards/user.guard';
import { LoggingInterceptor } from 'src/shared/interceptor/intercept';
import { LoggerMiddleware } from 'src/shared/middleware/logger';
import { UserService } from './user.service';
// User HTTP Get

@UseInterceptors(LoggingInterceptor)
@UseFilters( new HttpExceptionFilter())
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/ping')
  postHello(): string {
    return 'Hello from User'
  }

  
}
