import { Observable, Subject } from "rxjs";

export interface ElementModel {
	id: string | null;
	name: string;
	title: string | null;
	description: string | null;
	value?: any;
	valueChange: Observable<any>;
}