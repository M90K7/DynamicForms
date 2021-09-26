import { Component } from "@angular/core";

import { ControlComponent } from "../control.component";

@Component({
	selector: "app-text-area-element",
	templateUrl: "./text-area-element.component.html",
	styleUrls: ["./text-area-element.component.scss"]
})
export class TextAreaElementComponent extends ControlComponent {

	constructor() {
		super();
	}

	ngOnInit(): void {
		super.ngOnInit();
	}

}
