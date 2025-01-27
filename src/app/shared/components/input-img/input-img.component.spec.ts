import { ComponentFixture, TestBed } from '@angular/core/testing';

import { forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { ionImage } from '@ng-icons/ionicons';
import { InputImgComponent } from './input-img.component';

describe('InputImgComponent', () => {
  let component: InputImgComponent;
  let fixture: ComponentFixture<InputImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputImgComponent],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputImgComponent),
        multi: true
      }],
      imports: [NgIconsModule.withIcons({ ionImage })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct placeholder', () => {

    component.placeholder = 'Ingrese una imagen';
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('#placeholder-element'));
    const span = element.nativeElement as HTMLSpanElement;

    expect(span.textContent).toBe('Ingrese una imagen');

  });

  it('should call onChange when file input changes', () => {

    jasmine.createSpy('onChange', component.onChange);

    const element = fixture.debugElement.query(By.css('input'));

    const file = new File([''], 'test.jpg', { type: 'image/*' });

    const input = element.nativeElement as HTMLInputElement;

    input.files = { length: 1, 0: file, item: () => file } as any;

    input.dispatchEvent(new Event('change'));

    component.onInputChange(input);

    expect(component.onChange).toHaveBeenCalledWith(file);
    expect(component.placeholder).toBe('test.jpg');

  })


  it('should write value', () => {
    const file = new File([''], 'test.jpg', { type: 'image/*' });

    component.writeValue(file);
    expect(component.value).toBe(file);

  })


  it('should register on change', () => {
    const fn = (value: File | null) => { };
    component.registerOnChange(fn);
    expect(component.onChange).toBe(fn);

  })

  it('should register on touched', () => {
    const fn = () => { };
    component.registerOnTouched(fn);
    expect(component.onTouched).toBe(fn);

  })

  it('should render HTML correctly', () => {
    component.label = 'test';
    component.refId = 'test-id';

    fixture.detectChanges();

    const labelElement = fixture.debugElement.query(By.css('label')).nativeElement as HTMLLabelElement;

    expect(labelElement.textContent).toBe('test');
    expect(labelElement.getAttribute('for')).toBe('test-id');

    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;

    expect(inputElement.getAttribute('name')).toBe('test-id');

    expect(inputElement.getAttribute('id')).toBe('test-id');

  })



});
