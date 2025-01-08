import { Component, inject, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MenuItems, TypeButton } from './model/menu-items.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input({ required: true }) items: MenuItems[] = [];
  private cookieServices = inject(CookieService);
  token = this.cookieServices.get('token');
  type = TypeButton;
}
