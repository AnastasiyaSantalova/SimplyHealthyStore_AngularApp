import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmaterialModule } from 'src/app/ngmaterial.module';

import { ProductRoutingModule } from './product-routing.module';

import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductListComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    NgmaterialModule,
    ProductRoutingModule,
  ],
})
export class ProductModule { }
