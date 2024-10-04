import { Module } from '@nestjs/common';
import { RubricService } from './rubric.service';
import { RubricController } from './rubric.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rubric } from './entities/rubric.entity';
import { Criteria } from 'src/criteria/entities/criteria.entity';

@Module({

  imports: [TypeOrmModule.forFeature([Rubric, Criteria])],
  controllers: [RubricController],
  providers: [RubricService],
  exports: [RubricService],
})
export class RubricModule {}
