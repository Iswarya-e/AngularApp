import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Feedback } from "src/app/Model/Feedback";

export interface FeedbackAction extends Action
{
    payload:any;
}

export enum FeedbackActionType{
      LOAD_FEEDBACK='[FEEDBACK] Load Feedback',
      LOAD_FEEDBACK_SUCCESS='[FEEDBACK] Load Feedback Success',
      LOAD_FEEDBACK_FAILURE='[FEEDBACK] Load Feedback Failure'
}


export class LoadFeedback implements FeedbackAction{
    readonly type=FeedbackActionType.LOAD_FEEDBACK;
    /**
     *
     */
    constructor() {        
    }
    payload: any;
    
}
export class LoadFeedbackSuccess implements FeedbackAction{
    readonly type=FeedbackActionType.LOAD_FEEDBACK_SUCCESS;
    constructor(public payload:Feedback[]){};
}
export class LoadFeedbackFailure implements FeedbackAction{
    readonly type=FeedbackActionType.LOAD_FEEDBACK_FAILURE;
    constructor(public payload:{
        concern:FeedbackActionType;
        error:HttpErrorResponse;
    }){};

}

export type FeedBackAction=
|LoadFeedback
|LoadFeedbackFailure
|LoadFeedbackSuccess


