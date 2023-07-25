import { HttpErrorResponse } from "@angular/common/http";
import {  createActionGroup, emptyProps, props } from "@ngrx/store";
import { ErrorResponse } from "src/app/Model/ErrorResponse";
import { Feedback } from "src/app/Model/Feedback";

export const feedbackActions = createActionGroup({
    source:'Feedback',
    events:{
        'Load Feedback':emptyProps(),
        'Load Feedback Success':props<{ payload: Feedback[] }>(),
        'Load Feedback Failure':props<{ payload:ErrorResponse}>(),
    }
});
    
 

