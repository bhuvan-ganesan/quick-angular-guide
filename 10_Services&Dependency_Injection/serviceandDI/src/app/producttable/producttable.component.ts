import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush // Remove it to make it work
})
export class ProducttableComponent implements OnInit{

  products!: any;

  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
    this.productService.products.subscribe(data => {
      console.log('data 2', data);
      this.products = data;
      // this.products = [].concat.apply([], data.map(p => p)); 
    })
    
  }

}
