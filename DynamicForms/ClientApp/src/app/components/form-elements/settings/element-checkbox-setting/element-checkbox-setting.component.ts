import { Component, EventEmitter, OnInit } from "@angular/core";

import * as models from "models";
import { ElementSettingComponent } from "../element-setting.component";

@Component({
	selector: "app-element-checkbox-setting",
	templateUrl: "./element-checkbox-setting.component.html",
	styleUrls: ["./element-checkbox-setting.component.scss"]
})
export class ElementCheckboxSettingComponent extends ElementSettingComponent<boolean> {

	value = false;
	valueChange = new EventEmitter<models.DialogResult<boolean>>();

	valueChanged(): void {
		this.valueChange.emit({
			cancel: false,
			result: this.value
		});
	}

}
