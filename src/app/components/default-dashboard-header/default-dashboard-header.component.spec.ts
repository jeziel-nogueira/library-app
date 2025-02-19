import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDashboardHeaderComponent } from './default-dashboard-header.component';

describe('DefaultDashboardHeaderComponent', () => {
  let component: DefaultDashboardHeaderComponent;
  let fixture: ComponentFixture<DefaultDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultDashboardHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
