import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import * as cmp from "components";

const routes: Routes = [
	{ path: "", component: cmp.FormsComponent, pathMatch: "full" },
	{ path: "maker", component: cmp.FormGeneratorComponent },
	{ path: "maker/:id", component: cmp.FormGeneratorComponent },
	{ path: "view/:id", component: cmp.FormViewComponent },
	// redirectTo 404 page
	{ path: "**", redirectTo: "" },
];

@NgModule({

	imports: [RouterModule.forRoot(routes)],

	exports: [RouterModule]

})

export class AppRoutingModule { }

