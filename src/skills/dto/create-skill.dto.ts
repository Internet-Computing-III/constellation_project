import { IsString } from 'class-validator';

export class CreateSkillDto {


    @IsString()
    readonly name: string

    @IsString()
    readonly description: string

}
