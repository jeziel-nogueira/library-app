import { Component } from '@angular/core';
import { DefaultDashboardLayoutComponent } from "../../components/default-dashboard-layout/default-dashboard-layout.component";

@Component({
  selector: 'app-default-dashboard',
  imports: [DefaultDashboardLayoutComponent],
  templateUrl: './default-dashboard.component.html',
  styleUrl: './default-dashboard.component.scss'
})
export class DefaultDashboardComponent {

  searchBook(){
    console.log("B")
  }

  addBook(){
    console.log("c")
  }

  updateBook(){
    console.log("d")
  }

  searchLoan(){
    console.log("e")
  }

  createLoan(){
    console.log("f")
  }

  updateLoan(){
    console.log("g")
  }

  searchUser(){
    console.log("h")
  }

  addUser(){
    console.log("i")
  }

  removeUser(){
    console.log("j")
  }

  updateUser(){
    console.log("k")
  }
}
