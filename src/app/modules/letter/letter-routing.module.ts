import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDishComponent } from './components/view-dish/view-dish.component';
import { LetterComponent } from './letter.component';

const routes: Routes = [{
  path: '',
  component: LetterComponent,

},
{
  path: ':title/:id',
  component: ViewDishComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetterRoutingModule { }
