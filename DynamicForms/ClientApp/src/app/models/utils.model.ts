export class Utils {

	static deepClone<T>(obj: T): T {
		if (!obj) {
			return obj;
		}
		return <T>JSON.parse(JSON.stringify(obj));
	}

	static clone<T>(obj: T): T {
		if (Array.isArray(obj)) {
			return Array<unknown>().concat(obj) as unknown as T;
		}
		return { ...obj };
	}

	static any(object: any): boolean {
		if (object instanceof Array) {
			return Array.isArray(object) && object.length > 0;
		}
		if (object instanceof Object) {
			return object && Object.keys(object).length > 0;
		}
		return false;
	}

	private static __s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	/**
	 * @description
	 * Guid ایجاد نوع
	 */
	static newGuid(splitter = "-"): string {
		return this.__s4() + this.__s4() + splitter +
			this.__s4() + splitter +
			this.__s4() + splitter +
			this.__s4() + splitter +
			this.__s4() + this.__s4() + this.__s4();
	}

	static stringify(obj: unknown): string {
		return JSON.stringify(obj,
			(key, value) => {
				if (Array.isArray(value) && value.length > 0) {
					value = value.filter(v => {
						if (v && v instanceof Object) {
							return (v as any)._stringify_ !== false;
						}
						return true;
					});
				}
				if (key === "_ref_" || (value && value._stringify_ === false)) {
					return undefined;
				}
				return value;
			});
	}

}