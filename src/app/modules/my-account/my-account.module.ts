import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from "../../shared/components/components.module";
import { MyDataComponent } from './components/my-data/my-data.component';
import { NavMyDataComponent } from './components/nav-my-data/nav-my-data.component';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    MyDataComponent,
    NavMyDataComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    ComponentsModule
  ],
  exports: [MyAccountComponent]
})
export class MyAccountModule { }
