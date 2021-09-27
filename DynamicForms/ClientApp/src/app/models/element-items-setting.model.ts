import { EventEmitter } from "@angular/core";

import { DialogResult } from "./dialog.model";

export type ItemsSetting = ItemKeyValue[];

export interface ItemKeyValue {
	key: string;
	value: string;
}

export interface ElementSettingComponent<T = unknown> {
	value: T;
	valueChange: EventEmitter<DialogResult<T>>;
}