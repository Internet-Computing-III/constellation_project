import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRubricDto } from './dto/create-rubric.dto';
import { UpdateRubricDto } from './dto/update-rubric.dto';
import { Rubric } from './entities/rubric.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RubricService {
  
  constructor(@InjectRepository(Rubric) private readonly rubricRepository: Repository<Rubric>) {}

  async create(createRubricDto: CreateRubricDto) {
    const rubric = Object.assign({...createRubricDto, id: uuid()});
    return await this.rubricRepository.save(rubric);
  }

  async findAll() {
    return await this.rubricRepository.find({ relations: ['criterias'] });
  }

  async findOne(id: string) {
    const rubric = await this.rubricRepository.findOne({ where: { id }, relations: ['criterias'] });
    if (!rubric) {
      throw new NotFoundException(`Rubric with ID ${id} not found`);
    }
    return rubric;
  }

  async update(id: string, updateRubricDto: UpdateRubricDto) {
    const rubric = await this.findOne(id);
    Object.assign(rubric, updateRubricDto);
    return await this.rubricRepository.save(rubric);
  }

  async remove(id: string) {
    const rubric = await this.findOne(id);
    await this.rubricRepository.remove(rubric);
  }
}


