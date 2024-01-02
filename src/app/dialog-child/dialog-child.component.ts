import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-dialog-child',
  templateUrl: './dialog-child.component.html',
  styleUrls: ['./dialog-child.component.scss']
})
export class DialogChildComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data:string, private translate: TranslateService) { translate.setDefaultLang('en') }

  ngOnInit(): void {
  }

}
