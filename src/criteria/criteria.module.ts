import { Module } from '@nestjs/common';
import { CriteriaService } from './criteria.service';
import { CriteriaController } from './criteria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RubricModule } from 'src/rubric/rubric.module';
import { Criteria } from './entities/criteria.entity';
import { Rubric } from 'src/rubric/entities/rubric.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Criteria, Rubric]),
    RubricModule
  ],
  controllers: [CriteriaController],
  providers: [CriteriaService],
  
})
export class CriteriaModule {}
