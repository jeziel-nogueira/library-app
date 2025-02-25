import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreateLoanComponent } from './dashboard-create-loan.component';

describe('DashboardCreateLoanComponent', () => {
  let component: DashboardCreateLoanComponent;
  let fixture: ComponentFixture<DashboardCreateLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCreateLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCreateLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
