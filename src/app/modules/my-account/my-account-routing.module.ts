import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCardCreditComponent } from './components/my-card-credit/my-card-credit.component';
import { MyDataComponent } from './components/my-data/my-data.component';
import { MyAccountComponent } from './my-account.component';

const routes: Routes = [{
  path: '',
  component: MyAccountComponent,
  children: [
    {
      path: 'my-data',
      component: MyDataComponent
    }, {
      path: 'my-cart-credit',
      component: MyCardCreditComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
