import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { isUUID } from 'class-validator';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule) private readonly scheduleRepository: Repository<Schedule>
  ) {}


 
  create(createScheduleDto: CreateScheduleDto) {
    const newSchedule = Object.assign({...createScheduleDto, id: uuid()})
    return this.scheduleRepository.save(newSchedule);
  }

  findAll() {
    return this.scheduleRepository.find();
  }

  async findOne(id: string) {

    let schedule: Schedule;

    if(isUUID(id)){
      schedule = await this.scheduleRepository.findOneBy({id: id})
    }

    if(!schedule){
      throw new NotFoundException(`Skill with the id ${id} not found`)
    }

    return schedule;
  }

  async update(identifier: string, updateScheduleDto: UpdateScheduleDto) {
    let schedule = await this.scheduleRepository.findOne({
      where: [{ id: identifier }],
    });
  
    if (!schedule) {
      throw new NotFoundException(`Schedule not found with id  ${identifier}`);
    }
  
    schedule= this.scheduleRepository.merge(schedule, updateScheduleDto);

  
    return this.scheduleRepository.save(schedule);
  }
  

  async remove(identifier: string) {
    let schedule = await this.scheduleRepository.findOne({
      where: [{ id: identifier }],
    });
  
    if (!schedule) {
      throw new NotFoundException(`Schedule not found with id  ${identifier}`);
    }

    return await this.scheduleRepository.remove(schedule);
  }


}
