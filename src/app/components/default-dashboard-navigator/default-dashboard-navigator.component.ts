import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-dashboard-navigator',
  imports: [
    CommonModule,
    PrimaryButtonComponent
  ],
  templateUrl: './default-dashboard-navigator.component.html',
  styleUrl: './default-dashboard-navigator.component.scss'
})
export class DefaultDashboardNavigatorComponent {
  dropdowns = {
    bookManager: true,
    loanControl: false,
    libraryUsers: false,
  };

  toggleDropdown(menu: keyof typeof this.dropdowns){
    console.log(menu)
    this.dropdowns[menu] = !this.dropdowns[menu]
  }
}
