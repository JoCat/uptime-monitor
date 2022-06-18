import { join } from 'path';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ThemeModule } from './theme/theme.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../static'),
      serveStaticOptions: {
        setHeaders: (res: any, path: string) => {
          if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
          }
          if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
          }
        },
      },
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ThemeModule,
  ],
})
export class AppModule {}
