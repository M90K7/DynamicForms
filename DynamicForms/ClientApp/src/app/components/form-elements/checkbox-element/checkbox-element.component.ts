import { Component, OnInit } from "@angular/core";

import { ControlComponent } from "../control.component";

@Component({
	selector: "app-checkbox-element",
	templateUrl: "./checkbox-element.component.html",
	styleUrls: ["./checkbox-element.component.scss"]
})
export class CheckboxElementComponent extends ControlComponent implements OnInit {

	constructor() { 
		super();
	}

	ngOnInit(): void {
		//
	}

}
