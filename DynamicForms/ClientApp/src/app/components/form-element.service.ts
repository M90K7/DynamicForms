import { Injectable, Type } from "@angular/core";

import * as models from "models";
import * as elements from "./form-elements";

@Injectable({
	providedIn: "root"
})
export class FormElementService {

	constructor() {
		//
	}

	getElementType(type: models.ElementType): Type<unknown> {
		switch (type) {
		case models.ElementType.Checkbox:
			return elements.CheckboxElementComponent;
		case models.ElementType.Date:
			return elements.DateElementComponent;
		case models.ElementType.DateRange:
			return elements.DateRangeElementComponent;
		case models.ElementType.Number:
			return elements.NumberElementComponent;
		case models.ElementType.Radio:
			return elements.RadioElementComponent;
		case models.ElementType.Select:
			return elements.SelectElementComponent;
		case models.ElementType.TextArea:
			return elements.TextAreaElementComponent;
		case models.ElementType.Text:
			return elements.TextElementComponent;
		default:
			return elements.TextElementComponent;
		}
	}
}
