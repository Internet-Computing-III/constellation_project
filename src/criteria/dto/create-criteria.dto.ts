import { IsNotEmpty, IsNumber, IsString, Min, Max, IsUUID} from "class-validator";

export class CreateCriteriaDto {

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
