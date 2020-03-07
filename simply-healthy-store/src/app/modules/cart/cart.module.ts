import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmaterialModule } from '../../ngmaterial.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CartPageComponent } from './cart-page/cart-page.component';
import { CartListComponent } from './cart-list/cart-list.component';


@NgModule({
  declarations: [
    CartPageComponent,
    CartListComponent,
  ],
  imports: [
    CommonModule,
    NgmaterialModule,
    AppRoutingModule,
  ],
})
export class CartModule { }
