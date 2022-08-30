import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../Services/registration.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent{

  users:any;
  constructor(private registerService:RegistrationService,private router:Router) { 


    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a))
    {
      this.router.navigate(["Login"])
    }
    this.registerService.GetCustomers().subscribe(i=>
      {
        this.users=i;
        console.log(i);
      })
  
  }


}
