import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormCategoryService {

  getFormGroup() {
    return new FormGroup({
      id: new FormControl(''),
      img: new FormControl(''),
      imgFile: new FormControl(null, [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.max(30)])
    });
  }
}
