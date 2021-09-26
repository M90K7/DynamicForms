import { Injectable } from "@angular/core";

import * as models from "models";
import { Observable } from "rxjs";
import { FormStorageService } from "./form-storage.service";

@Injectable({
	providedIn: "root"
})
export class FormService {

	constructor(private readonly storageSvc: FormStorageService) {
	}

	saveForm(form: models.FormElement): Observable<boolean> {
		return this.storageSvc.save(form);
	}

	removeForm(id: string): Observable<boolean> {
		return this.storageSvc.remove(id);
	}

	getForm(id: string): Observable<models.FormElement> {
		return this.storageSvc.get(id);
	}

	getAllForm(): Observable<models.FormElement[]> {
		return this.storageSvc.getAll();
	}
}
