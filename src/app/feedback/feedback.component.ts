import { Component, OnInit } from '@angular/core';
import { Feedback } from '../Model/Feedback';
import { FeedbackService } from '../Services/feedback.service';
import { first, map, Subscribable, Subscription } from 'rxjs';
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
  isLoadingSubscription: Subscription;
  constructor(private feedbackSandBox:FeedbackSandbox,private router:Router,private sanitizer: DomSanitizer) {

    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }
    
      // this.feedbackService.GetFeedback().subscribe((result) => {
      // console.log(result);
    

  }
  ngOnInit():void
  {
    this.feedbackSandBox.loadFeedbackDetails();
    this.handleLoading('Load Feedback');
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  
  private handleLoading(concern:string)
  {
    this.isLoadingSubscription=this.feedbackSandBox.isLoading$.subscribe((loading)=>{
      if(loading)
        console.log('loading');
      else{
        this.isLoadingSubscription.unsubscribe();
        this.feedbackSandBox.isFailure$.pipe(first()).subscribe((err)=>{
          if(err && err.concern===concern)
            console.log('error');
          else{
            this.feedbackSandBox.feedbackDetails$.pipe(first()).subscribe((data)=>
            {
              this.feedBack=data;
            }
            )
          }
        })
      }
    })
  }
 

 
}
