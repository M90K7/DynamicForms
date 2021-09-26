import { Component } from "@angular/core";

import { ControlComponent } from "../control.component";

@Component({
	selector: "app-radio-element",
	templateUrl: "./radio-element.component.html",
	styleUrls: ["./radio-element.component.scss"]
})
export class RadioElementComponent extends ControlComponent {

	constructor() { 
		super();
	}

	ngOnInit(): void {
		super.ngOnInit();
	}

}
