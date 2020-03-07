import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './modules/product/products-page/products-page.component';
import { CartPageComponent } from './modules/cart/cart-page/cart-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
