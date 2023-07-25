import { HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, of, switchMap } from "rxjs";
import { Feedback } from "src/app/Model/Feedback";
import { map } from 'rxjs/operators';

import { FeedbackService } from "src/app/Services/feedback.service";
import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import * as fromAction from '../action/action'
import { ErrorResponse } from "src/app/Model/ErrorResponse";
@Injectable()
export class FeedbackEffects{
    constructor(private feedbackService:FeedbackService,
        protected actions$: Actions) {}

    loadFeedback=createEffect(()=>
    this.actions$.pipe(
        ofType(fromAction.feedbackActions.loadFeedback),
        switchMap(()=>{
            this.feedbackService.GetFeedback().pipe(
                map((data:Feedback[])=>{
                    fromAction.feedbackActions.loadFeedbackSuccess({payload:data}),
                    catchError((error:ErrorResponse)=>{
                    fromAction.feedbackActions.loadFeedbackFailure({payload:error})
                    })
                })
            )
        }
    )
   ))
    
 }


export class rew {
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