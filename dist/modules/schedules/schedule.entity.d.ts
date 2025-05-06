import { Niveau } from '../niveau/niveau.entity';
import { Filiere } from '../filiere/filiere.entity';
import { Section } from '../section/section.entity';
import { ScheduleEvent } from './event.entity';
export declare class Schedule {
    id: number;
    weekStart: Date;
    weekEnd: Date;
    weekLabel: string;
    published: boolean;
    note?: string;
    niveau: Niveau;
    filiere: Filiere;
    section: Section;
    events: ScheduleEvent[];
}
