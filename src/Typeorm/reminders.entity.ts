import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reminder {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'reminder_id',
  })
  id: number;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'int',
  })
  user: number;

  @Column({
    name: 'datei',
  })
  date: Date;
}
