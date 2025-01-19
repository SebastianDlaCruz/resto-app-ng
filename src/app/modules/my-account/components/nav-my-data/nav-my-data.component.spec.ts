import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMyDataComponent } from './nav-my-data.component';

describe('NavMyDataComponent', () => {
  let component: NavMyDataComponent;
  let fixture: ComponentFixture<NavMyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavMyDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavMyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
