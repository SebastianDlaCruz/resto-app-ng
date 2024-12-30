import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroArrowRightStartOnRectangleSolid,
  heroEyeSlashSolid,
  heroEyeSolid,
  heroMagnifyingGlassSolid, heroPhoneSolid,
  heroShoppingCartSolid, heroStarSolid
} from '@ng-icons/heroicons/solid';
import { ionLocationOutline, ionLogoFacebook, ionLogoTwitter, ionLogoWhatsapp } from '@ng-icons/ionicons';
import { ButtonAddCartComponent } from './button-add-cart/button-add-cart.component';
import { ButtonComponent } from './button/button.component';
import { CardPlateComponent } from './card-plate/card-plate.component';
import { FooterComponent } from './footer/footer.component';
import { IconMainComponent } from './icon-main/icon-main.component';
import { InputComponent } from './input/input.component';
import { ListFooterInfoComponent } from './list-footer-info/list-footer-info.component';
import { MenuComponent } from './menu/menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QualificationComponent } from './qualification/qualification.component';
import { TextErrorInputComponent } from './text-error-input/text-error-input.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
@NgModule({
  declarations: [
    CardPlateComponent,
    MenuComponent,
    ButtonAddCartComponent,
    QualificationComponent,
    NavBarComponent,
    FooterComponent,
    IconMainComponent,
    ListFooterInfoComponent,
    InputComponent,
    ButtonComponent,
    TextErrorInputComponent,
    NavBarAdminComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroShoppingCartSolid, heroStarSolid,
      heroArrowRightStartOnRectangleSolid,
      heroMagnifyingGlassSolid,
      heroPhoneSolid,
      ionLogoWhatsapp,
      ionLogoFacebook,
      ionLocationOutline,
      ionLogoTwitter,
      heroEyeSlashSolid,
      heroEyeSolid
    }),
    RouterLink,
    NgOptimizedImage
  ],
  exports: [
    CardPlateComponent,
    MenuComponent,
    ButtonAddCartComponent,
    QualificationComponent,
    NavBarComponent,
    FooterComponent,
    IconMainComponent,
    ListFooterInfoComponent,
    InputComponent,
    ButtonComponent,
    TextErrorInputComponent,
  ]
})
export class ComponentsModule { }
