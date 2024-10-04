import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCriteriaDto } from './dto/create-criteria.dto';
import { UpdateCriteriaDto } from './dto/update-criteria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Criteria } from './entities/criteria.entity';
import { Repository } from 'typeorm';
import { Rubric } from 'src/rubric/entities/rubric.entity';
import { RubricService } from 'src/rubric/rubric.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CriteriaService {

  constructor(@InjectRepository(Criteria) private readonly criteriaRepository: Repository<Criteria>,
  private readonly rubricService: RubricService) {}
  
  async create(criteria: CreateCriteriaDto) {
    const rubric = await this.rubricService.findOne(criteria.rubric);
    const newCriteria = Object.assign({...criteria, rubric, id: uuid()});
    console.log(newCriteria);
    return await this.criteriaRepository.save(newCriteria);
  }

  async findAll() {
    return await this.criteriaRepository.find({ relations: ['rubric'] });
  }

  async findOne(id: string) {
    const criterion = await this.criteriaRepository.findOne({ where: { id }, relations: ['rubric'] });
    if (!criterion) {
      throw new NotFoundException(`Criterion with ID ${id} not found`);
    }
    return criterion;
  }

  async update(id: string, updateCriterionDto: CreateCriteriaDto) {
    const criterion = await this.findOne(id);
    Object.assign(criterion, updateCriterionDto);
    return await this.criteriaRepository.save(criterion);
  }

  async remove(id: string) {
    const criterion = await this.findOne(id);
    await this.criteriaRepository.remove(criterion);
  }
}
