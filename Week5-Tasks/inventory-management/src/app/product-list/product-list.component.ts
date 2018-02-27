import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: IProduct[];
  @Output() onProductSelected: EventEmitter<IProduct>;
  private currentProduct: IProduct;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: IProduct): void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: IProduct): boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    else return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
