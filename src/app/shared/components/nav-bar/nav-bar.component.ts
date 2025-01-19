import { Component, inject, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { heroArrowRightStartOnRectangleSolid, heroShoppingCartSolid } from '@ng-icons/heroicons/solid';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { switchMap } from 'rxjs';
import { AuthService } from '../../../core/firebase/auth/auth.service';
import { DocumentsService } from '../../../core/firebase/documets/documents.service';
import { TypeUser, User } from '../../../core/models';
import { CartState } from '../../../core/models/cart-state.model';
import { AuthFormService } from '../../../core/services/auth-form/auth-form.service';
import { TokenService } from '../../../core/services/token/token.service';
import { toggle } from '../../../core/store/actions/cart-state-action';
import { initAuth } from '../../../core/store/actions/user.action';
import { MenuItems, TypeButton } from '../menu/model/menu-items.model';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @ViewChild('login') login?: ModalFormComponent;
  @ViewChild('register') register?: ModalFormComponent;

  form = inject(AuthFormService).generateForm();
  formRegister = new FormGroup({
    emailRegister: new FormControl('', [Validators.required, Validators.email]),
    passwordRegister: new FormControl('', [Validators.required, Validators.minLength(12)]),
    name: new FormControl('', [Validators.required]),
    validatePassword: new FormControl('', [Validators.required, Validators.minLength(12), this.passwordMatchValidator()]),
  });

  private auth = inject(AuthService);
  private cookie = inject(CookieService);
  private docs = inject(DocumentsService);
  private token$ = inject(TokenService);
  private store: Store<CartState> = inject(Store);

  shoppingCart = heroShoppingCartSolid;
  items: MenuItems[] = [
    {
      name: 'Carta',
      link: '/latter',
      type: TypeButton.LINK
    },
    {
      name: 'Promociones',
      link: '/promotion',
      type: TypeButton.LINK
    },
    {
      name: 'Contacto',
      link: '/contact',
      type: TypeButton.LINK
    },
    {
      name: 'Mi cuenta',
      link: '/my-account',
      type: TypeButton.LINK
    }, {
      name: '',
      action: () => {
        this.auth.singOut();
        this.cookie.delete('token');
        this.cookie.delete('type');
        this.token$.setToken('');
      },
      type: TypeButton.BUTTON,
      icon: heroArrowRightStartOnRectangleSolid
    },
    {
      name: 'Iniciar Session',
      action: () => {
        this.login?.open();
      },
      type: TypeButton.BUTTON,
    },
    {
      name: 'Registrase',
      action: () => {
        this.register?.open();
      },
      type: TypeButton.BUTTON,
    },
  ]

  control(name: string) {
    return this.form.get(name);
  }

  onSubmitLogin() {
    this.auth.singIn(this.form.value).subscribe({
      next: (res) => {
        res.user.getIdToken().then(token => {
          this.cookie.set('token', token);
          this.token$.setToken('token');
          this.cookie.set('type', TypeUser.USER);
          this.login?.close();
        })

        this.docs.getDocumentById<User>(res.user.uid, 'id', 'users').subscribe({
          next: (value) => {
            this.store.dispatch(initAuth({
              user: {
                email: res.user.email ?? '',
                name: value.userName,
                type: value.type
              }
            }));

            this.cookie.set('user', JSON.stringify({
              email: res.user.email ?? '',
              name: value.userName,
              type: value.type
            }))
          }
        })

      },
      error: () => {

      }
    })
  }



  controlRegister(name: string) {
    return this.formRegister.get(name);
  }
  onSubmitRegister() {
    const auth = {
      email: this.controlRegister('emailRegister')?.value,
      password: this.controlRegister('passwordRegister')?.value
    }

    const user: User = {
      id: '',
      userName: this.controlRegister('name')?.value,
      zipCode: '',
      locality: '',
      street: '',
      floor: 0,
      number: 0,
      contact: 0,
      email: this.controlRegister('emailRegister')?.value,
      clarification: '',
      type: TypeUser.USER

    }

    this.auth.create(auth).pipe(
      switchMap(res => {
        res.user.getIdToken().then(res => {
          this.cookie.set('token', res);
          this.cookie.set('type', user.type);
          this.token$.setToken(res);
          this.register?.close();
        })

        user['id'] = res.user.uid;
        return this.docs.setDocument('users', user);
      })
    ).subscribe();
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password');
      const validatePassword = control.get('validatePassword');

      if (!password || !validatePassword) {
        return null;
      }

      return password.value == validatePassword.value ? null : { passwordMismatch: true }
    }
  }


  onOpen() {
    console.log('click')
    this.store.dispatch(toggle());
  }

}
