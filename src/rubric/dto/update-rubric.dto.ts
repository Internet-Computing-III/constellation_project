import { PartialType } from '@nestjs/mapped-types';
import { CreateRubricDto } from './create-rubric.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRubricDto extends PartialType(CreateRubricDto) {
    
    @IsNotEmpty()
    @IsString()
    name: string;
}
