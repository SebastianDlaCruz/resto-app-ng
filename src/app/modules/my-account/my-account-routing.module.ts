import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDataComponent } from './components/my-data/my-data.component';
import { MyAccountComponent } from './my-account.component';

const routes: Routes = [{
  path: '',
  component: MyAccountComponent,
  children: [
    {
      path: 'my-data',
      component: MyDataComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
