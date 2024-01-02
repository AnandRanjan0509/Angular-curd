import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
//import { ApiService } from 'src/app/services/api.service';
import{ApiService} from '../../services/api.service'

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let apiServiceMock:any;

  beforeEach(async () => {
    apiServiceMock={
        getUsers:jest.fn()
    }



    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      providers:[
        {
            provide:ApiService , useValue:apiServiceMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should getAllUsers ', ()=>{
    const expRes={
      name:[
        {
          "fname": "sundram",
          "lname": "singh",
          "dob": "2022-11-30T10:20:36.547Z",
          "username": "anandkkk",
          "email": "aaa@gmail.com",
          "password": "Abcd@122",
          "phone": [
            "7689765439"
          ],
          "id": 5
        },
      ]
      
    
    };
    //const spysplit = jest.spyOn(component, 'getAllUsers');
    //jest.spyOn(apiServiceMock, 'getAllUsers').mockReturnValue(of(expRes));
    jest.spyOn(apiServiceMock, 'getusers').mockReturnValue(of(expRes))
    fixture.detectChanges();
      
    
    //expect().toHaveBeenCalled();
   // expect(spysplit).toHaveBeenCalled();
  })

  it(`should have as title 'Angular13curd'`,()=>
  {
  const app= fixture.componentInstance;
  expect(app.title).toEqual('Angular13curd')
  })


});
