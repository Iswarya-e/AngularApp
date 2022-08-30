import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private getproductUrl:string="http://localhost:49541/api/Product/GetProduct";
  private getproductbyIdUrl:string="http://localhost:49541/api/Product/GetProductbyId";
  private getproductbyIdUrlforcart:string="http://localhost:49541/api/Product/GetProductbyIdforcart";

  
  constructor(private http:HttpClient) {
  }
  GetProductbyId(temp:Product): Observable<Product> {
   const headers = new HttpHeaders().set('content-type', 'application/json');
   console.log(this.http.post<Product>(this.getproductbyIdUrl, temp, { headers }));
   return this.http.post<Product>(this.getproductbyIdUrl, temp, { headers });
 }
 GetProductbyIdForCart(temp:number):Observable<Product> {
  const headers = new HttpHeaders().set('content-type', 'application/json');
  const body={
    productId:temp
  }
  console.log(this.http.post<Product>(this.getproductbyIdUrlforcart, temp, { headers }));
  return this.http.post<Product>(this.getproductbyIdUrlforcart, body, { headers });
}


 GetProducts() {
   return this.http.get(this.getproductUrl);
 }


}
