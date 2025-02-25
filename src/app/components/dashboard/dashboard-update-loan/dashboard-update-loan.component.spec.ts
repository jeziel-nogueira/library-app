import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateLoanComponent } from './dashboard-update-loan.component';

describe('DashboardUpdateLoanComponent', () => {
  let component: DashboardUpdateLoanComponent;
  let fixture: ComponentFixture<DashboardUpdateLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUpdateLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUpdateLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
