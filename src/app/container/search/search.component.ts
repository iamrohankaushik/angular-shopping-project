import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'container-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';
  @Output()
  searchButtonClick: EventEmitter<string> = new EventEmitter<string>();
  onSearchButtonClick(event: any) {
    this.searchText = event.target.value;
    return this.searchButtonClick.emit(this.searchText);
  }
}
