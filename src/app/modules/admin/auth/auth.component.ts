import { Component, inject, OnDestroy } from '@angular/core';
import { AuthFormService } from '../../../core/services/auth-form/auth-form.service';
import { AuthFacadeService } from './services/auth-facade/auth-facade.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnDestroy {

  private afs = inject(AuthFormService);
  private authFace = inject(AuthFacadeService);

  form = this.afs.generateForm();
  email = this.afs.email;
  password = this.afs.password;

  onSubmit() {
    this.authFace.logIn(this.form.value);
  }
  ngOnDestroy(): void {
    this.authFace.getDestroy();
  }
}
