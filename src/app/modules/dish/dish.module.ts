import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgIconsModule } from '@ng-icons/core';
import { heroMinusSmall, heroPlusSmall, heroStar } from '@ng-icons/heroicons/outline';
import { heroShoppingCartSolid, heroStarSolid } from '@ng-icons/heroicons/solid';
import { ComponentsModule } from "../../shared/components/components.module";
import { LetterModule } from "../letter/letter.module";
import { ButtonUnitsComponent } from './components/button-units/button-units.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DetailsComponent } from './components/details/details.component';
import { DishRoutingModule } from './dish-routing.module';
import { DishComponent } from './dish.component';

@NgModule({
  declarations: [
    DishComponent,
    DetailsComponent,
    CommentsComponent,
    /*     QualificationComponent, */
    CommentComponent,
    ButtonUnitsComponent
  ],
  imports: [
    CommonModule,
    DishRoutingModule,
    ComponentsModule,
    LetterModule,
    NgIconsModule.withIcons({ heroStarSolid, heroStar, heroPlusSmall, heroMinusSmall, heroShoppingCartSolid })

  ],
  exports: [DishComponent]
})
export class DishModule { }
