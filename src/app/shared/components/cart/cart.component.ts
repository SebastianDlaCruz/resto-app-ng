import { Component, inject, OnInit } from '@angular/core';
import { heroXMark } from '@ng-icons/heroicons/outline';
import { heroShoppingCartSolid } from '@ng-icons/heroicons/solid';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { Cart, Dish } from '../../../core/models';
import { CartState } from '../../../core/models/cart-state.model';
import { toggle } from '../../../core/store/actions/cart-state-action';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  private store: Store<{ cartState: CartState }> = inject(Store);
  private storeCart: Store<{ cart: Cart }> = inject(Store);

  stateCart: boolean = false;
  cartIcon = heroShoppingCartSolid;
  xMarkIcon = heroXMark;
  dishes: Dish[] = [];
  total = 0;

  ngOnInit(): void {

    combineLatest({
      stateCart: this.store.select('cartState'),
      cart: this.storeCart.select('cart')
    }).subscribe({
      next: ({ stateCart, cart }) => {
        console.log('stateCart', stateCart);
        console.log('cart', cart);
        this.stateCart = stateCart.cartState;
        this.dishes = cart.dishes;
        this.total = cart.total;
      }
    })
  }


  onClose() {
    this.store.dispatch(toggle());
  }
}
