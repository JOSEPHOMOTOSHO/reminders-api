import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reminder } from 'src/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { CreateReminderDto } from './dtos/create-reminder.dto';
import { Op } from 'sequelize';

@Injectable()
export class RemindersService {
  constructor(
    @InjectRepository(Reminder)
    private readonly reminderRepository: Repository<Reminder>,
  ) {}

  createReminder(createUserDto: CreateReminderDto) {
    const newReminder = this.reminderRepository.create(createUserDto);
    return this.reminderRepository.save(newReminder);
  }

  async getReminders(query: { user: number; after: string }) {
    const { user, after } = query;
    try {
      if (!!user && !!after) {
        const reminders = await this.reminderRepository.find({
          where: {
            user,
            date: MoreThanOrEqual(new Date(after)),
          },
        });
        return reminders;
      }
      if (!!user) {
        const reminders = this.reminderRepository.find({
          where: {
            user,
          },
        });
        return reminders;
      }
      if (!!after) {
        const reminders = await this.reminderRepository.find({
          where: {
            date: MoreThanOrEqual(new Date(+after)),
          },
        });
        return reminders;
      }
      const reminders = await this.reminderRepository.find();
      return reminders;
    } catch (err) {
      return new BadRequestException(err, 'something went wrong');
    }
  }

  getReminderById(id: number) {
    console.log(id);
    return this.reminderRepository.findOne({ where: { id: +id } });
  }
}
