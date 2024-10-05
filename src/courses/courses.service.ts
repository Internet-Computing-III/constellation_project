import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
  ) {}


  async create(createCourseDto: CreateCourseDto) {
    const newCourse = this.courseRepository.create({...createCourseDto, id: uuid()});
    return await this.courseRepository.save(newCourse);
  }

  findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: string) {
    const course = await this.courseRepository.findOne({ where: {id} });
    if (!course) {
      throw new NotFoundException(`Teacher with id ${id} not found`);
    }
    return course;
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const courseUpdate = await this.findOne(id);

    if (!courseUpdate) {
      throw new NotFoundException(`Teacher with id ${id} not found`);
    }

    Object.assign(courseUpdate, updateCourseDto);
    const updatedCourse = this.courseRepository.save(courseUpdate);
    return updatedCourse;
  }

  async remove(id: string) {
    const courseDelete = await this.findOne(id);

    if (!courseDelete) {
      throw new NotFoundException(`Teacher with id ${id} not found`);
    }

    const deleteCourse = await this.courseRepository.delete(id);
    return deleteCourse;
  }
}
