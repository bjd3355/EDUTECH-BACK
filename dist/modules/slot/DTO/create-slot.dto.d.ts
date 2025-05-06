declare class TimeSlot {
    start: string;
    end: string;
}
export declare class CreateSlotDto {
    className: string;
    day: string;
    timeslots: TimeSlot[];
    isBlocked?: boolean;
}
export {};
