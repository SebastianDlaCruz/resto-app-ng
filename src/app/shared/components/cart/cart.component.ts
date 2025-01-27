import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { heroXMark } from '@ng-icons/heroicons/outline';
import { heroShoppingCartSolid } from '@ng-icons/heroicons/solid';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { DocumentsService } from '../../../core/firebase/documets/documents.service';
import { Cart, Dish } from '../../../core/models';
import { CartState } from '../../../core/models/cart-state.model';
import { toggle } from '../../../core/store/actions/cart-state-action';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  private store: Store<{ cartState: CartState, cart: Cart }> = inject(Store);
  private router = inject(Router);
  private docs = inject(DocumentsService);

  stateCart: boolean = false;
  cartIcon = heroShoppingCartSolid;
  xMarkIcon = heroXMark;
  dishes: Dish[] = [];
  total = 0;

  ngOnInit(): void {

    combineLatest({
      stateCart: this.store.select('cartState'),
      cart: this.store.select('cart')
    }).subscribe({
      next: ({ stateCart, cart }) => {
        this.stateCart = stateCart.cartState;
        this.dishes = cart.dishes;
        this.total = cart.total;
      }
    })
  }


  onClose() {
    this.store.dispatch(toggle());
  }

  onPay() {
    if (this.dishes.length > 0) {
      this.store.dispatch(toggle());
      this.store.select('cart').subscribe(res => {

        this.docs.setDocument('cart', res)
        this.router.navigate(['/pay']);
      })
    }
  }
}
