import { Teacher } from '../teacher/teacher.entity';
import { Matiere } from '../matiere/matiere.entity';
import { Schedule } from './schedule.entity';
export declare class ScheduleEvent {
    id: number;
    date: Date;
    startTime: string;
    endTime: string;
    room?: string;
    professeur: Teacher;
    matiere: Matiere;
    schedule: Schedule;
    professeurId: number;
}
