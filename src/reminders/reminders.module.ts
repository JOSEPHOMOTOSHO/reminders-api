import { Module } from '@nestjs/common';
import { RemindersController } from './reminders.controller';
import { RemindersService } from './reminders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reminder } from 'src/Typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reminder])],
  controllers: [RemindersController],
  providers: [RemindersService],
})
export class RemindersModule {}
