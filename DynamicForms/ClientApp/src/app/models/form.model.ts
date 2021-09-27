import { ObjectDic } from "./base.model";
import { ValidationWrapper } from "./element-validation.model";
import { ElementModel } from "./element.model";

export enum ElementType {
	/** عددی */
	Number = 1,
	/** متنی */
	Text,
	/** متنی چند خطی */
	TextArea,
	/** تاریخ */
	Date,
	/** تاریخ بازه‌ای */
	DateRange,
	Select,
	Radio,
	Checkbox
}

export interface ElementComponent extends ElementModel {
	component?: {
		_stringify_: boolean;
		instance: ElementComponent;
	};
	validation?: ValidationWrapper;
}

export interface FormElement extends ElementComponent {
	controls: ControlElement[];
}

export interface ControlElement extends ElementComponent {
	type: ElementType;
	settings: GeneralFormSetting;
	require: boolean;
	onReset: () => void;
	onEdit: (data: ObjectDic) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GeneralFormSetting {
	//
}

export interface NumberFormSetting extends GeneralFormSetting {
	splitter: boolean;
}
