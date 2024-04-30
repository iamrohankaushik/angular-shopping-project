import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'product-list-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() //Input decorator to accept data from parent component
  product!: Product
}
