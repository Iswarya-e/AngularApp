import { HttpErrorResponse } from "@angular/common/http";

export interface ErrorResponse{
    concern:string,
    error:HttpErrorResponse
}