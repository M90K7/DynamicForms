import { Observable, Subject } from "rxjs";

import { ElementModel } from "./element.model";

export abstract class Validation {

	// شدن serialize جلوگیری از
	_stringify_ = false;

	protected _isValid = true;

	config?: any;

	protected _message: Array<string> = [];
	get message(): Array<string> {
		return this._message;
	}
	set message(value: Array<string>) {
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
		}
	}

	get status(): string {
		return this.isValid ? "success" : "error";
	}

	init(): void {
		//
	}

	reset(): void {
		this.message = [];
		this.isValid = true;
	}

	abstract validate(): boolean;
}

export class RequireValidation extends Validation {

	constructor(public element: ElementModel) {
		super(null);
	}

	validate(): boolean {

		this._isValid = true;
		
		if (this.element && Array.isArray(this.element.value)) {
			this.isValid = this.element.value.length > 0;
		} else {
			this.isValid = Boolean(this.element &&
				this.element.value != null &&
				this.element.value !== ""
			);
		}
		if (!this.isValid) {
			this.message = [`Field '${this.element.title || this.element.name}' is required.`];
		}

		return this.isValid;
	}
}

export class ValidationWrapper extends Validation {

	private _validations: Array<Validation> = [];

	constructor(public element?: ElementModel) {
		super(null);
		this.message = [];
	}

	init(): void {
		this.element?.valueChange.subscribe(() => {
			this.validate();
		});
	}

	reset(): void {
		super.reset();
		for (const v of this._validations) {
			v.reset();
		}
	}

	validate(): boolean {

		this.message = [];

		this._isValid = true;

		for (const v of this._validations) {
			if (!v.validate()) {
				this.message.push(...v.message);
				if (this.isValid) {
					(this.isValid = false);
				}
			}
		}
		return (this.isValid);
	}

	push(validation: Validation): Validation {
		this._validations.push(validation);
		return validation;
	}

	clear(): void {
		this._validations = [];
	}

	len(): number {
		return this._validations.length;
	}
}
