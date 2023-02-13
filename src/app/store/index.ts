
import { HttpErrorResponse } from '@angular/common/http';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import { Feedback } from '../Model/Feedback'
import * as fromReducer from './reducer/reducer'

export interface NgRxError{
  concern:string;
  error:HttpErrorResponse;
}
export interface State{
    ['feedback']:FeedbackState
}
export interface FeedbackState{
    isLoading:boolean,
    isFailure:NgRxError,
    feedBackList:Feedback[]

}


export const getFeedbackState=createFeatureSelector<FeedbackState>('feedback');

export const getFeedbackDetails=createSelector(getFeedbackState,(state)=>state.feedBackList);
export const getIsLoading=createSelector(getFeedbackState,(state)=>state.isLoading);
export const getIsFailure=createSelector(getFeedbackState,(state)=>state.isFailure);

export function reducers(arg0: string, reducers: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.')
}
