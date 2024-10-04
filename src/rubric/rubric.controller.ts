import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RubricService } from './rubric.service';
import { CreateRubricDto } from './dto/create-rubric.dto';
import { UpdateRubricDto } from './dto/update-rubric.dto';

@Controller('rubric')
export class RubricController {
  constructor(private readonly rubricService: RubricService) {}

  @Post()
  create(@Body() createRubricDto: CreateRubricDto) {
    return this.rubricService.create(createRubricDto);
  }

  @Get()
  findAll() {
    return this.rubricService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.rubricService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateRubricDto: UpdateRubricDto) {
    return this.rubricService.update(id, updateRubricDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.rubricService.remove(id);
  }
}
