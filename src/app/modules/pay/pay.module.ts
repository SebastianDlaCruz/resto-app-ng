import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from "../../shared/components/components.module";
import { FormatCardBankPipe } from '../../shared/pipes/format-card-bank/format-card-bank.pipe';
import { PayRoutingModule } from './pay-routing.module';
import { PayComponent } from './pay.component';

@NgModule({
  declarations: [
    PayComponent,
    FormatCardBankPipe
  ],
  imports: [
    CommonModule,
    PayRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PayModule { }
