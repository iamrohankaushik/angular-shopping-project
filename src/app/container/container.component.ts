import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  name: string = 'rohan';
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10
  }

  getDiscountedPrice() {
    return this.product.price + ((this.product.price * this.product.discount) / 100)
  }

  onNameChange(input: any) {
    this.name = input.target.value;
  }
}
