import { Component, inject, OnInit } from '@angular/core';
import { heroXMark } from '@ng-icons/heroicons/outline';
import { heroShoppingCartSolid } from '@ng-icons/heroicons/solid';
import { Store } from '@ngrx/store';
import { CartState } from '../../../core/models/cart-state.model';
import { toggle } from '../../../core/store/actions/cart-state-action';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  private store: Store<CartState> = inject(Store);
  stateCart: boolean = false;
  cartIcon = heroShoppingCartSolid;
  xMarkIcon = heroXMark;


  ngOnInit(): void {
    this.store.select('cartState').subscribe(res => {
      this.stateCart = res;
      console.log('state', res)
    })
  }


  onClose() {
    this.store.dispatch(toggle());
  }
}
