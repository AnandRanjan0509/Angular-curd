
import { TableComponent } from './table/table.component';

import {SharedModule} from "../shared/shared/shared.module"
import { NgModule } from '@angular/core';
import { ChildDialogComponent } from './child-dialog/child-dialog.component';
//import {TranslateService} from '@ngx-translate/core';


@NgModule({
  declarations: [
    TableComponent,
    ChildDialogComponent,
   
  ],
  imports: [
    
    SharedModule
   
   
  ]
})
export class UsersModule {
  // constructor(
  //   private translate: TranslateService
  // ) {this.translate.setDefaultLang('en')}

 }
