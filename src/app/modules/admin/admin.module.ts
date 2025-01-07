import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { heroUser } from '@ng-icons/heroicons/outline';
import { ionImage } from '@ng-icons/ionicons';
import { AuthFormService } from '../../core/services/auth-form/auth-form.service';
import { ComponentsModule } from '../../shared/components/components.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { DishesAddComponent } from './dishes/dishes-add/dishes-add.component';
import { DishesEditComponent } from './dishes/dishes-edit/dishes-edit.component';
import { SelectCategoriesComponent } from './dishes/dishes-list/components/select-categories/select-categories.component';
import { DishesListComponent } from './dishes/dishes-list/dishes-list.component';
import { ViewsComponent } from './views/views.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';


@NgModule({
  declarations: [
    AuthComponent,
    ViewsComponent,
    DishesListComponent,
    DishesAddComponent,
    SelectCategoriesComponent,
    DishesEditComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgIconsModule.withIcons({ heroUser, ionImage }),

  ], providers: [AuthFormService],
  exports: [AuthComponent, ViewsComponent]
})
export class AdminModule { }
