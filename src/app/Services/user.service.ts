import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:any;

  constructor(private http:HttpClient) { }
  getUserData():Observable<User[]>{
    return this.http.get<User[]>("http://jsonplaceholder.typicode.com/users")
  }
  getUserDatabyId(id:number){
    if(typeof id != 'undefined' && id){
      return this.http.get("http://jsonplaceholder.typicode.com/users?id="+id);
    }
    else{
      return this.http.get("http://jsonplaceholder.typicode.com/users");
    }
  }
  getparticularUserData(id:number){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
   
  }
  getUserDatabyName(name:any){
    if(typeof name != 'undefined' && name){
      return this.users=this.http.get("https://jsonplaceholder.typicode.com/users?name="+name);
    }
    else
    {
      return this.http.get("http://jsonplaceholder.typicode.com/users");
    }
   
  }
  getUserDatabyEmail(email:any){
    if(typeof email != 'undefined' && email){
      return this.users=this.http.get("https://jsonplaceholder.typicode.com/users?email="+email);
    }
    else{
      return this.http.get("http://jsonplaceholder.typicode.com/users");
    }
   
  }

}
