import { Component } from "@angular/core";

import * as models from "models";
import { ControlComponent } from "../control.component";
import { ElementSettings } from "../control.model";
import * as s from "../settings";

@ElementSettings([
	{ title: "Items", name: "items", type: s.ElementItemsSettingComponent },
])
@Component({
	selector: "app-radio-element",
	templateUrl: "./radio-element.component.html",
	styleUrls: ["./radio-element.component.scss"]
})
export class RadioElementComponent extends ControlComponent {

	items: models.ItemKeyValue[] = [];

}
