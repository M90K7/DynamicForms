import { ChangeDetectionStrategy, Component, ComponentRef, OnInit, Type } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { FormElementService } from "../form-element.service";

import * as models from "models";
import * as svc from "services";
import { ControlComponent } from "components/form-elements/control.component";

@Component({
	selector: "app-form-view",
	templateUrl: "./form-view.component.html",
	styleUrls: ["./form-view.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormViewComponent implements OnInit {

	formElement: models.FormElement | null = null;
	feedbackEnable = false;

	dataItems: models.ObjectDic[] = [];

	editIndex = -1;

	constructor(
		private readonly $router: Router,
		private readonly $activatedRouter: ActivatedRoute,
		private readonly _formSvc: svc.FormService,
		private readonly _formEleSvc: FormElementService
	) {
	}

	ngOnInit(): void {
		const formId = this.$activatedRouter.snapshot.params["id"];
		if (!formId) {
			this.$router.navigate([""]);
			return;
		}

		this._formSvc.getForm(formId).subscribe(_form => {
			this.formElement = _form;
			this.formElement.validation = new models.ValidationWrapper();
		});

	}

	getElement(control: models.ControlElement): Type<unknown> {
		return this._formEleSvc.getElementType(control.type);
	}

	createElement(cmpRef: ComponentRef<models.ControlElement>, control: models.ControlElement): void {
		Object.assign(cmpRef.instance, control);
		control.component = {
			_stringify_: false,
			instance: cmpRef.instance
		};
		cmpRef.instance.validation = new models.ValidationWrapper(cmpRef.instance);
		this.formElement?.validation?.push(cmpRef.instance.validation);
	}

	saveData(): void {
		if (!this.formElement?.validation?.validate()) {
			this.feedbackEnable = true;
			return;
		}
		const data: models.ObjectDic = {};
		if (this.formElement) {
			for (const control of this.formElement.controls) {
				if (control && control.name && control.component) {
					control.value = control.component.instance.value;
					data[control.name] = control.value;
				}
			}
		}
		if (this.editIndex > -1) {
			this.dataItems[this.editIndex] = data;
		} else {
			this.dataItems.push(data);
		}

		this.dataItems = models.Utils.clone(this.dataItems);

		this.resetControlData();
	}

	resetControlData(): void {
		this.feedbackEnable = false;

		this.editIndex = -1;

		if (this.formElement) {
			for (const control of this.formElement.controls) {
				if (control && control.name && control.component) {
					(control.component.instance as models.ControlElement).onReset &&
						(control.component.instance as models.ControlElement).onReset();

				}
			}
		}
		this.formElement?.validation?.reset();
	}

	editData(data: models.ObjectDic, index: number): void {
		this.feedbackEnable = false;
		if (this.formElement) {
			this.editIndex = index;
			for (const control of this.formElement.controls) {
				if (control && control.name && control.component) {
					(control.component.instance as models.ControlElement).onEdit &&
						(control.component.instance as models.ControlElement).onEdit(data);
				}
			}
		}
	}

	removeData(data: models.ObjectDic, index: number): void {
		this.dataItems.splice(index, 1);

		this.dataItems = models.Utils.clone(this.dataItems);
	}
}
