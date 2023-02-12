import { Component, OnInit } from '@angular/core';
import { Feedback } from '../Model/Feedback';
import { FeedbackService } from '../Services/feedback.service';
import { map } from 'rxjs';
import { RegistrationService } from '../Services/registration.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FeedbackSandbox } from '../store/sandbox/sandbox';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent{
  users:any;

  feedBack:any;
  constructor(private feedbackSandBox:FeedbackSandbox,private router:Router,private sanitizer: DomSanitizer) {

    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }
    
      // this.feedbackService.GetFeedback().subscribe((result) => {
      // console.log(result);
      this.feedBack=this.feedbackSandBox.loadFeedbackDetails();
      console.log(this.feedBack.values);
    

  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}
 

 
}
