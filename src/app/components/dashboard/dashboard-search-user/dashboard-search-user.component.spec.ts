import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSearchUserComponent } from './dashboard-search-user.component';

describe('DashboardSearchUserComponent', () => {
  let component: DashboardSearchUserComponent;
  let fixture: ComponentFixture<DashboardSearchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSearchUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
