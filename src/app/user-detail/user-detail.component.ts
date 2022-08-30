import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  user:any;

  constructor(private activatedroute:ActivatedRoute,
    private userobj:UserService) { }

  ngOnInit() {
    let id=this.activatedroute.snapshot.params['id'];
    this.userobj.getparticularUserData(id).subscribe((data => {this.user = data;}))
    console.log(this.user)
  }

  

}
