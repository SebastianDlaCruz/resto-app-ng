import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUnitsComponent } from './button-units.component';

describe('ButtonUnitsComponent', () => {
  let component: ButtonUnitsComponent;
  let fixture: ComponentFixture<ButtonUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonUnitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
