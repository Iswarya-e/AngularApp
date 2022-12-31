import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../Model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartdata:any;
  private addurl:string="http://localhost:49541/api/Cart/AddDatatoCart";
  private deleteurl:string="http://localhost:49541/api/Cart/DeletefromCart";
  private geturl:string="http://localhost:49541/api/Cart/GetCartData";
  private getcarttotalurl:string="http://localhost:49541/api/Cart/GetCartTotal";
  
  constructor(private http:HttpClient) {
  }
  postdatatocart(temp:any): Observable<Cart> {
   const headers = new HttpHeaders().set('content-type', 'application/json');
   return this.http.post<Cart>(this.addurl, temp, { headers });
 }

 deletefromcart(temp:any){
  return this.http.delete<Cart>(this.deleteurl, temp);
 }

 getDatafromCart(temp:number):Observable<Cart> {
   console.log(temp);
   const headers = new HttpHeaders().set('content-type', 'application/json');
   let user=new Cart();
   user.UserId=temp;
   console.log(this.http.post<Cart>(this.geturl,user,{headers}));
   return this.http.post<Cart>(this.geturl,user,{headers});
 }

 getCartTotal(temp:number):Observable<Cart> {
  console.log(temp);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  let user=new Cart();
  user.UserId=temp;
  return this.http.post<Cart>(this.getcarttotalurl,user,{headers});
}
}
