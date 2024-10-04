import { IsNotEmpty, IsString } from "class-validator";

export class CreateRubricDto {

    @IsNotEmpty()
    @IsString()
    name: string;
}
