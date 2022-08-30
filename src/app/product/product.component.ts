import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../Interface/IProduct';
import { Cart } from '../Model/Cart';
import { CartService } from '../Services/cart.service';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductsService]

})
export class ProductComponent{


  products:any;
  imageWidth:number=100;
  imageMargin:number=10;
  count:number=0;
  cart=new Array();
  productIds=new Array<number>();
  disabled=new Array();
  cartdata:any;
  constructor(private prodService:ProductsService,private router:Router,private cartservice:CartService){
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }
    this.prodService.GetProducts().subscribe(data =>{this.products=data;});
    this.cartservice.getDatafromCart(parseInt(localStorage.getItem('userId'))).subscribe(data =>{this.cartdata=data;
    
    console.log(data);
    });

    
    // for(const i of this.cartdata)
    // {
    //   this.count++;        
    // }
    // if(!(typeof this.cartdata == 'undefined')){
    //   console.log("Inside if");
      
    //   let cartdetails=new Array<number>;
    //   cartdetails=this.cartdata.map(item => {return item.ProductId;});
    //   this.count=cartdetails.length;
    //   console.log(this.count);
    // }
    
    
  
      
  }

   

  Addtocart(id:any){
    let cartdata=new Cart();
    cartdata.ProductId=id;
    cartdata.UserId=parseInt(localStorage.getItem('userId'));
    console.log(cartdata);
    this.cartservice.postdatatocart(cartdata).subscribe();
    // this.disabled[id]=true;

  }

  postDatatoCart()
  {
    this.router.navigate(["Cart"])
  }  

}


