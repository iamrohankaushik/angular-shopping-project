import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  searchText: string = '';
  setSearchText(value: string) {
    this.searchText = value;
  }
  //using ref of DOM element directly in property
  @ViewChild('productListRef') productListComponent!: ProductListComponent
}
