import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { heroStar } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrl: './qualification-form.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QualificationFormComponent),
      multi: true
    }
  ]
})
export class QualificationFormComponent implements ControlValueAccessor {

  value = 0;
  private disabled = false;
  onChange?: (value: number) => void;
  onTouched?: () => void;
  startIcon = heroStar;


  writeValue(value: number): void {
    this.value = value;
  }
  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  onClick(value: number) {
    this.value = value
    this.onChange?.(value);
  }
}
