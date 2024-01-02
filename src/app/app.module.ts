import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


import { DialogComponent } from './dialog/dialog.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';
import { ChildComponent } from './dialog/child/child.component';
import { NgxTrimModule } from 'ngx-trim';
import { DialogChildComponent } from './dialog-child/dialog-child.component';
import {SharedModule} from "./shared/shared/shared.module";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ChildComponent,
    DialogChildComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FileUploadModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // MatDialogModule,
    // MatFormFieldModule,
    // MatInputModule,
    // ReactiveFormsModule,
    // FormsModule,
    // HttpClientModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatSnackBarModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // FontAwesomeModule,
    // NgxMaskModule.forRoot(),
    // NgxTrimModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
})
export class AppModule {}
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
