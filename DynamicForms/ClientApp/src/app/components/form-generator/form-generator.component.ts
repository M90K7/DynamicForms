import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { EMPTY } from "rxjs";

import { NzModalService } from "ng-zorro-antd/modal";
import { NzNotificationService } from "ng-zorro-antd/notification";


import * as models from "models";
import * as svc from "services";
import { ControlModalComponent } from "./control-modal/control-modal.component";

@Component({
	selector: "app-form-generator",
	templateUrl: "./form-generator.component.html",
	styleUrls: ["./form-generator.component.scss"]
})
export class FormGeneratorComponent implements OnInit {

	elementTypes = models.ElementType;

	form: models.FormElement = {
		id: null,
		name: "",
		title: null,
		description: null,
		controls: [],
		valueChange: EMPTY
	};

	constructor(
		private readonly $router: Router,
		private readonly $activatedRouter: ActivatedRoute,
		private readonly nzModalSvc: NzModalService,
		private readonly nzNotificationSvc: NzNotificationService,
		private readonly _formSvc: svc.FormService
	) {
	}

	ngOnInit(): void {
		const formId = this.$activatedRouter.snapshot.params["id"];
		if (formId) {
			this._formSvc.getForm(formId).subscribe(_form => {
				this.form = _form;
			});
		}
	}

	saveForm(): void {
		if (!this.form.id) {
			this.form.id = models.Utils.newGuid();
		}
		this._formSvc.saveForm(this.form).subscribe(result => {
			if (result) {
				this.nzNotificationSvc.success("Success", "Form save successfully.", {
					nzPlacement: "bottomRight"
				});
			}
		}, () => {
			this.nzNotificationSvc.error("Error!", "Can't save form page.", {
				nzPlacement: "bottomRight"
			});
		});
	}

	removeForm(): void {
		if (!this.form.id) {
			return;
		}

		this.nzModalSvc.confirm({
			nzTitle: "Delete Form",
			nzContent: "Are you sure delete this form?",
			nzOkText: "Yes",
			nzOkType: "primary",
			nzOkDanger: true,
			nzOnOk: () => {
				this._formSvc.removeForm(this.form.id!).subscribe(result => {
					if (result) {
						this.nzNotificationSvc.success("Success", "Form page deleted successfully.", {
							nzPlacement: "bottomRight"
						}).onClose.subscribe(() => {
							this.$router.navigate(["/"]);
						});
					}
				}, () => {
					this.nzNotificationSvc.error("Error!", "Can't remove form page.", {
						nzPlacement: "bottomRight"
					});
				});
			},
			nzCancelText: "No",
			nzOnCancel: () => console.log("Cancel")
		});
	}

	addControl(): void {
		this._addOrEditControl();
	}

	editControl(control: models.ControlElement): void {
		this._addOrEditControl(control);
	}

	removeControl(control: models.ControlElement, index: number): void {
		this.form.controls.splice(index, 1);
		this._refControls();
	}

	private _addOrEditControl(control?: models.ControlElement) {
		const modalRef = this.nzModalSvc.create<ControlModalComponent, models.DialogResult<models.ControlElement>>({
			nzTitle: "Add Control",
			nzContent: ControlModalComponent,
			nzCentered: true,
			nzWidth: "50%",
			nzComponentParams: { model: control ? models.Utils.deepClone(control) : <any>{ type: models.ElementType.Text } }
		});
		modalRef.afterClose.subscribe(arg => {
			if (arg.cancel) {
				return;
			}
			if (control) { // edit
				const controlIndex = this.form.controls.findIndex(c => c.id === control.id);
				if (controlIndex > -1) {
					this.form.controls[controlIndex] = arg.result;
					this._refControls();
				}
			} else { // new
				arg.result.id = models.Utils.newGuid();
				this.form.controls = models.Utils.clone([...this.form.controls, arg.result]);
			}
		});
	}

	private _refControls() {
		this.form.controls = models.Utils.clone(this.form.controls);
	}
}
