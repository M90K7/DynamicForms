import { Component } from "@angular/core";

import { ControlComponent } from "../control.component";

@Component({
	selector: "app-text-element",
	templateUrl: "./text-element.component.html",
	styleUrls: ["./text-element.component.scss"]
})
export class TextElementComponent extends ControlComponent {

	constructor() {
		super();
	}

	ngOnInit(): void {
		super.ngOnInit();
	}

}



