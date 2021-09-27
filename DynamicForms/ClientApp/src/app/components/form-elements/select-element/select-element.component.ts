import { Component } from "@angular/core";

import { NzSelectModeType } from "ng-zorro-antd/select";

import * as models from "models";
import { ElementSettings } from "../control.model";
import { ControlComponent } from "../control.component";
import * as s from "../settings";

@ElementSettings([
	{ title: "Items", name: "items", type: s.ElementItemsSettingComponent },
	{ title: "Multiple", name: "multiple", type: s.ElementCheckboxSettingComponent }
])
@Component({
	selector: "app-select-element",
	templateUrl: "./select-element.component.html",
	styleUrls: ["./select-element.component.scss"]
})
export class SelectElementComponent extends ControlComponent {

	items: models.ItemKeyValue[] = [];
	multiple = false;

	get mode(): NzSelectModeType {
		return this.multiple ? "multiple" : "default";
	}

	constructor() {
		super();
	}

	ngOnInit(): void {
		super.ngOnInit();
	}

}
