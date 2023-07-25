import { Feedback } from "src/app/Model/Feedback";
import { createReducer, on } from "@ngrx/store";
import { feedbackActions } from "../action/action";
import { ErrorResponse } from "src/app/Model/ErrorResponse";

export interface State{
    isLoading:boolean,
    hasFailure:ErrorResponse,
    feedBackList:Feedback[]
}
export const INITIAL_STATE:State={
    isLoading:undefined,
    hasFailure:undefined,
    feedBackList:undefined
}

export const feedbackReducer = createReducer(
    INITIAL_STATE,
    on(feedbackActions.loadFeedback,(state)=>({
        ...state,
        isLoading:true,
        hasFailure:undefined,
        feedBackList:undefined,
    })),
    on(feedbackActions.loadFeedbackSuccess,(state,{payload})=>({
        ...state,
        isLoading:false,
        hasFailure:undefined,
        feedBackList:payload

    })),
    on(feedbackActions.loadFeedbackFailure,(state,{payload})=>({
        ...state,
        isLoading:false,
        hasFailure:payload
    }))
)

export const getFeedbackDetails = (state:State)=>state.feedBackList;
export const getIsLoading = (state: State)=> state.isLoading;
export const getHasFailure = (state: State)=> state.hasFailure;