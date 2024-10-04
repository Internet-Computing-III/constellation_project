import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './users/student/student.module';
import { SkillsModule } from './skills/skills.module';
import { ScheduleModule } from './schedule/schedule.module';

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
    StudentModule,
    SkillsModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}