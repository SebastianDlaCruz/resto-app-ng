import { Component, inject, Input } from '@angular/core';
import { heroTrash } from '@ng-icons/heroicons/outline';
import { Store } from '@ngrx/store';
import { Dish } from '../../../../../core/models';
import { deleteDish } from '../../../../../core/store/actions/cart.action';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrl: './item-cart.component.css'
})
export class ItemCartComponent {
  iconTrash = heroTrash;
  private store = inject(Store);
  @Input() dish?: Dish;

  onDelete(id: string) {
    this.store.dispatch(deleteDish({
      idDish: id
    }));

  }
}
