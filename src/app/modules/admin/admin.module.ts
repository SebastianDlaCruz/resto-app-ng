import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormService } from '../../core/services/auth-form/auth-form.service';
import { ComponentsModule } from '../../shared/components/components.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AuthComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ], providers: [AuthFormService],
  exports: [AuthComponent]
})
export class AdminModule { }
