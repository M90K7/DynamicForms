/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import { Type } from "@angular/core";

export function ElementSettings(setting: ElementSettingDef[]) {

	return function (constructorFunction: Function): void {
		(constructorFunction as any).__settingDefs = setting;
	};
}

export function extractElementSettingDefs(type: Type<any>): ElementSettingDef[] {
	return ((type as any).__settingDefs || []);
}

export interface ElementSettingDef {
	type: Type<any>;
	title: string;
	name: string;
}
