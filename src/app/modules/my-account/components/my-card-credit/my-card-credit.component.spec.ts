import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardCreditComponent } from './my-card-credit.component';

describe('MyCardCreditComponent', () => {
  let component: MyCardCreditComponent;
  let fixture: ComponentFixture<MyCardCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCardCreditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCardCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
