import { Component } from '@angular/core';
import { heroTrash } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrl: './item-cart.component.css'
})
export class ItemCartComponent {
  iconTrash = heroTrash;
}
