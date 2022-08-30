import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../Model/Post';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

  UserId:any;
  PostId:any;
  posts:any;
  constructor(private postobj:PostService,private router:Router) { 
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }
    this.postobj.getPostData().subscribe(i=>{this.posts=i;})
  }
  SearchbyUserId(){
    this.postobj.getPostDatabyId(this.UserId).subscribe(i=>{this.posts=i;})

  }
  SearchbyPostId(){
    this.postobj.getPostDatabyUserId(this.PostId).subscribe(i=>{this.posts=i;})
  }
}
