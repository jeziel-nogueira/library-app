import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSearchLoanComponent } from './dashboard-search-loan.component';

describe('DashboardSearchLoanComponent', () => {
  let component: DashboardSearchLoanComponent;
  let fixture: ComponentFixture<DashboardSearchLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSearchLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSearchLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
