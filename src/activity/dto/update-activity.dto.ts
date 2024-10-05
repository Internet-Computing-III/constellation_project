import { IsOptional, IsString } from 'class-validator';

export class UpdateActivityDto {
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;
}
