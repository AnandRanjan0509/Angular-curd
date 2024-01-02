import { FormControl, FormArray } from '@angular/forms';
import { Adapter } from '../Adapter';

export class User {
  fname: string;
  lname: string;
  dob: Date;
  username: string | number | symbol;
  password: string | number | symbol;
  phone: Array<number>;
  email: string | number | symbol;
  id: number;

  constructor() {
    this.fname = '';
    this.lname = '';
    this.dob = new Date();
    this.username = '';
    this.password = '';
    this.phone = [];
    this.email = '';
    this.id = 0;
  }
}

export class UserAdapter implements Adapter<User> {
  adapt(data: any): User {
    const user = new User();
    try {
      user.id = data.id;
      user.fname = data.fname;
      user.lname=data.lname;
      user.dob=data.dob;
      user.username=data.username;
      user.password=data.password;
      user.phone=data.phone;
      user.email=data.email;
      

    } catch (e) {
      console.log(e);
    }
    return user;
  }
}

export interface UserLoginForm {
  fname: FormControl<string>;
  lname: FormControl<string>;
  dob: FormControl<Date>;
  username: FormControl<string | number | symbol>;
  password: FormControl<string | number | symbol>;
  phone: FormArray<FormControl<number>>;
  email: FormControl<string | number | symbol>;
  id: FormControl<number>;
}
