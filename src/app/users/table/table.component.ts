import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { ApiService } from '../../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogChildComponent } from '../../dialog-child/dialog-child.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { HttpParams } from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  title = 'Angular13curd';

  displayedColumns: string[] = ['name', 'username', 'email', 'phone', 'action'];
  //dataSource!: MatTableDataSource<any>;
  dataSource:any
  dataSourceB: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filter: string | any[] | null | undefined;
  activatedRoute: any;
  filterValue!: string | null;

  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private _snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    // this.activeRoute.queryParams.subscribe(dat=>
    //   {
    //     dat=this.dataSource
    //     console.log(dat);
    //   })
    
  }
  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.dataSource);

    // this.activeRoute.queryParams.subscribe((pram: any) => {
    //   this.dataSource=pram.get("key").filteredData
    //   const filterValue = pram.get("hi");
    //   this.dataSource.filter = filterValue.trim()
    //   console.log(this.dataSource.filteredData);
    // });
    // this.activeRoute.queryParams.subscribe((pram: any) => {
    //   this.dataSourceB=pram.get("hi")

    // })

    this.activatedRoute.queryParamMap.subscribe((params:any) => {
      //this.dataSourceB=params.get('hi')
      console.log(params.get('page'));
      this.filterValue = params.get('page');
    });
  }
  openDialog() {
    this.dialog
      .open(DialogComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'add') {
          this.getAllUsers();
        }
      });

      console.log(this.dataSource[0].fname);
      
  }
  getAllUsers() {
    this.api.getUsers().subscribe({
      next: (res) => {
        console.log(res);
        //this.dataSourceB=res
       // this.dataSource = new MatTableDataSource(res);
      this.dataSource=res

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (this.filterValue) {
          this.dataSource.filter = this.filterValue;
        }
        // this.router.navigate(['/admin/users'], {
        //   queryParams: { id: 1 },
        // });
        this.getAllUsers()
      },
      error: () => {
        alert('Error While Fetching The Data');
      },
    });
 
  
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
    this.dialog
      .open(DialogChildComponent, {
        disableClose: true,
        data:' '
      })
      .afterClosed()
      .subscribe((val) => {
        if (val == 'Yes') {
          this.api.deleteUser(id).subscribe({
            next: (res) => {
              console.log(res);

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
      });
    // this.api.deleteUser(id).subscribe({
    //   next: (res) => {
    //     this._snackBar.open('User deleted successfully', 'ok', {
    //       duration: 2000,
    //     });
    //     this.getAllUsers();
    //   },
    //   error: () => {
    //     this._snackBar.open('SORRY,User could not be deleted', 'ok', {
    //       duration: 2000,
    //     });
    //   },
    // });
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim();
  //   console.log(this.dataSource.filteredData);

  //   const params = new HttpParams().append('key', filterValue);
  //   this.router.navigate([], { queryParams: params});

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }

  //   // if( (event.target as HTMLInputElement).value!='')
  //   // {
  //   //   console.log(this.dataSourceB);
  //   //   this.dataSourceB=this.dataSource.filteredData
  //   //   console.log(this.dataSourceB);

  //   // }
  // }

  search(event: string) {
    const filterValue = event;
    this.filterValue = filterValue.trim();
    this.dataSource.filter = filterValue.trim();
    console.log(this.dataSource.filteredData);

    //  const params = new HttpParams().append('key', filterValue);

    // this.router.navigate([], { queryParams: params});

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
    this.router.navigate(['/users'], {
      queryParams: { key: this.filterValue },
    });
    // this.router.navigate(['/users'], {
    //   queryParams: { hi: this.dataSource.filteredData },
    // });
  }
}
