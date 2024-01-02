import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent} from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ChildDialogComponent} from './users/child-dialog/child-dialog.component'
import {DialogChildComponent} from './dialog-child/dialog-child.component'
import {TranslateService} from '@ngx-translate/core';
import { FileUploader } from 'ng2-file-upload';

//import { TableComponent } from "./users/table/table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular14curd';
  public uploader: FileUploader = new FileUploader({url: ''});

  displayedColumns: string[] = ['name', 'username', 'email', 'phone', 'action'];
  dataSource!: MatTableDataSource<any>;
  //dataSource!: any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dialogRef: any;

  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private _snackBar: MatSnackBar,
    private translate: TranslateService
    //private table:TableComponent
   
    
  ) {
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
   //this.getAllUsers();
   
   
    
  }
  dialogB()
  {
    this.dialog.open(DialogChildComponent,{
      disableClose: true,
      //data: "Do you want to see User List"
      
    }).afterClosed()
     
  }

  openDialog() {
    this.dialogRef = this.dialog
      .open(DialogComponent, {
        width: '30%',
      });

      this.dialogRef.afterClosed()
      .subscribe((val: any) => {
        if (val === 'add') {
          this.getAllUsers();
          //this.table
        
         
        }
       
      });
    
  }
 
  getAllUsers() {
    this.api.getUsers().subscribe({
      next: (res) => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        //this.dataSource = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
      },
      error: () => {
        alert('Error While Fetching The Data');
      },
    });
   // this.getAllUsers()
  }

  editUser(row: any) {
    this.dialog
      .open(DialogComponent, {
        width: '30%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.getAllUsers();
        }
      });
  }

  deleteUser(id: number) {
    this.api.deleteUser(id).subscribe({
      next: (res) => {
        this._snackBar.open('User deleted successfully', 'ok', {
          duration: 2000,
        });
        this.getAllUsers();
      },
      error: () => {
        this._snackBar.open('SORRY,User could not be deleted', 'ok', {
          duration: 2000,
        });
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  hindi(){
    this.translate.use('hi');
    
  }
  english(){
    this.translate.use('en');

  }

  test():boolean{
    return true
  }

}
