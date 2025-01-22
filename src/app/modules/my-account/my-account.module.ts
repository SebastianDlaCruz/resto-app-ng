import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { heroCreditCard, heroShoppingCart, heroUser } from '@ng-icons/heroicons/outline';
import { ComponentsModule } from "../../shared/components/components.module";
import { MyDataComponent } from './components/my-data/my-data.component';
import { NavMyDataComponent } from './components/nav-my-data/nav-my-data.component';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { MyCardCreditComponent } from './components/my-card-credit/my-card-credit.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    MyDataComponent,
    NavMyDataComponent,
    MyCardCreditComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroUser, heroCreditCard, heroShoppingCart })
  ],
  exports: [MyAccountComponent]
})
export class MyAccountModule { }
