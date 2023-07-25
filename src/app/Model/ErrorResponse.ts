import { HttpErrorResponse } from "@angular/common/http";

export interface ErrorResponse{
    cnocern:string,
    error:HttpErrorResponse
}