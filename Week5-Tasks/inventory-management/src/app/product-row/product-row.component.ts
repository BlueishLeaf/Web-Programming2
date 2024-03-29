import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { IProduct } from '../product/product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: IProduct;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
