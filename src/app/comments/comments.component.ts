import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from '../Model/Comment';
import { CommentService } from '../Services/comment.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  comments:any;
  constructor(private commentObj:CommentService,private router:Router) {
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }
    this.commentObj.getCommentsData().subscribe(i=>{this.comments=i;})

   }


}
