import { Component, OnInit } from "@angular/core";

import * as models from "models";
import { NzCheckBoxOptionInterface } from "ng-zorro-antd/checkbox";
import { ControlComponent } from "../control.component";
import { ElementSettings } from "../control.model";
import * as s from "../settings";

@ElementSettings([
	{ title: "Items", name: "items", type: s.ElementItemsSettingComponent },
])
@Component({
	selector: "app-checkbox-element",
	templateUrl: "./checkbox-element.component.html",
	styleUrls: ["./checkbox-element.component.scss"]
})
export class CheckboxElementComponent extends ControlComponent implements OnInit {

	items: models.ItemKeyValue[] = [];

	checkOptions: NzCheckBoxOptionInterface[] = [
	];

	ngOnInit(): void {
		super.ngOnInit();

		for (const item of this.items) {
			this.checkOptions.push({
				label: item.value,
				value: item.key
			});
		}
		this._parseValue();
	}

	modelChange(): void {
		this.value = this.checkOptions.filter(c => c.checked).map(c => c.value).join(",");
		this.valueChanged();
	}

	onEdit(data: models.ObjectDic): void {
		super.onEdit(data);
		this._parseValue();
	}

	onReset(): void {
		super.onReset();
		for (const opt of this.checkOptions) {
			opt.checked = false;
		}
	}

	private _parseValue(): void {
		const _values: string[] = this.value && this.value.split(",");

		if (!models.Utils.any(_values)) {
			return;
		}
		for (const check of this.checkOptions) {
			if (_values && _values.includes(check.value)) {
				check.checked = true;
			} else {
				check.checked = false;
			}
		}
	}
}
