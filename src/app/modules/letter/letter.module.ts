import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../../shared/components/components.module';
import { CardComponent } from './components/card/card.component';
import { LetterRoutingModule } from './letter-routing.module';
import { LetterComponent } from './letter.component';
import { ViewDishComponent } from './components/view-dish/view-dish.component';

@NgModule({
  declarations: [
    LetterComponent,
    CardComponent,
    ViewDishComponent
  ],
  imports: [
    CommonModule,
    LetterRoutingModule,
    ComponentsModule, NgOptimizedImage
  ],
  exports: [LetterComponent, CardComponent]
})
export class LetterModule { }
