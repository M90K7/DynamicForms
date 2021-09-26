import { Component, OnInit } from "@angular/core";

import { ControlComponent } from "../control.component";

@Component({
	selector: "app-date-range-element",
	templateUrl: "./date-range-element.component.html",
	styleUrls: ["./date-range-element.component.scss"]
})
export class DateRangeElementComponent extends ControlComponent implements OnInit {

	constructor() { 
		super();
	}

	ngOnInit(): void {
		//
	}

}
