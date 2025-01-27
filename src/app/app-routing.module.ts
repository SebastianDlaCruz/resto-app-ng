import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'latter',
    loadChildren: () => import('./modules/letter/letter.module').then(m => m.LetterModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'dish/:id',
    loadChildren: () => import('./modules/dish/dish.module').then(m => m.DishModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./modules/my-account/my-account.module').then(m => m.MyAccountModule)
  },

  {
    path: 'pay',
    loadChildren: () => import('./modules/pay/pay.module').then(m => m.PayModule)
  },

  {
    path: '**',
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
