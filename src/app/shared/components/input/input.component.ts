import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor } from '@angular/forms';
import { heroEyeSlashSolid, heroEyeSolid } from '@ng-icons/heroicons/solid';
import { CONTROL_VALUE_ACCESSOR } from '../../utils/const-proveedor.util';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    CONTROL_VALUE_ACCESSOR
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() type = "text";
  @Input() label = "";
  @Input() visiblePassword = false;
  @Input() refId = "";
  @Input() placeholder = "";
  @Input() control?: AbstractControl<string | null, string | null> | null;

  readonly EYE_SLASH = heroEyeSlashSolid;
  readonly HERO_EYE = heroEyeSolid;

  value = "";
  isDisable = false;
  stateEye = true;
  eye = this.EYE_SLASH;

  onChange?: (value: string) => void;
  onTouched?: () => void;

  writeValue(value: string): void {
    if (value !== undefined) { this.value = value; }
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisable = isDisabled
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChange?.(input.value);
  }

  onToggleStateEye() {
    this.stateEye = !this.stateEye;
    if (this.stateEye) {
      this.eye = this.EYE_SLASH;
      this.type = "password";
    } else {
      this.eye = this.HERO_EYE;
      this.type = "text";
    }
  }

}
