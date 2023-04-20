import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReminderDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  user: number;

  @IsNotEmpty()
  @IsDateString()
  date: Date;
}
