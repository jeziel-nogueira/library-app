import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDashboardNavigatorComponent } from './default-dashboard-navigator.component';

describe('DefaultDashboardNavigatorComponent', () => {
  let component: DefaultDashboardNavigatorComponent;
  let fixture: ComponentFixture<DefaultDashboardNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultDashboardNavigatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultDashboardNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
