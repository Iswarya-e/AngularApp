import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router:Router){
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }

  }
  empJson=[
    {
      name:"Mike",
      email:"mike@gmail.com",
      role:"Public relations Manager",
      Description:"A Public Relations Officer responds to requests for information from media outlets. They aim to maintain the positive image of an organization or client. To that end, they can write marketing materials like newsletters, social media posts, and press releases.",
      logo:'../assets/person1.jpg'
    
    },
    {
      name:"Annie",
      email:"annie@gmail.com",
      role:"Marketing head",
      Description:"Crafting strategies for all Marketing teams, including Digital, Advertising, Communications and Creative. Preparing and managing monthly, quarterly and annual budgets for the Marketing department.",
      logo:'../assets/person2.jpg'
    
    },
    {
      name:"Ross",
      email:"ross@gmail.com",
      role:"Corporate Communication head",
      Description:"The HCC is responsible for the strategic planning and programming related to communications, external relations, and stakeholder engagement. The role requires a strong focus on strategies to support the achievement of operational goals",
      logo:'../assets/Person3.jpg'
    
    }
  ]
  

}
