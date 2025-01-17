import { Component, inject, OnInit } from '@angular/core';
import { heroXMark } from '@ng-icons/heroicons/outline';
import { heroShoppingCartSolid } from '@ng-icons/heroicons/solid';
import { Store } from '@ngrx/store';
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
    this.store.select('cartState').subscribe(res => {
      this.stateCart = res.cartState;
    })
    this.storeCart.select('cart').subscribe(res => {
      this.dishes = res.dishes;
      this.total = res.total;
    })


  }


  onClose() {
    this.store.dispatch(toggle());
  }
}
