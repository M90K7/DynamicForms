import { Component, OnInit } from "@angular/core";

import { ControlComponent } from "../control.component";

@Component({
	selector: "app-date-element",
	templateUrl: "./date-element.component.html",
	styleUrls: ["./date-element.component.scss"]
})
export class DateElementComponent extends ControlComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit(): void {
		//
	}

}
