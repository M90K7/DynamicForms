export interface DialogResult<T = any> {
	cancel: boolean;
	result: T;
}