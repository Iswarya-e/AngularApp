import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})

export class UsersComponent {
  user:any;
  Id:any;
  Name:any;
  Email:any;

  constructor(private UserObj:UserService,private router:Router) {
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }
    this.UserObj.getUserData().subscribe(i=>{this.user=i;});
    
   }
   SearchbyEmail(){
    this.UserObj.getUserDatabyEmail(this.Email).subscribe(i=>{this.user=i;});

   }
   SearchbyName(){
    this.UserObj.getUserDatabyName(this.Name).subscribe(i=>{this.user=i;});

   }
   SearchbyId(){
    this.UserObj.getUserDatabyId(this.Id).subscribe(i=>{this.user=i;});
    }

}
