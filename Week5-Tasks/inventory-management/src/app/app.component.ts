import { Component } from '@angular/core';
import { IProduct } from './product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: IProduct[];

  constructor(){
    this.products = [
      {
        "sku": 'NICEHAT',
        "name": 'A Nice Black Hat',
        "imageUrl": './assets/images/products/black-hat.jpg',
        "department": ['Men','Accessories','Hats'],
        "price": 29.99
      },
      {
        "sku": 'NEATOJACKET',
        "name": 'Blue Jacket',
        "imageUrl": './assets/images/products/blue-jacket.jpg',
        "department": ['Women','Apparel','Jackets & Vests'],
        "price": 238.99
      },
      {
        "sku": 'MYSHOES',
        "name": 'Black Running Shoes',
        "imageUrl": './assets/images/products/black-shoes.jpg',
        "department": ['Men','Shoes','Running Shoes'],
        "price": 109.99
      }
    ]
  }

  productSelected(product: IProduct): void {
    console.log('Product Selected: ',product);
  }
}
