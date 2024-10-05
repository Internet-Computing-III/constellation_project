import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {

  constructor(
    @InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    const newTeacher = Object.assign({...createTeacherDto, id: uuid()});
    return this.teacherRepository.save(newTeacher);
    
  }

  findAll() {
    return this.teacherRepository.find();
  }

  async findOne(id: string) {
    const teacher = await this.teacherRepository.findOne({ where: { id } });
    if (!teacher) {
      throw new NotFoundException(`Teacher with id ${id} not found`);
    }
    return teacher;
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    const teacherUpdate = await this.findOne(id);

    if (!teacherUpdate) {
      throw new NotFoundException(`Teacher with id ${id} not found`);
    }

    Object.assign(teacherUpdate, updateTeacherDto);
    const updatedTeacher = await this.teacherRepository.save(teacherUpdate);
    return updatedTeacher;
  }

  async remove(id: string) {
    const teacherDelete = await this.findOne(id);

    if (!teacherDelete) {
      throw new NotFoundException(`Teacher with id ${id} not found`);
    }

    const deletedTeacher = await this.teacherRepository.delete(teacherDelete);
    return deletedTeacher;
  }
}
