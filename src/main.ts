import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './shared/interceptor/intercept';
import { createdocument } from './swagger/swagger';
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor())
  SwaggerModule.setup('api', app, createdocument(app))
  await app.listen(3000);
}
bootstrap();
