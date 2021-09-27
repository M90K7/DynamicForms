import { Component, EventEmitter, Input } from "@angular/core";

import * as models from "models";
import { ElementSettingDef } from "../control.model";

@Component({
	template: ""
})
export abstract class ElementSettingComponent<T = unknown> implements models.ElementSettingComponent<T> {

	abstract value: T;
	abstract valueChange: EventEmitter<models.DialogResult<T>>;

	@Input()
	settingDef?: ElementSettingDef

}