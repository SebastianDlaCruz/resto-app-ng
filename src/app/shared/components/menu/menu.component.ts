import { Component, inject, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../../../core/services/token/token.service';
import { MenuItems, TypeButton } from './model/menu-items.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  @Input({ required: true }) items: MenuItems[] = [];
  type = TypeButton;
  private cookieServices = inject(CookieService);
  private token$ = inject(TokenService);

  ngOnInit(): void {
    const token = this.cookieServices.get('token');
    this.token$.setToken(token);
  }

  getToken() {
    return this.token$.getToken();
  }
}
