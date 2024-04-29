import { Component } from '@angular/core';

@Component({
  selector: 'container-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';
}
