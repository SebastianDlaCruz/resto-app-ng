import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { heroArrowRightStartOnRectangleSolid, heroMagnifyingGlassSolid, heroShoppingCartSolid, heroStarSolid } from '@ng-icons/heroicons/solid';
import { ButtonAddCartComponent } from './button-add-cart/button-add-cart.component';
import { CardPlateComponent } from './card-plate/card-plate.component';
import { MenuComponent } from './menu/menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QualificationComponent } from './qualification/qualification.component';

@NgModule({
  declarations: [
    CardPlateComponent,
    MenuComponent,
    ButtonAddCartComponent,
    QualificationComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroShoppingCartSolid, heroStarSolid,
      heroArrowRightStartOnRectangleSolid, heroMagnifyingGlassSolid
    }),
    RouterLink,
    NgOptimizedImage
  ],
  exports: [
    CardPlateComponent,
    MenuComponent,
    ButtonAddCartComponent,
    QualificationComponent,
    NavBarComponent]
})
export class ComponentsModule { }
