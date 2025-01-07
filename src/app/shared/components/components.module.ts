import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { heroPencil, heroTrash } from '@ng-icons/heroicons/outline';
import {
  heroArrowRightStartOnRectangleSolid,
  heroEyeSlashSolid,
  heroEyeSolid,
  heroMagnifyingGlassSolid, heroPhoneSolid,
  heroShoppingCartSolid, heroStarSolid
} from '@ng-icons/heroicons/solid';
import { ionImage, ionLocationOutline, ionLogoFacebook, ionLogoTwitter, ionLogoWhatsapp } from '@ng-icons/ionicons';
import { ButtonAddCartComponent } from './button-add-cart/button-add-cart.component';
import { ButtonComponent } from './button/button.component';
import { CardPlateComponent } from './card-plate/card-plate.component';
import { FooterComponent } from './footer/footer.component';
import { IconMainComponent } from './icon-main/icon-main.component';
import { InputImgComponent } from './input-img/input-img.component';
import { InputComponent } from './input/input.component';
import { ItemsAdminComponent } from './items-admin/items-admin.component';
import { LineSkeletonComponent } from './line-skeleton/line-skeleton.component';
import { ListFooterInfoComponent } from './list-footer-info/list-footer-info.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { MiniLoadingComponent } from './mini-loading/mini-loading.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QualificationComponent } from './qualification/qualification.component';
import { TextErrorInputComponent } from './text-error-input/text-error-input.component';

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
    ItemsAdminComponent,
    ModalConfirmComponent,
    InputImgComponent,
    LoadingComponent,
    MiniLoadingComponent,
    LineSkeletonComponent
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
      heroEyeSolid,
      heroPencil,
      heroTrash,
      ionImage
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
    NavBarAdminComponent,
    ItemsAdminComponent,
    ModalConfirmComponent,
    InputImgComponent,
    LoadingComponent,
    MiniLoadingComponent,
    LineSkeletonComponent
  ]
})
export class ComponentsModule { }
