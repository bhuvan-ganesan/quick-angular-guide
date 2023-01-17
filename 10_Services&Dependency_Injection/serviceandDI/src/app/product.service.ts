import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public currentProduct!: BehaviorSubject<Object>
  // public products!: Observable<any>;

  constructor() { 
    this.currentProduct =  new BehaviorSubject<Object>([
      new Product(1, "Memory Card", 500),
      new Product(2, "Pen Drive", 750),
      new Product(3, "Power Bank", 100),
      new Product(4, "Laptop", 1200)
    ]);
    // this.products = this.currentProduct.asObservable();
  }

  public addProduct(obj: any) { 
    this.currentProduct.next(obj);
  }

  // public getProducts() {
  //   let products: Product[];

  //   products = [
  //     new Product(1, "Memory Card", 500),
  //     new Product(2, "Pen Drive", 750),
  //     new Product(3, "Power Bank", 100),
  //     new Product(4, "Laptop", 1200)
  //   ];

  //   return products;
  // }
}
