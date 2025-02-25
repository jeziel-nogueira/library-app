import { Component, EventEmitter, Output } from '@angular/core';
import { DefaultDashboardHeaderComponent } from "../default-dashboard-header/default-dashboard-header.component";
import { DefaultDashboardNavigatorComponent } from "../default-dashboard-navigator/default-dashboard-navigator.component";
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CommonModule } from '@angular/common';
import { DashboardSearchBookComponent } from '../dashboard/dashboard-search-book/dashboard-search-book.component';
import { DashboardAddBookComponent } from '../dashboard/dashboard-add-book/dashboard-add-book.component';
import { DashboardUpdateBookComponent } from '../dashboard/dashboard-update-book/dashboard-update-book.component';
import { DashboardSearchLoanComponent } from '../dashboard/dashboard-search-loan/dashboard-search-loan.component';
import { DashboardCreateLoanComponent } from '../dashboard/dashboard-create-loan/dashboard-create-loan.component';
import { DashboardUpdateLoanComponent } from '../dashboard/dashboard-update-loan/dashboard-update-loan.component';
import { DashboardSearchUserComponent } from '../dashboard/dashboard-search-user/dashboard-search-user.component';
import { DashboardAddUserComponent } from '../dashboard/dashboard-add-user/dashboard-add-user.component';
import { DashboardRemoveUserComponent } from '../dashboard/dashboard-remove-user/dashboard-remove-user.component';
import { DashboardUpdateUserComponent } from '../dashboard/dashboard-update-user/dashboard-update-user.component';
import { DashboardOverviewComponent } from '../dashboard/dashboard-overview/dashboard-overview.component';

@Component({
  selector: 'app-default-dashboard-layout',
  imports: [
    CommonModule,
    DefaultDashboardHeaderComponent, 
    DefaultDashboardNavigatorComponent,
    PrimaryButtonComponent,
    DashboardSearchBookComponent,
    DashboardAddBookComponent,
    DashboardUpdateBookComponent,
    DashboardSearchLoanComponent,
    DashboardCreateLoanComponent,
    DashboardUpdateLoanComponent,
    DashboardSearchUserComponent,
    DashboardAddUserComponent,
    DashboardRemoveUserComponent,
    DashboardUpdateUserComponent,
    DashboardOverviewComponent
  ],
  templateUrl: './default-dashboard-layout.component.html',
  styleUrl: './default-dashboard-layout.component.scss'
})
export class DefaultDashboardLayoutComponent {

  activeComponent: string = 'overview';

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
      bookManager: false,
      loanControl: false,
      libraryUsers: false,
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

    setActiveComponent(component: string) {
      this.activeComponent = component;
    }

}
