import { Component, OnInit } from "@angular/core";

import { ControlComponent } from "../control.component";

@Component({
	selector: "app-number-element",
	templateUrl: "./number-element.component.html",
	styleUrls: ["./number-element.component.scss"]
})
export class NumberElementComponent extends ControlComponent implements OnInit {

	constructor() { 
		super();
	}

	ngOnInit(): void {
		//
	}

}
