import { Teacher } from '../teacher/teacher.entity';
export type AvailabilityType = 'available' | 'blocked';
export declare class Availability {
    id: number;
    professeur: Teacher;
    date: Date;
    startTime: string;
    endTime: string;
    type: AvailabilityType;
}
