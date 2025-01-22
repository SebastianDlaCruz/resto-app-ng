import { Component } from '@angular/core';
import { heroCreditCard, heroShoppingCart, heroUser } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-nav-my-data',
  templateUrl: './nav-my-data.component.html',
  styleUrl: './nav-my-data.component.css'
})
export class NavMyDataComponent {
  userIcon = heroUser;
  creditCardIcon = heroCreditCard;
  shoppingCartIcon = heroShoppingCart;
}
