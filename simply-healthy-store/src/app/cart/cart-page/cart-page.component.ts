import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})

export class CartPageComponent implements OnInit {
  public cartProducts;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts(): void {
    this.cartProducts = this.productService.getCartProducts();
  }

  onDeleteProduct(product): void {
    // this.cartProducts = this.productService.deleteProductFromCart(product.id);
  }
}
