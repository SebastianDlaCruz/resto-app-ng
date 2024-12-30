import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextErrorInputComponent } from './text-error-input.component';

describe('TextErrorInputComponent', () => {
  let component: TextErrorInputComponent;
  let fixture: ComponentFixture<TextErrorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextErrorInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextErrorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
