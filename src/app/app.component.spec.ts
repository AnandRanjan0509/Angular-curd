import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
import { DialogComponent} from './dialog/dialog.component';
import { AppComponent } from "./app.component";
//import { ApiService } from './services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Dialog } from "@angular/cdk/dialog";
import { transition } from "@angular/animations";
import { of } from 'rxjs';
import {ApiService} from './services/api.service'

class MatDialogRefStub {
  public afterClosed = jest.fn();
}

class MatDialogStub {
  public open = jest.fn().mockReturnValue(new MatDialogRefStub());
}


describe('AppComponent', () => {
  let dialogRef: MatDialog;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: MatDialog, useClass: MatDialogStub }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    dialogRef = TestBed.inject<MatDialog>(MatDialogStub as any);
  });
  

  it('should create the app', () => {
    
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    app.dialogB();
    expect(dialogRef.open).toHaveBeenCalled()
    dialogRef.closeAll();
  });

  it(`should have as title 'Angular13curd'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular13curd');
  });
} )

