import { Component, OnInit } from "@angular/core";

import { NzModalRef } from "ng-zorro-antd/modal";

import * as models from "models";

@Component({
	selector: "app-control-modal",
	templateUrl: "./control-modal.component.html",
	styleUrls: ["./control-modal.component.scss"]
})
export class ControlModalComponent implements OnInit {

	types: [string, string | models.ElementType][] = [];

	model: models.ControlElement = <any>{
		type: models.ElementType.Text
	};

	constructor(private readonly nzModalRef: NzModalRef) {
		this.types = Object.entries(models.ElementType).filter((t) => typeof t[1] === "number");
	}

	ngOnInit(): void {
		//
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

}
