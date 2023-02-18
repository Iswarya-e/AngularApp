import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../Services/feedback.service';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent  {

  feedbackDate:Date;
  mygroup:FormGroup;
  currdate:Date=new Date();
  date: string = this.currdate.getFullYear()+'-'+(this.currdate.getMonth()+1)+'-'+this.currdate.getDate();

  constructor(private myBuilder:FormBuilder,private _router:Router,private feedbackService:FeedbackService,private router:Router) { 
   
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }
    this.mygroup=this.myBuilder.group({
      'FeedbackId':[],
      'FeedbackGiven':'',
      'FeedbackBy':'',
      'FeedbackDate':new Date()
    })
  }
 
  SaveFeedback(){

    this.feedbackService.SaveFeedBack(this.mygroup,).subscribe(data=>{ 
  },
  Error=>{
    console.log("Error");
    alert("Error") 
  });

  this.router.navigate(["Feedback"])



      //  localStorage.setItem('uname',this.mygroup.get('username').value)
      //  localStorage.setItem('pword',this.mygroup.get('password').value)
      //  this._router.navigate(["Login"])
    }

}
