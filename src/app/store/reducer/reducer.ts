import { Feedback } from "src/app/Model/Feedback";
import { FeedbackState } from "..";
import  {FeedBackAction, FeedbackActionType}  from '../action/action'


export const feedbackInitialState:FeedbackState={
    isLoading:false,
    isFailure:undefined,
    feedBackList:undefined
}

export function feedbackReducer
(
    state:FeedbackState=feedbackInitialState,
    action:FeedBackAction
):FeedbackState
{


    switch(action.type)
    {
        case FeedbackActionType.LOAD_FEEDBACK:
            
            return {
                ...state,
                isLoading:true,
                isFailure:false,
            }
        case FeedbackActionType.LOAD_FEEDBACK_SUCCESS:
            
            return {
                ...state,
                isLoading:false,
                isFailure:false,
                feedBackList:action.payload
            }
        case FeedbackActionType.LOAD_FEEDBACK_FAILURE:
            
            return {
                ...state,
                isLoading:false,
                isFailure:true,
            }
        default:
            return state;
            
    }
}