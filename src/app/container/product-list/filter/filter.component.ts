import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-list-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;
  selectedRadio: string = 'all';
  @Output()
  onChangeRadio: EventEmitter<string> = new EventEmitter<string>();
  radioButtonClicked() {
    return this.onChangeRadio.emit(this.selectedRadio);
  }
}
