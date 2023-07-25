import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ErrorResponse } from "src/app/Model/ErrorResponse";
import { Feedback } from "src/app/Model/Feedback";
import * as fromFeedbackStore from '../index'
import { feedbackActions } from "../action/action";

@Injectable({
  providedIn: 'root',
})

export class FeedbackSandbox{

    /*Public Properties */
    public readonly isLoading$:Observable<boolean>;
    public readonly hasFailure$:Observable<ErrorResponse>;
    public readonly feedbackDetails$:Observable<Feedback[]>;

    /*Constructor*/
    constructor(private store:Store<fromFeedbackStore.State>) {
        this.isLoading$=this.store.pipe(select(fromFeedbackStore.getIsLoading));
        this.hasFailure$=this.store.pipe(select(fromFeedbackStore.getHasFailure));
        this.feedbackDetails$=this.store.pipe(select(fromFeedbackStore.getFeedbackList));
    }

    loadFeedbackDetails():void{
        this.store.dispatch(feedbackActions.loadFeedback());
    }
}