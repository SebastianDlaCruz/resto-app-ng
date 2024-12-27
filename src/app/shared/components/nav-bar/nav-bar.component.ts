import { Component } from '@angular/core';
import { heroArrowRightStartOnRectangleSolid, heroShoppingCartSolid } from '@ng-icons/heroicons/solid';
import { MenuItems, TypeButton } from '../menu/model/menu-items.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  shoppingCart = heroShoppingCartSolid;
  items: MenuItems[] = [
    {
      name: 'Carta',
      link: '/',
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
    }
  ]
}
