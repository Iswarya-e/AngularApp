import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router)
  {
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a))
    {
      this.router.navigate(["Login"])
    }
  }

  ngOnInit(): void 
  {
  }

}
