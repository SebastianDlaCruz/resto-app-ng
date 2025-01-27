import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ionImage } from '@ng-icons/ionicons';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputImgComponent),
    multi: true
  }]
})
export class InputImgComponent implements ControlValueAccessor {

  icon = ionImage;
  @Input() label = "";
  @Input() refId = "";
  @Input() placeholder = "";
  @Input() control?: AbstractControl<string | null, string | null> | null;
  invalid = false;

  value?: File;

  onChange?: (value: File | null) => void;
  onTouched?: () => void;

  writeValue(value: File): void {
    this.value = value;

  }

  registerOnChange(fn: (value: File | null) => void): void {
    this.onChange = fn;

  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(input: HTMLInputElement) {
    if (input.files && input.files.length > 0) {
      this.placeholder = input.files[0].name;
      this.onChange?.(input.files[0]);

    }

  }

  onError(input: HTMLInputElement) {
    if (input.files) {
      this.invalid = input.files.length === 0 ? true : false;
    }

  }


}
