import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ThemeModule } from './theme/theme.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ThemeModule],
})
export class AppModule {}
