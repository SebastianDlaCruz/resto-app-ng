import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from '../../core/guards/admin/admin.guard';
import { AuthComponent } from './auth/auth.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { DishesAddComponent } from './dishes/dishes-add/dishes-add.component';
import { DishesEditComponent } from './dishes/dishes-edit/dishes-edit.component';
import { DishesListComponent } from './dishes/dishes-list/dishes-list.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
  },

  {
    path: '',
    data: {
      roles: ['admin']
    },
    canActivateChild: [adminGuard],

    component: ViewsComponent,
    children: [
      {
        data: {
          roles: ['admin']
        },
        path: 'platos/lista',
        component: DishesListComponent,
      },
      {
        data: {
          roles: ['admin']
        },
        path: 'platos/agregar',
        component: DishesAddComponent,
      },
      {
        data: {
          roles: ['admin']
        },
        path: 'platos/editar/:id',
        component: DishesEditComponent,
      },
      {
        data: {
          roles: ['admin']
        },
        path: 'categorias/lista',
        component: CategoryListComponent,
      },
      {
        data: {
          roles: ['admin']
        },
        path: 'categorias/agregar',
        component: CategoryAddComponent,
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
