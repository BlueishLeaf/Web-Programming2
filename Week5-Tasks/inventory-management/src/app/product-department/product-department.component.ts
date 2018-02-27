import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../product/product.model';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product: IProduct;
  constructor() { }

  ngOnInit() {
  }

}
