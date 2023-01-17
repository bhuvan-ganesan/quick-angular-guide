import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'serviceandDI';

  products!: any;
  // productService;

  // constructor() {
  //   this.productService = new ProductService();
  // }

  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
    this.productService.currentProduct.subscribe(data => {
      console.log('data', data);
      this.products = data;
    })
    
  }

  getProducts() {
    // this.products = this.productService.getProducts();
   
  }
  addProducts() {
    this.products.push(  new Product(this.products.length + 1, "Mobile", 1200) )
      this.productService.addProduct(this.products)
  }
}
