import { forwardRef, Provider } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { InputComponent } from "../components/input/input.component";

export const CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
}


