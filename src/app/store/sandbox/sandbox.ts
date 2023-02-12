import { Injectable } from "@angular/core";
import { select, State, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Feedback } from "src/app/Model/Feedback";
import * as FeedBackAccount from "..";
import { LoadFeedback } from "../action/action";




export class FeedbackSandbox{


/*Public Properties */
public readonly isLoading$:Observable<boolean>;
public readonly isFailure$:Observable<boolean>;
public readonly feedbackDetails$:Observable<Feedback[]>;

/*Constructor*/
constructor(private store:Store<FeedBackAccount.State>) {
    this.isLoading$=this.store.pipe(select(FeedBackAccount.getIsLoading));
    this.isFailure$=this.store.pipe(select(FeedBackAccount.getIsFailure));
    this.feedbackDetails$=this.store.pipe(select(FeedBackAccount.getFeedbackDetails));
}

loadFeedbackDetails()
{
    this.store.dispatch(new LoadFeedback());
}

}