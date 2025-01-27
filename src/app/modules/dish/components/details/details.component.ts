import { Component, inject, Input } from '@angular/core';
import { heroShoppingCartSolid, heroStarSolid } from '@ng-icons/heroicons/solid';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { Cart, Dishes, User } from '../../../../core/models';
import { addData, addDish, calculateItems } from '../../../../core/store/actions/cart.action';
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
  private store: Store<{ cart: Cart }> = inject(Store);
  private unit = inject(UnitsService);
  private docs = inject(DocumentsService);
  private cookie = inject(CookieService);

  @Input() dish: Dishes | undefined;

  onAddCart(dish: Dishes) {
    if (this.unit.getUnits() > 0) {
      const user = JSON.parse(this.cookie.get('user')) as User;

      this.store.dispatch(addData({
        id: generateUUid(),
        idUser: user.id
      }))

      this.store.dispatch(addDish({
        dish: {
          count: this.unit.getUnits(),
          dishes: dish,
          id: generateUUid()
        }
      }));



      this.store.dispatch(calculateItems());

      this.unit.reset();
    }
  }
}
