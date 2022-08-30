import { Component, OnInit } from '@angular/core';
import { Feedback } from '../Model/Feedback';
import { FeedbackService } from '../Services/feedback.service';
import { map } from 'rxjs';
import { RegistrationService } from '../Services/registration.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers:[FeedbackService]
})
export class FeedbackComponent{
  users:any;

  feedBack:any;
  constructor(private feedbackService:FeedbackService,private router:Router,private sanitizer: DomSanitizer) {

    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }
    
      this.feedbackService.GetFeedback().subscribe((result) => {
      console.log(result);
      this.feedBack=result;
      console.log(this.feedBack.values);
    });

  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}
 

 
}
