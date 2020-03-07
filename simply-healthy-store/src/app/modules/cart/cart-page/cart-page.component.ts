import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { Product } from 'src/app/mock-products';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  public cartProducts: Array<Product>;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts(): void {
    this.productService.getCartProducts()
      .subscribe(cartProducts => this.cartProducts = cartProducts);
  }

  onDeleteProduct(product): void {
    this.productService.deleteProductFromCart(product.id)
      .subscribe(cartProducts => {
        this.cartProducts = [...cartProducts];
      });
  }
}
