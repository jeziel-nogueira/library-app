import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRegisterComponent } from './default-register.component';

describe('DefaultRegisterComponent', () => {
  let component: DefaultRegisterComponent;
  let fixture: ComponentFixture<DefaultRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
