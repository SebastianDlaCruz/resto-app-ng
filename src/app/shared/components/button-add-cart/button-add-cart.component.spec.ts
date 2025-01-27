import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { heroShoppingCartSolid } from '@ng-icons/heroicons/solid';
import { ButtonAddCartComponent } from './button-add-cart.component';

describe('ButtonAddCartComponent', () => {
  let component: ButtonAddCartComponent;
  let fixture: ComponentFixture<ButtonAddCartComponent>;
  let buttonElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAddCartComponent],
      imports: [NgIconsModule.withIcons({ heroShoppingCartSolid })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonAddCartComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emitter click', () => {

    jasmine.createSpy('click', component.click);

    buttonElement.triggerEventHandler('click', null);

    expect(component.onClick.emit).toHaveBeenCalled();

  });

  it('should render paragraph', () => {
    component.paragraph = 'Agregar al carrito';
    fixture.detectChanges();

    const text = buttonElement.nativeElement.textContent();

    expect(text).toContain('Agregar al carrito');

  });


  it('should render icon', () => {

    const ngIcon = fixture.debugElement.query(By.css('ng-icon'));

    expect(ngIcon).toBeTruthy();

  });

});
