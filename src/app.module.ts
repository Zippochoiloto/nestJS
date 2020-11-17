import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { USerModule } from './user/user.module'

@Module({
  imports: [USerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
