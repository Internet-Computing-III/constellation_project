import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';
import { CreateActivityDto } from './dto/create-activitty.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  async findAll() {
    const activities = await this.activityRepository.find();
    if(activities.length===0) {
        throw new NotFoundException('No activities found');
    }
    return activities;
  }

  async findOne(id: string) {
    const activity = await this.activityRepository.findOne({ where: { id } });
    if(!activity) {
        throw new NotFoundException(`Activity with id ${id} not found`);
    }
    return activity;
  }

  async create(createActivityDto: CreateActivityDto) {
    const newActivity = Object.assign({ ...createActivityDto, id: uuid() });
    return await this.activityRepository.save(newActivity);
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    const activity = await this.findOne(id);
    if(!activity) {
        throw new NotFoundException(`Activity with id ${id} not found`);
    }
    await this.activityRepository.update(id, updateActivityDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const activity = await this.findOne(id);
    if(!activity) {
        throw new NotFoundException(`Activity with id ${id} not found`);
    }
    await this.activityRepository.delete(id);
  }
}
