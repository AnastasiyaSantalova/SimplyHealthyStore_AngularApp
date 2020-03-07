import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmaterialModule } from 'src/app/ngmaterial.module';
import { AppRoutingModule } from './../../app-routing.module';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsPageComponent } from './products-page/products-page.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    ProductsPageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgmaterialModule,
  ],
})
export class ProductModule { }
