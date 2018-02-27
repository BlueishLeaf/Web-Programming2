import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { IProduct } from '../product/product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: IProduct;
  @HostBinding('attr.class') cssClass = 'ui small image';
  constructor() { }

  ngOnInit() {
  }

}
