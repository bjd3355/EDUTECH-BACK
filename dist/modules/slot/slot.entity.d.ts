export declare class Slot {
    id: number;
    className: string;
    day: string;
    timeslots: {
        start: string;
        end: string;
    }[];
    isBlocked: boolean;
}
