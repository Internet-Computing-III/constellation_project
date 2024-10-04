
import { IsString } from 'class-validator';


export class CreateScheduleDto {


    @IsString()
    readonly day: string

    @IsString()
    readonly hour: string

    @IsString()
    readonly state: string




}
