import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDishesService {

  getFormGroup() {
    return new FormGroup({
      id: new FormControl(''),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.max(2000000),
      ]),
      category: new FormControl(null, [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.max(200)
      ]),
      img: new FormControl(''),
      imgFile: new FormControl(null, [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.max(30)]),
      promotion: new FormControl(false),
      qualification: new FormControl(0),
      discountAmount: new FormControl({
        value: null,
        disabled: true,

      }, [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.max(2000000),
      ]),
    });
  }
}
