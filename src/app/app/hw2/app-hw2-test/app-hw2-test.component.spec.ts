import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHw2TestComponent } from './app-hw2-test.component';

describe('AppHw2TestComponent', () => {
  let component: AppHw2TestComponent;
  let fixture: ComponentFixture<AppHw2TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHw2TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHw2TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
