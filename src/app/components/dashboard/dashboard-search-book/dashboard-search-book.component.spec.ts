import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSearchBookComponent } from './dashboard-search-book.component';

describe('DashboardSearchBookComponent', () => {
  let component: DashboardSearchBookComponent;
  let fixture: ComponentFixture<DashboardSearchBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSearchBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSearchBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
