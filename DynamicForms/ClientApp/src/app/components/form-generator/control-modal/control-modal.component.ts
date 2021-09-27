/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ComponentRef, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

import { NzModalRef } from "ng-zorro-antd/modal";

import * as models from "models";
import { FormElementService } from "components/form-element.service";
import { extractElementSettingDefs, ElementSettingDef } from "components/form-elements/control.model";

@Component({
	selector: "app-control-modal",
	templateUrl: "./control-modal.component.html",
	styleUrls: ["./control-modal.component.scss"]
})
export class ControlModalComponent implements OnInit, OnDestroy {

	types: [string, string | models.ElementType][] = [];

	model: models.ControlElement = <any>{
		type: models.ElementType.Text
	};

	settingDefs: ElementSettingDef[] = [];

	subscription = new Subscription();

	constructor(private readonly nzModalRef: NzModalRef,
		private readonly _formEleSvc: FormElementService) {
		this.types = Object.entries(models.ElementType).filter((t) => typeof t[1] === "number");
	}

	ngOnInit(): void {
		this.controlTypeChange();
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onSubmit(): void {
		this.nzModalRef.close(<models.DialogResult<models.ControlElement>>{
			cancel: false,
			result: this.model
		});
	}

	onCancel(): void {
		this.nzModalRef.destroy(<models.DialogResult<models.ControlElement>>{
			cancel: true
		});
	}

	controlTypeChange(): void {
		const eleType = this._formEleSvc.getElementType(this.model.type);
		this.settingDefs = extractElementSettingDefs(eleType);
	}

	settingComponentCreated(cmpRef: ComponentRef<models.ElementSettingComponent>, settingDef: ElementSettingDef): void {
		const instance = cmpRef.instance;
		instance.value = models.Utils.deepClone((this.model as any)[settingDef.name]);
		this.subscription.add(instance.valueChange.subscribe((arg) => {
			if (!arg.cancel) {
				(this.model as any)[settingDef.name] = arg.result;
			}
		}));
	}
}
