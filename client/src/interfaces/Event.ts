export type Location = [number, number];

export interface Event {
	name: string;
	attendance: number;
	location: Location;
	radius: number;
}
