import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, Observable, of, switchMap } from "rxjs";
import { Feedback } from "src/app/Model/Feedback";
import { map } from 'rxjs/operators';

import { FeedbackService } from "src/app/Services/feedback.service";
import { FeedBackAction, FeedbackActionType, LoadFeedback, LoadFeedbackFailure, LoadFeedbackSuccess } from "../action/action";

export class FeedbackEffects {
    constructor(
        private actions$: Actions,
        private feedbackService:FeedbackService
    ) { }
    
    loadFeedbackSuccess$= this.actions$.pipe(
            ofType(FeedbackActionType.LOAD_FEEDBACK_SUCCESS),
            map((action:LoadFeedbackSuccess)=>
            {
                 return <Feedback[]>action.payload;
            })
    );
            
    
    loadFeedback$:Observable<FeedBackAction>=this.actions$.pipe(
            ofType(FeedbackActionType.LOAD_FEEDBACK),
            switchMap(()=>this.feedbackService.GetFeedback().pipe(
                map((data:Feedback[])=>
                    new LoadFeedbackSuccess(data)),
                    catchError((error:HttpErrorResponse)=>
                    of(new LoadFeedbackFailure({
                        concern:FeedbackActionType.LOAD_FEEDBACK,error
                    })))
            ))
        );
   

   
}