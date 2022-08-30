import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { Customer } from '../Model/Customer';
import { User } from '../Model/User';
import { RegistrationService } from '../Services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users:any;
  username:any;
  password:any;
  mygroup:FormGroup;
  message:string="";
  isLoggedinIn:boolean=false;
  constructor(private _router:Router,private myBuilder:FormBuilder,private registerService:RegistrationService) {
    this.registerService.GetCustomers().subscribe(i=>
      {
        this.users=i;
        console.log(i);
      })

    this.mygroup=this.myBuilder.group({
      'username':[],
      'password':[]
    })
   }
    
   
   Login(){

    let userArray=this.registerService.GetCustomers().subscribe(i=>
      {this.users=i;})
      console.log(this.users);
      let userIds=new Array<number>;
      userIds=this.users.map(item => {return item.userId;});
      let UserNames=new Array<string>;
      UserNames = this.users.map(item => {return item.userName;});
      let password = this.users.map(item => {return item.password;});
      let n=UserNames.length;
      for(var i=0;i<n;i++){
      if(UserNames[i]==this.mygroup.get('username').value)
      {
        let index=i;
        if(password[i]==this.mygroup.get('password').value)
          {
            localStorage.setItem('userId',JSON.stringify(userIds[i]))
            this.isLoggedinIn=true;
            break;
          }
      }
    
    }
    if(this.isLoggedinIn){
      localStorage.setItem('uname',this.mygroup.get('username').value)
      this._router.navigate(["Home"])
    }
    else{
      this._router.navigate(["Login"]);
      this.message="Invalid Credentials!!!";
    }

   }
    


}


