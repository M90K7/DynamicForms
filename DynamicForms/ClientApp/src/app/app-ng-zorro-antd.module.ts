import { NgModule } from "@angular/core";

import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzNotificationModule } from "ng-zorro-antd/notification";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzRadioModule } from "ng-zorro-antd/radio";

import { NzIconModule } from "ng-zorro-antd/icon";

import { NZ_I18N, en_US } from "ng-zorro-antd/i18n";

@NgModule({
	exports: [
		NzLayoutModule,
		NzTableModule,
		NzModalModule,
		NzButtonModule,
		NzNotificationModule,
		NzToolTipModule,
		NzFormModule,
		NzSpaceModule,
		NzSelectModule,
		NzInputModule,
		NzCardModule,
		NzSkeletonModule,
		NzInputNumberModule,
		NzDatePickerModule,
		NzCheckboxModule,
		NzIconModule,
		NzRadioModule
	],
	providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AppNgZorroAntdModule {

}
