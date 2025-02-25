import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateBookComponent } from './dashboard-update-book.component';

describe('DashboardUpdateBookComponent', () => {
  let component: DashboardUpdateBookComponent;
  let fixture: ComponentFixture<DashboardUpdateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUpdateBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUpdateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
