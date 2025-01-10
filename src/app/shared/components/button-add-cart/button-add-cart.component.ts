import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { heroShoppingCartSolid } from '@ng-icons/heroicons/solid';
//TODO: COMPONENTE BOTON PARA AGREGAR ITEMS AL CARRITO

@Component({
  selector: 'app-button-add-cart',
  templateUrl: './button-add-cart.component.html',
  styleUrl: './button-add-cart.component.css'
})
export class ButtonAddCartComponent {

  private router = inject(Router);
  @Input({ required: true }) paragraph: string = "";
  @Output() onClick = new EventEmitter<void>();
  shoppingCart = heroShoppingCartSolid;

  click() {
    this.onClick.emit();
  }

}
