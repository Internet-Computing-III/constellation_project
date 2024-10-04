import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skills } from './entities/skill.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { isUUID } from 'class-validator';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class SkillsService {

  constructor(
    @InjectRepository(Skills) private readonly skillRepository: Repository<Skills>
  ) {}


 
  create(createSkilltDto: CreateSkillDto) {
    const newSkill = Object.assign({...createSkilltDto, id: uuid()})
    return this.skillRepository.save(newSkill);
  }

  findAll() {
    return this.skillRepository.find();
  }

  async findOne(id: string) {

    let skill: Skills;

    if(isUUID(id)){
      skill = await this.skillRepository.findOneBy({id: id})
    }

    if(!skill){
      throw new NotFoundException(`Skill with the id ${id} not found`)
    }

    return skill;
  }

  async update(identifier: string, updateSkillDto: UpdateSkillDto) {
    let skill = await this.skillRepository.findOne({
      where: [{ id: identifier }],
    });
  
    if (!skill) {
      throw new NotFoundException(`Skill not found with id : ${identifier}`);
    }
  
    skill= this.skillRepository.merge(skill, updateSkillDto);

  
    return this.skillRepository.save(skill);
  }
  

  async remove(identifier: string) {
    let skill = await this.skillRepository.findOne({
      where: [{ id: identifier }],
    });
  
    if (!skill) {
      throw new NotFoundException(`Skill not found with id : ${identifier}`);
    }

    return await this.skillRepository.remove(skill);
  }



}
