import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherModule } from './users/teacher/teacher.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RubricModule } from './rubric/rubric.module';
import { CriteriaModule } from './criteria/criteria.module';
import { join } from 'path';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
      },
    }),
    RubricModule,
    CriteriaModule,
    CoursesModule,
    TeacherModule,
    AuthModule,
    ActivityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
