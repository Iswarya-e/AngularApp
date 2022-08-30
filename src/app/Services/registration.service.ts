import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private createUserUrl:string="http://localhost:49541/api/Customer/CreateUser";
  private getUserUrl:string="http://localhost:49541/api/Customer/GetUsers";

  constructor(private http:HttpClient) {
   }
   SaveCustomer(temp:any): Observable<Customer[]> {

    const headers = new HttpHeaders().set('content-type', 'application/json');
   
    return this.http.post<Customer[]>(this.createUserUrl, temp, { headers });
  }


  GetCustomers() {
   // const headers = new HttpHeaders().set('content-type', 'application/json');    
    return this.http.get(this.getUserUrl);
  }
  GetUserId(temp) {
    // const headers = new HttpHeaders().set('content-type', 'application/json');    
     return this.http.get(this.getUserUrl);
   }
}
