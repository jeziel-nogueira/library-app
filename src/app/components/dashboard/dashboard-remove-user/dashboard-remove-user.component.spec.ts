import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRemoveUserComponent } from './dashboard-remove-user.component';

describe('DashboardRemoveUserComponent', () => {
  let component: DashboardRemoveUserComponent;
  let fixture: ComponentFixture<DashboardRemoveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardRemoveUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRemoveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
