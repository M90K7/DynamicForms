import { Component } from "@angular/core";

import { NzIconService } from "ng-zorro-antd/icon";
import {
	GithubOutline,
	PlusOutline,
	MinusOutline,
	EditOutline,
	SaveOutline,
	DeleteOutline,
	FormOutline
} from "@ant-design/icons-angular/icons";

@Component({

	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {

	constructor(nzIconSvc: NzIconService) {
		nzIconSvc.addIcon(
			GithubOutline,
			PlusOutline,
			MinusOutline,
			EditOutline,
			SaveOutline,
			DeleteOutline,
			FormOutline
		);
	}

}

