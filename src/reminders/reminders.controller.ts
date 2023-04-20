import {
  Body,
  Controller,
  Delete,
  Get,
  MethodNotAllowedException,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dtos/create-reminder.dto';

@Controller('reminders')
export class RemindersController {
  constructor(private readonly reminderService: RemindersService) {}

  @Get('/:id')
  async getReminder(@Param() param: { id: number }) {
    const reminder = await this.reminderService.getReminderById(param.id);
    if (!reminder) {
      throw new NotFoundException('ID NOT FOUND');
    }
  }

  @Delete('/:id')
  async deleteReminder() {
    throw new MethodNotAllowedException('DELETE method not allowed');
  }

  @Put('/:id')
  async updateReminder() {
    throw new MethodNotAllowedException('PUT method not allowed');
  }

  @Patch('/:id')
  async patchReminder() {
    throw new MethodNotAllowedException('PATCH method not allowed');
  }

  @Get()
  getReminders(@Query() query: { user: number; after: string }) {
    return this.reminderService.getReminders(query);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUsers(@Body() createReminderDto: CreateReminderDto) {
    return this.reminderService.createReminder(createReminderDto);
  }
}
