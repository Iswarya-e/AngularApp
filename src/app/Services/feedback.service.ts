import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Feedback } from '../Model/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private createFeedbackUrl:string="http://localhost:49541/api/Feedback/Create";
  private getFeedbackUrl:string="http://localhost:49541/api/Feedback/GetFeedback";
  results: Observable<Feedback[]>;

  constructor(private http:HttpClient) {
   }
   SaveFeedBack(temp:any): Observable<Feedback[]> {
    
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const body = {
      FeedbackGiven: temp.value.FeedbackGiven,
      FeedbackBy: temp.value.FeedbackBy,
      FeedbackDate: temp.value.FeedbackDate
    };
    console.log(body.FeedbackBy,body.FeedbackDate);
    
    return this.http.post<Feedback[]>(this.createFeedbackUrl, body, { headers });
  }


  GetFeedback() {
    return this.http.get(this.getFeedbackUrl);
  }
}