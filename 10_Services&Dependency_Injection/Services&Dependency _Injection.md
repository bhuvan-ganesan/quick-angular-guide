<div align="center">
  <h1>Services & Dependency Injection</h1>
<sub>Author:
<a href="https://www.linkedin.com/in/bhuvanaganesan-l-2209047a" target="_blank">Bhuvan Ganesan</a><br>
</sub>
</div>

## What is an Angular Service

Service is a piece of reusable code with a focused purpose. A code that you will use in many components across your application

Our components need to access the data. You can write data access code in each component, but that is very inefficient and breaks the rule of single responsibility. The Component must focus on presenting data to the user. The task of getting data from the back-end server must be delegated to some other class. We call such a class a Service class. Because it provides the service of providing data to every component that needs it.

**What Angular Services are used for**

- Features that are independent of components such a logging services
- Share logic or data across components
- Encapsulate external interactions like data access

**Advantageous of Angular Service**

- Services are easier to test.
- They are easier to Debug.
- We can reuse the service at many places.

#### Example Service

```sh
# product.ts
export class Product {
  constructor(productID: number, name: string, price: number) {
    this.productID = productID;
    this.name = name;
    this.price = price;
  }

  productID: number;
  name: string;
  price: number;
}

# product.service.ts
import { Product } from "./product";

export class ProductService {
  public getProducts() {
    let products: Product[];

    products = [
      new Product(1, "Memory Card", 500),
      new Product(1, "Pen Drive", 750),
      new Product(1, "Power Bank", 100)
    ];

    return products;
  }
}

# app.component.ts
import { Component } from "@angular/core";
import { ProductService } from "./product.service";
import { Product } from "./product";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  products: Product[];
  productService;

  constructor() {
    this.productService = new ProductService();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }
}

# app.component.html

<div class="container">
  <h1 class="heading"><strong>Angular Services </strong>Demo</h1>

  <button type="button" (click)="getProducts()">Get Products</button>

  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products;">
          <td>{{product.productID}}</td>
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```

## What is Angular Dependency Injection

**Dependency Injection (DI) is a technique in which a class receives its dependencies from external sources rather than creating them itself.**2

**Using Dependency Injection**

Registering the Dependency with the Injector

Angular Provides an instance of Injector & Provider to every component & directive in the application ( Consumers). It also creates an Injector instance at the module level and also at the root of the application. Basically, it creates a Tree of Injectors with parent-child relationship 

The dependencies are registered with the Provider. This is done in the Providers metadata of the Injector.

```sh
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponentx


@NgModule({
  declarations: [...],
  imports: [...],
  providers: [ProductService],
  bootstrap: []
})


constructor(private productService:ProductService) { 
}


import { Component } from '@angular/core';
 
import { ProductService } from './product.service';
import { Product } from './product';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent
{
 
   products:Product[];
   
   constructor(private productService:ProductService){
   }
   
   getProducts() {
     this.products=this.productService.getProducts();
   }
  
}

# ProvidedIn

@Injectable({
  providedIn:'root'
})
export class ProductService {

```



### Useful links

- https://angular.io/guide/architecture-services
- https://angular.io/guide/dependency-injection
- https://next.angular.io/api/core/Injectable
- https://rxjs.dev/