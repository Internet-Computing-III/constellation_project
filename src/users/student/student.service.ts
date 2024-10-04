import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { v4 as uuid } from 'uuid';
import { isUUID } from 'class-validator';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class StudentService {

  constructor(
    @InjectRepository(Student) private readonly studentRepository: Repository<Student>
  ) {}

  create(createStudentDto: CreateStudentDto) {
    const newStudent = Object.assign({...createStudentDto, id: uuid()})
    return this.studentRepository.save(newStudent);
  }

  findAll() {
    return this.studentRepository.find();
  }

  async findOne(id: string) {

    let student: Student;

    if(isUUID(id)){
      student = await this.studentRepository.findOneBy({id: id})
    }else{
      student = await this.studentRepository.findOneBy({student_code: id})
    }

    if(!student){
      throw new NotFoundException(`Student with the id ${id} not found`)
    }

    return student;
  }

  async update(identifier: string, updateStudentDto: UpdateStudentDto) {
    let student = await this.studentRepository.findOne({
      where: [{ id: identifier }, { student_code: identifier }],
    });
  
    if (!student) {
      throw new NotFoundException(`Student not found with id or student_code: ${identifier}`);
    }
  
    student = this.studentRepository.merge(student, updateStudentDto);

  
    return this.studentRepository.save(student);
  }
  

  async remove(identifier: string) {
    let student = await this.studentRepository.findOne({
      where: [{ id: identifier }, { student_code: identifier }],
    });
  
    if (!student) {
      throw new NotFoundException(`Student not found with id or student_code: ${identifier}`);
    }

    return await this.studentRepository.remove(student);
  }
}
