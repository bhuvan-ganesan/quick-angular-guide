import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from './product.service';
import { Product } from './product';
import { Subscription } from 'rxjs';


@Component({
  templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent {

  product: Product | undefined ;
  id!: number;
  sub!: Subscription;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,private location: Location) {
  }


  ngOnInit() {

    console.log(this.location.path()); 
    console.log(this.location.getState());
    
    this.sub = this._Activatedroute.params.subscribe(params => {
      this.id = params['id'];
      console.log('----',this.id)
      let products = this._productService.getProducts();
      this.product = products.find(p => p.productID == this.id);

    });
  }

  /* Using snapshot
  ngOnInit() {
      this.id=this._Activatedroute.snapshot.params['id'];
      let products=this._productService.getProducts();
      this.product=products.find(p => p.productID==this.id);
  }
  */

  onBack(): void {
    this._router.navigate(['product']);
  }


  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}