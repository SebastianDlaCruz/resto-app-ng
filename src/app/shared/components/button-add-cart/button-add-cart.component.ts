import { Component, Input } from '@angular/core';
import { heroShoppingCartSolid } from '@ng-icons/heroicons/solid';
//TODO: COMPONENTE BOTON PARA AGREGAR ITEMS AL CARRITO

@Component({
  selector: 'app-button-add-cart',
  templateUrl: './button-add-cart.component.html',
  styleUrl: './button-add-cart.component.css'
})
export class ButtonAddCartComponent {

  @Input({ required: true }) paragraph: string = "";
  shoppingCart = heroShoppingCartSolid;
}
