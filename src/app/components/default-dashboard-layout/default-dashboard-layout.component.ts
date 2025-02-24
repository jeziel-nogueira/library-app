import { Component, EventEmitter, Output } from '@angular/core';
import { DefaultDashboardHeaderComponent } from "../default-dashboard-header/default-dashboard-header.component";
import { DefaultDashboardNavigatorComponent } from "../default-dashboard-navigator/default-dashboard-navigator.component";
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-dashboard-layout',
  imports: [
    CommonModule,
    DefaultDashboardHeaderComponent, 
    DefaultDashboardNavigatorComponent,
    PrimaryButtonComponent
  ],
  templateUrl: './default-dashboard-layout.component.html',
  styleUrl: './default-dashboard-layout.component.scss'
})
export class DefaultDashboardLayoutComponent {

  @Output("serchBook") onSerchBook = new EventEmitter();
  @Output("addBook") onAddBook = new EventEmitter();
  @Output("updateBook") onUpdateBook = new EventEmitter();
  @Output("searchLoan") onSearchLoan = new EventEmitter();
  @Output("createLoan") onCreateLoan = new EventEmitter();
  @Output("updateLoan") onUpdateLoan = new EventEmitter();
  @Output("searchUser") onSearchUser = new EventEmitter();
  @Output("addUser") onAddUser = new EventEmitter();
  @Output("removeUser") onRemoveUser = new EventEmitter();
  @Output("updateUser") onUpdateUser = new EventEmitter();
    
    dropdowns = {
      bookManager: true,
      loanControl: true,
      libraryUsers: true,
    };
  
    toggleDropdown(menu: keyof typeof this.dropdowns){
      console.log(menu)
      this.dropdowns[menu] = !this.dropdowns[menu]
    }
  
    serchBook(){
      this.onSerchBook.emit();
    }

    addBook(){
      this.onAddBook.emit();
    }

    updateBook(){
      this.onUpdateBook.emit();
    }

    searchLoan(){
      this.onSearchLoan.emit();
    }

    createLoan(){
      this.onCreateLoan.emit();
    }

    updateLoan(){
      this.onUpdateLoan.emit();
    }

    searchUser(){
      this.onSearchUser.emit();
    }

    addUser(){
      this.onAddUser.emit();
    }

    removeUser(){
      this.onRemoveUser.emit();
    }

    updateUser(){
      this.onUpdateUser.emit();
    }

}
