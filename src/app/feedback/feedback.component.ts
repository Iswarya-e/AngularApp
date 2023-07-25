import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../Services/feedback.service';
import { first, map, Subscribable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FeedbackSandbox } from '../store/sandbox/sandbox';
import { Feedback } from '../Model/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent{
  users:any;

  feedBack:any;
  isLoadingSubscription: Subscription;
  constructor(private feedbackSandBox:FeedbackSandbox,private router:Router,private sanitizer: DomSanitizer,feedbackService:FeedbackService) {

    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }
     
   
    
    

  }
  ngOnInit(): void {
    this.feedbackSandBox.loadFeedbackDetails();
    this.feedbackSandBox.feedbackDetails$.subscribe((data) => {
      this.feedBack = data;
      console.log(data);
    });
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
        this.feedbackSandBox.hasFailure$.pipe(first()).subscribe((err)=>{
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
