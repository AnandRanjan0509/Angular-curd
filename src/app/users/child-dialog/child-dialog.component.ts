import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-child-dialog',
  templateUrl: './child-dialog.component.html',
  styleUrls: ['./child-dialog.component.scss']
})
export class ChildDialogComponent implements OnInit {
  dataSource: any;
  api: any;
  sort: any;
  paginator: any;

  constructor() { }

  ngOnInit(): void {
  }



  

}
