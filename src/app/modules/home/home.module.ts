import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgIconsModule } from '@ng-icons/core';
import { heroMagnifyingGlassSolid } from '@ng-icons/heroicons/solid';
import { ComponentsModule } from '../../shared/components/components.module';
import { LetterModule } from "../letter/letter.module";
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserComponent } from './components/user/user.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarruselComponent,
    ListUsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    NgIconsModule.withIcons({ heroMagnifyingGlassSolid }),
    NgOptimizedImage,
    LetterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
