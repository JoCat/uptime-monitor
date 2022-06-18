import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourceModule } from './resource/resource.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ResourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
