import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgmaterialModule } from '../../ngmaterial.module';

import { CartRoutingModule } from './cart-routing.module';

import { CartPageComponent } from './cart-page/cart-page.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { OrderFormComponent } from './order-form/order-form.component';


@NgModule({
  declarations: [
    CartPageComponent,
    CartListComponent,
    OrderFormComponent,
  ],
  imports: [
    CommonModule,
    NgmaterialModule,
    CartRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CartModule { }
