import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgIconsModule } from '@ng-icons/core';
import { heroStar } from '@ng-icons/heroicons/outline';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { ComponentsModule } from "../../shared/components/components.module";
import { LetterModule } from "../letter/letter.module";
import { CommentsComponent } from './components/comments/comments.component';
import { DetailsComponent } from './components/details/details.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { DishRoutingModule } from './dish-routing.module';
import { DishComponent } from './dish.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    DishComponent,
    DetailsComponent,
    CommentsComponent,
    QualificationComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    DishRoutingModule,
    ComponentsModule,
    LetterModule,
    NgIconsModule.withIcons({ heroStarSolid, heroStar })

  ],
  exports: [DishComponent]
})
export class DishModule { }
