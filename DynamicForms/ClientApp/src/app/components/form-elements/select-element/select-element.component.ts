import { Component } from "@angular/core";

import { ControlComponent } from "../control.component";

@Component({
	selector: "app-select-element",
	templateUrl: "./select-element.component.html",
	styleUrls: ["./select-element.component.scss"]
})
export class SelectElementComponent extends ControlComponent {

	constructor() {
		super();
	}

	ngOnInit(): void {
		super.ngOnInit();
	}

}
