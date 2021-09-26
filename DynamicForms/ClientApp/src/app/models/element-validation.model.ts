import { Observable, Subject } from "rxjs";

import { ElementModel } from "./element.model";

export abstract class Validation {

	// شدن serialize جلوگیری از
	_stringify_ = false;

	private _changeSubject = new Subject<Validation>();
	private _isValid = true;

	config?: any;

	private _message: Array<string> = [];
	public get message(): Array<string> {
		return this._message;
	}
	public set message(value: Array<string>) {
		this._message = value;
	}

	element?: ElementModel;

	/**
	 * 
	 * @param config Additional validation settings 
	 */
	constructor(config: any) {
		this.config = config;
	}

	get isValid(): boolean {
		return this._isValid;
	}

	set isValid($val: boolean) {
		if (this._isValid !== $val) {
			this._isValid = $val;
			this._changeSubject.next(this);
		}
	}

	get status(): string {
		return this.isValid ? "success" : "error";
	}

	get change(): Observable<Validation> {
		return this._changeSubject;
	}

	abstract validate(): boolean;
}

export class RequireValidation extends Validation {
	
	get message(): Array<string>{
		return [`Field '${this.element.title || this.element.name}' is required.`];
	}

	constructor(public element: ElementModel) {
		super(null);
	}

	validate(): boolean {

		if (this.element && Array.isArray(this.element.value)) {
			return (this.isValid = this.element.value.length > 0);
		}

		this.isValid = Boolean(this.element &&
			this.element.value != null &&
			this.element.value !== ""
		);

		return this.isValid;
	}
}

export class ValidationWrapper extends Validation {

	private _validations: Array<Validation> = [];

	constructor() {
		super(null);
		this.message = [];
	}

	validate(): boolean {

		this.message = [];

		for (const v of this._validations) {
			if (!v.validate()) {
				this.message.push(...v.message);
				return (this.isValid = false);
			}
		}
		return (this.isValid = true);
	}

	push(validation: Validation): Validation {
		this._validations.push(validation);
		validation.change.subscribe(() => {
			setTimeout(() => this.validate(), 10);
		});
		return validation;
	}

	clear(): void {
		this._validations = [];
	}

	len(): number {
		return this._validations.length;
	}
}
