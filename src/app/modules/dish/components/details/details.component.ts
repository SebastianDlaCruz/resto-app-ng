import { Component, inject, Input } from '@angular/core';
import { heroShoppingCartSolid, heroStarSolid } from '@ng-icons/heroicons/solid';
import { Store } from '@ngrx/store';
import { Dishes } from '../../../../core/models';
import { addDish } from '../../../../core/store/actions/cart.action';
import { generateUUid } from '../../../../shared/utils/generate-uuid.util';
import { UnitsService } from '../button-units/services/units.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {

  startIcon = heroStarSolid;
  shoppingIcon = heroShoppingCartSolid;
  private store = inject(Store);
  private unit = inject(UnitsService)
  @Input() dish: Dishes | undefined;

  onAddCart(dish: Dishes) {
    if (this.unit.getUnits() > 0) {
      this.store.dispatch(addDish({
        dish: {
          count: this.unit.getUnits(),
          dishes: dish,
          id: generateUUid()
        }
      }));

      this.unit.reset();
    }
  }
}
