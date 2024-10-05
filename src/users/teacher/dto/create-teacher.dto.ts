import { IsString, IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateTeacherDto {
    
    @IsString()
    readonly name: string

    @IsString()
    readonly last_name: string

    @IsEmail()
    readonly email: string

    @IsStrongPassword()
    readonly password: string

    


}
