import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserAdapter } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  postUser(data: User): Observable<User> {
    return this.http.post('http://localhost:3000/user-list', data).pipe(
      map((response: any) => {
       
          return new UserAdapter().adapt(response);
       
      })
    );
  }
  // getUser():Observable<User[]> {
  //   return this.http.get<any>('http://localhost:3000/user-list')
  // }
  getUsers(): Observable<User[]> {
    return this.http.get('http://localhost:3000/user-list').pipe(
      map((response: any) => {
        return response.map((element: any) => {
          return new UserAdapter().adapt(element);
        });
      })
    );
  }
  putUser(data: User, id: number): Observable<User> {
    return this.http.put('http://localhost:3000/user-list/' + id, data).pipe(
      map((response: any) => {
        return new UserAdapter().adapt(response);
      })
    );
  }

  // putUser(data: User, id: number): Observable<User> {
  //   return this.http.put('http://localhost:3000/user-list/' + id, data).pipe(map((response: any) => {
  //     return response.map((element: User) => {
  //       return element as User
  //     });
  //   }));
  // }
  deleteUser(id: number): Observable<User> {
    return this.http.delete('http://localhost:3000/user-list/' + id).pipe(
      map((response: any) => {
        return new UserAdapter().adapt(response);
      })
    );
  }
}
