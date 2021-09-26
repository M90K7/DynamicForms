import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { delay } from "rxjs/operators";

import * as models from "models";
import * as svc from "services";

@Component({
	selector: "app-forms",
	templateUrl: "./forms.component.html",
	styleUrls: ["./forms.component.scss"]
})
export class FormsComponent implements OnInit {

	forms: models.FormElement[] = [];
	loading = true;

	constructor(
		private readonly $router: Router,
		private readonly formSvc: svc.FormService
	) {
	}

	ngOnInit(): void {
		// add 3 nil form to view nz-skeleton loading
		this.forms.length = 3;

		this.loading = true;
		this.formSvc.getAllForm().pipe(delay(2000)).subscribe(forms => {
			this.loading = false;
			this.forms = forms;
		}, () => {
			this.forms = [];
			this.loading = false;
		});
	}

	newForm(): void {
		this.$router.navigate(["maker"]);
	}

	editForm(form: models.FormElement): void {
		this.$router.navigate(["maker", form.id]);
	}

	viewForm(form: models.FormElement): void {
		this.$router.navigate(["view", form.id]);
	}
}

