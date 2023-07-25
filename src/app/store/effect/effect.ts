import { catchError, Observable, of, switchMap } from "rxjs";
import { Feedback } from "src/app/Model/Feedback";
import { map } from 'rxjs/operators';

import { FeedbackService } from "src/app/Services/feedback.service";
import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import * as fromAction from '../action/action'
import { ErrorResponse } from "src/app/Model/ErrorResponse";
@Injectable()
export class FeedbackEffects {
  loadFeedback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAction.feedbackActions.loadFeedback),
      switchMap(() => {
        console.log("loadFeedback effect is triggered"); // Add console.log here
        return this.feedbackService.GetFeedback().pipe(
          map((data:Feedback[]) => {
            console.log("Feedback data received:", data); // Add console.log here
            return fromAction.feedbackActions.loadFeedbackSuccess({ payload: data })
          }),
          catchError((error: ErrorResponse) =>
            of(fromAction.feedbackActions.loadFeedbackFailure({ payload: error }))
          )
        )
      })
    )
  );
  
    constructor(
      private actions$: Actions,
      private feedbackService: FeedbackService
    ) {}
  }
