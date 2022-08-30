import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Cart } from '../Model/Cart';
import { Product } from '../Model/Product';
import { CartService } from '../Services/cart.service';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  dummyproduct:Product[];
  products: any;
  cartdata: any;
  count: number;
  carts:number[];
  constructor(private prodService:ProductsService,private router:Router,private cartservice:CartService){
    this.cartservice.getDatafromCart(parseInt(localStorage.getItem('userId'))).subscribe(data =>{
      console.log(data);
      this.cartdata=data;
    });
    
      
      let cartIds=new Array<number>;
      cartIds=this.cartdata.map(item => {return item.productId;});
      console.log(cartIds);
      for(let n=0;n<cartIds.length;n++)
      {
        let temp1:any;
        this.prodService.GetProductbyIdForCart(cartIds[n]).subscribe(data=>{
          console.log(data);
          temp1=data});
        console.log(temp1);

        this.dummyproduct.push(temp1);


      }
     
     
      console.log(this.dummyproduct);

      // this.cartdata.forEach(element => {
      //   let product=new Product();
      //   product.p

        
      // });
      
      // let product =new Product[];
      //  product.productId=data.ProductId;
      // // this.dummyproduct.push(product);
      // console.log(this.cartdata);
      
 
    
      // for(const i of this.dummyproduct)
      // {
      //     this.prodService.GetProductbyId(i).subscribe(data =>{this.products=data;});
        
      // }
  
  }

  ngOnInit(): void {
    console.log(this.cartdata);
  }
}
