import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  loggedinUser:string;
  constructor(private router:Router){
    let a=localStorage.getItem('uname');
    console.log(a);
    
    if((typeof a != 'undefined' && a)){
      this.loggedinUser=a;
    }
  }
}

