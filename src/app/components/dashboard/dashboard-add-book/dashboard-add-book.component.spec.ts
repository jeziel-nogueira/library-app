import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddBookComponent } from './dashboard-add-book.component';

describe('DashboardAddBookComponent', () => {
  let component: DashboardAddBookComponent;
  let fixture: ComponentFixture<DashboardAddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAddBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
