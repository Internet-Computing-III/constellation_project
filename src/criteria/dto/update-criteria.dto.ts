import { PartialType } from '@nestjs/mapped-types';
import { CreateCriteriaDto } from './create-criteria.dto';
import { IsNotEmpty, IsNumber, IsString, IsUUID, Max, Min } from 'class-validator';

export class UpdateCriteriaDto extends PartialType(CreateCriteriaDto) {

    @IsUUID()
    readonly rubric: string;
    
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    description: string;
  
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    percentage: number;

}
