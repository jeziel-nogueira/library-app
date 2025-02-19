import { Component } from '@angular/core';
import { DefaultDashboardLayoutComponent } from "../../components/default-dashboard-layout/default-dashboard-layout.component";

@Component({
  selector: 'app-default-dashboard',
  imports: [DefaultDashboardLayoutComponent],
  templateUrl: './default-dashboard.component.html',
  styleUrl: './default-dashboard.component.scss'
})
export class DefaultDashboardComponent {

}
