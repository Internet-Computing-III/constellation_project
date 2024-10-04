import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RubricModule } from './rubric/rubric.module';
import { CriteriaModule } from './criteria/criteria.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD, 
      port: +process.env.DB_PORT,
      autoLoadEntities: true,
      synchronize: false, // solo para desarrollo
      ssl: {
        rejectUnauthorized: false, // Permite conexiones sin verificar el certificado, útil en desarrollo
      }
    }),
    RubricModule,
    CriteriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}