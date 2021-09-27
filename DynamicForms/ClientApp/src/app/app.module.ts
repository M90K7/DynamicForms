import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppNgZorroAntdModule } from "./app-ng-zorro-antd.module";
import { DynamicModule } from "ng-dynamic-component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import * as cmp from "components";

@NgModule({
	declarations: [
		AppComponent,
		cmp.HeaderComponent,
		cmp.FooterComponent,
		cmp.FormsComponent,
		cmp.FormGeneratorComponent,
		cmp.FormViewComponent,
		cmp.ControlModalComponent,
		cmp.CheckboxElementComponent,
		cmp.DateElementComponent,
		cmp.DateRangeElementComponent,
		cmp.NumberElementComponent,
		cmp.RadioElementComponent,
		cmp.SelectElementComponent,
		cmp.TextAreaElementComponent,
		cmp.TextElementComponent,
		cmp.ElementItemsSettingComponent,
		cmp.ElementCheckboxSettingComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		AppNgZorroAntdModule,
		DynamicModule,
		// App Module
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
