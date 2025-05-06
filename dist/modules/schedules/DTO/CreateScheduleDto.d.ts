declare class ScheduleEventDto {
    date: string;
    startTime: string;
    endTime: string;
    matiereId: number;
    professeurId: number;
    room?: string;
}
export declare class CreateScheduleDto {
    weekStart: string;
    weekEnd: string;
    weekLabel: string;
    niveauId: number;
    filiereId: number;
    sectionId: number;
    note?: string;
    published?: boolean;
    events: ScheduleEventDto[];
}
export {};
