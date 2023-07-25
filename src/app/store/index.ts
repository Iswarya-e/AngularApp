
import { HttpErrorResponse } from '@angular/common/http';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import { Feedback } from '../Model/Feedback'
import * as fromFeedbackReducer from './reducer/reducer'

export interface State{
    feedbackState:fromFeedbackReducer.State
}
export const reducers:ActionReducerMap<State> ={
  feedbackState:fromFeedbackReducer.feedbackReducer,
}
export const getRootState = createFeatureSelector<State>('feedback');

export const getFeedbackState=createSelector(getRootState,(state:State)=>state.feedbackState);
export const getFeedbackList = createSelector(getFeedbackState,fromFeedbackReducer.getFeedbackDetails);
export const getIsLoading=createSelector(getFeedbackState,fromFeedbackReducer.getIsLoading);
export const getHasFailure=createSelector(getFeedbackState,fromFeedbackReducer.getHasFailure);
