import { Component } from '@angular/core';

@Component({
  selector: 'header-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  //creating dynamic anchor element using structural directive
  mainMenuItems: string[] = ['Home', 'Products', 'About', 'Contact']
}
