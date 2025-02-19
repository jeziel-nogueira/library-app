import { Component } from '@angular/core';
import { DefaultDashboardHeaderComponent } from "../default-dashboard-header/default-dashboard-header.component";
import { DefaultDashboardNavigatorComponent } from "../default-dashboard-navigator/default-dashboard-navigator.component";

@Component({
  selector: 'app-default-dashboard-layout',
  imports: [DefaultDashboardHeaderComponent, DefaultDashboardNavigatorComponent],
  templateUrl: './default-dashboard-layout.component.html',
  styleUrl: './default-dashboard-layout.component.scss'
})
export class DefaultDashboardLayoutComponent {

}
