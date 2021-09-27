import { Component, EventEmitter, OnInit} from "@angular/core";

import * as models from "models";
import { ElementSettingComponent } from "../element-setting.component";

@Component({
	selector: "app-element-items-setting",
	templateUrl: "./element-items-setting.component.html",
	styleUrls: ["./element-items-setting.component.scss"]
})
export class ElementItemsSettingComponent extends ElementSettingComponent<models.ItemKeyValue[]> implements OnInit {

	isVisible = false;

	value: models.ItemKeyValue[] = [];
	valueChange = new EventEmitter<models.DialogResult<models.ItemKeyValue[]>>();
	copyValue: models.ItemKeyValue[] = [];

	ngOnInit(): void {
		if (this.value == null) {
			this.value = [];
		}
		this._copyValue();
	}
	

	showModal(): void {
		this.isVisible = true;
	}

	handleOk(): void {
		this.isVisible = false;
		
		this._copyValue();

		this.valueChange.emit(<models.DialogResult>{
			cancel: false,
			result: models.Utils.deepClone(this.value)
		});
	}

	handleCancel(): void {
		this.isVisible = false;
		this.value = models.Utils.deepClone(this.copyValue);
		this.valueChange.emit(<models.DialogResult>{ cancel: true });
	}

	addRow(): void {
		this.value.push({ key: "", value: "" });
		this._updateValue();
	}
	remove(item: models.ItemKeyValue, index: number): void {
		this.value.splice(index, 1);
		this._updateValue();
	}

	private _updateValue(): void {
		this.value = models.Utils.clone(this.value);
	}
	
	private _copyValue(){
		this.copyValue = models.Utils.deepClone(this.value);
	}
}
