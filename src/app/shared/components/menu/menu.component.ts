import { Component, inject, Input, OnInit } from '@angular/core';
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

  private token$ = inject(TokenService);
  token = "";

  ngOnInit(): void {
    this.token$.getToken().subscribe(res => {
      this.token = res;
    });
  }


}
