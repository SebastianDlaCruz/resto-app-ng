import { Component, Input } from '@angular/core';
import { MenuItems, TypeButton } from './model/menu-items.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input({ required: true }) items: MenuItems[] = [];

  type = TypeButton;
}
