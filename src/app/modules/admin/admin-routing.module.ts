import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from '../../core/guards/admin-guard/admin.guard';
import { AuthComponent } from './auth/auth.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: 'login',
  component: AuthComponent,
},
{
  path: '/',
  data: {
    roles: ['admin']
  },
  canActivateChild: [adminGuard],
  children: [
    {
      path: 'list',
      component: ListComponent,

    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
