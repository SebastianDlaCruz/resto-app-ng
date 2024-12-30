import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(12)])
  });

  generateForm(): FormGroup {
    return this.form;
  }


  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
