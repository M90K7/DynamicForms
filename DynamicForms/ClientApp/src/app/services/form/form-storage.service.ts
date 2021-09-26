import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import * as models from "models";

@Injectable({
	providedIn: "root"
})
export class FormStorageService {

	private readonly FORM_KEY = "form_";

	private get storage(): Storage {
		return localStorage;
	}

	save(form: models.FormElement): Observable<boolean> {
		this.remove(form.id!);
		this.storage.setItem(this._id(form.id!), models.Utils.stringify(form));
		return of(true);
	}

	remove(id: string): Observable<boolean> {
		id = this._id(id);

		if (this.storage[id]) {
			this.storage.removeItem(id);
			return of(true);
		}
		return of(false);
	}

	get(id: string): Observable<models.FormElement> {
		const str = this.storage.getItem(this._id(id));
		return of(str ? JSON.parse(str) : null);
	}

	getAll(): Observable<models.FormElement[]> {
		const forms: models.FormElement[] = [];
		for (const key in this.storage) {
			if (key.startsWith(this.FORM_KEY)) {
				forms.push(JSON.parse(this.storage[key]));
			}
		}
		return of(forms);
	}

	private _id(id: string) {
		return this.FORM_KEY + id;
	}

}
