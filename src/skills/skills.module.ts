import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skills } from './entities/skill.entity';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService],
  imports: [TypeOrmModule.forFeature([Skills]),
  SkillsModule],
})
export class SkillsModule {}
