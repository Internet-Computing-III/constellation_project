import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './entities/activity.entity';
import { CreateActivityDto } from './dto/create-activitty.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  async findAll() {
    return this.activityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.activityService.findOne(id);
  }

  @Post()
  async create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.create(createActivityDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return this.activityService.update(id, updateActivityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.activityService.remove(id);
  }
}
