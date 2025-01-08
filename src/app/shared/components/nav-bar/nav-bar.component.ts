import { Component, inject, ViewChild } from '@angular/core';
import { heroArrowRightStartOnRectangleSolid, heroShoppingCartSolid } from '@ng-icons/heroicons/solid';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../../core/firebase/auth/auth.service';
import { AuthFormService } from '../../../core/services/auth-form/auth-form.service';
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
  private auth = inject(AuthService);
  private cookie = inject(CookieService);

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
      link: '/about-me',
      type: TypeButton.LINK
    }, {
      name: '',
      action: () => { },
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
          this.cookie.set('token', token)
          this.login?.close();
        })
      },
      error: () => {

      }
    })
  }

}
