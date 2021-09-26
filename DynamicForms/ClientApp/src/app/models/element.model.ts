
export interface ElementModel {
	id: string | null;
	name: string;
	title: string | null;
	description: string | null;
	value?: any;
}


export interface ObjectDic {
	[index: string]: unknown;
}