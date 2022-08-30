import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  message:string;
  constructor(private router:Router) { 
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a))
    {
      this.router.navigate(["Login"])
    }
    localStorage.clear();
    localStorage.removeItem('uname')
    this.message="You are logged out successfully";
   
  }

 

}
