import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockCustomComponent } from './clock-custom.component';

describe('ClockCustomComponent', () => {
  let component: ClockCustomComponent;
  let fixture: ComponentFixture<ClockCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClockCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
