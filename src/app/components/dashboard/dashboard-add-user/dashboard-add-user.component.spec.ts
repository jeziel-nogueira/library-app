import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddUserComponent } from './dashboard-add-user.component';

describe('DashboardAddUserComponent', () => {
  let component: DashboardAddUserComponent;
  let fixture: ComponentFixture<DashboardAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAddUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
