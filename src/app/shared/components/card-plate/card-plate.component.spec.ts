import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlateComponent } from './card-plate.component';

describe('CardPlateComponent', () => {
  let component: CardPlateComponent;
  let fixture: ComponentFixture<CardPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPlateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
