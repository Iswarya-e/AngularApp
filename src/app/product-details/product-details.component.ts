import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../Interface/IProduct';
import { ProductsService } from '../Services/products.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers:[ProductsService]
})
export class ProductDetailsComponent implements OnInit {

  id:number;
  product:IProduct;
  a:any;
  imageWidth:number=100;
  imageMargin:number=10;
  title: string;
  productName: any;
  image: any;
  price: any;
  constructor(private activatedroute:ActivatedRoute,
    private userobj:ProductsService) { 
    
    }

  ngOnInit() {
    // let id=this.activatedroute.snapshot.params['id'];
    // alert(id)
    // console.log(id);
    // this.userobj.getProductDatabyId(id).subscribe(data => {
    //   console.log(data);
    //   this.product = data;})
      // if(this.product.productId==id){
      //   this.a.productId=this.product.productId;
      //   this.a.imageUrl=this.product.imageUrl;
      //   this.a.productName=this.product.productName;
      //   this.a.price=this.product.price;
      //   this.a.starRating=this.product.starRating;
      this.id =this.activatedroute.snapshot.params['productId'];
      this.activatedroute.queryParams.subscribe((params)=> 
      {
        this.productName = params['name'];
        this.image = params['img'];
        this.price = params['price'];
      });
      
    
  }

}
