import { Component, OnInit } from "@angular/core";

import * as models from "models";
import { Subject } from "rxjs";

@Component({ template: "" })
export abstract class ControlComponent implements models.ControlElement, OnInit {

	id: string | null = null;
	type: models.ElementType = models.ElementType.Text;
	settings: models.GeneralFormSetting = {};
	require = false;
	component?: { _stringify_: boolean; instance: models.ElementComponent; } | undefined;
	validation?: models.ValidationWrapper | undefined;
	name = "";
	title: string | null = null;
	description: string | null = null;

	value?: any;
	valueChange = new Subject<any>();

	constructor() {
		//
	}

	ngOnInit(): void {
		if (this.validation) {
			if (this.require) {
				this.validation.push(new models.RequireValidation(this));
			}
			this.validation.init();
		}

	}

	onReset(): void {
		this.value = null;
	}

	onEdit(data: models.ObjectDic): void {
		this.value = data[this.name];
		this.validation?.validate();
	}

	valueChanged(): void {
		this.valueChange.next(this.value);
	}

}
