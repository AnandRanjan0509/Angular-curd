

import {  of } from 'rxjs';
import { User, UserAdapter } from '../models/user.model';
import { ApiService } from './api.service';


describe('ApiService', ()=>{
  let service:ApiService;
  let httpClientSpy:any;
  let userAdapterSpy:any={adapt:jest.fn()}
  
  


  beforeEach(()=>{
    httpClientSpy={
      get:jest.fn(),
      post:jest.fn(),
      put:jest.fn(),
      delete:jest.fn()
    }
    service= new ApiService(httpClientSpy)

  })

  it('should test service', (done)=>{
    const res: any[] = [{
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
    }]
    const url='http://localhost:3000/user-list'
    jest.spyOn(httpClientSpy,'get').mockReturnValue(of(res))  
    const usersObs=service.getUsers()
     expect(httpClientSpy.get).toBeCalledTimes(1);
     //expect(HttpClientSpy.get).toHaveBeenCalledWith(url);
    //  expect(HttpClientSpy.get.map()).
     usersObs.subscribe(response=>
      {
        expect(userAdapterSpy.adapt).toBeCalledTimes(res.length)
        done();
      })


    
    
  })


  //post

  it('should test service', ()=>{
    
    
    const url='http://localhost:3000/user-list'
    const command:User = new User();
    const res: any[] = [{
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
    }]
   
   
    jest.spyOn(httpClientSpy,'post').mockReturnValue(of(res)) ;
    const userObse=service.postUser(command)
     expect(httpClientSpy.post).toBeCalledTimes(1);
    //expect(HttpClientSpy.post).toHaveBeenCalledWith(url,data);
     //expect(HttpClientSpy.post.map()).toBeCalledTimes(1)
     userObse.subscribe(response=>
      {
        expect(userAdapterSpy.adapt).toBeCalledTimes(res.length)
      })
  })

  //put

  it('should test service', ()=>{
    const data='aaaa'
    
    const res = [{
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
    }]
    const url='http://localhost:3000/user-list'
    const id=5
    const commands:User = new User();
    
    jest.spyOn(httpClientSpy,'put').mockReturnValue(of(res)) ;
    const usersObs=service.putUser(commands,id)
     expect(httpClientSpy.put).toBeCalledTimes(1);
     //expect(HttpClientSpy.put).toHaveBeenCalledWith(url ,data);
     //expect(HttpClientSpy.post).toHaveBeenCalledWith(url);
    //  expect(HttpClientSpy.get.map()).toBeCalled()
    usersObs.subscribe(response=>
      {
        expect(userAdapterSpy.adapt).toBeCalledTimes(res.length)
      })
  })

  //delete

  it('should test service', ()=>{
    
    const res = [{
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
    }]
    const url='http://localhost:3000/user-list/'
    const id=5
   
    
     //const commands:User = new User();
    
    jest.spyOn(httpClientSpy,'delete').mockReturnValue(of(res)) ;
    const usersObs=service.deleteUser(5)
     expect(httpClientSpy.delete).toBeCalledTimes(1);
     expect(httpClientSpy.delete).toHaveBeenCalledWith(url+id);
    // expect(HttpClientSpy.get.map()).toBeCalled()
    usersObs.subscribe(response=>
      {
        expect(userAdapterSpy.adapt).toBeCalledTimes(res.length)
      })
  })
})



