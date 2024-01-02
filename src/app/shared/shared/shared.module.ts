import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from '../../users/users-routing.module';
import { TableComponent } from '../../users/table/table.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
//import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';
import { ChildComponent } from '../../dialog/child/child.component';
import { NgxTrimModule } from 'ngx-trim';
import { DialogChildComponent } from '../../dialog-child/dialog-child.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

@NgModule({
  imports: [
    NgxTrimModule,
    NgxMaskModule.forRoot(),
    //  BrowserModule,
    //  AppRoutingModule,
    //  BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    // MatSortModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FontAwesomeModule,
    CommonModule,
    UsersRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    NgxTrimModule,
    NgxMaskModule,
    //  BrowserModule,
    //   AppRoutingModule,
    //   BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    // MatSortModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FontAwesomeModule,

    CommonModule,
    UsersRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule
  ],
})
export class SharedModule {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
   
  }
}
