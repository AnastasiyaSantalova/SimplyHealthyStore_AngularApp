import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/services/shared/shared.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductInCart, Product } from 'src/app/domain/Product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  products: Product[] = [];
  cartProducts: ProductInCart[] = [];

  constructor(private sharedService: SharedService,
              private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
    this.getCartProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  getCartProducts(): void {
    this.sharedService.getCartProducts().subscribe(products => {
      this.cartProducts = products;
    });
  }

  onSubstractProduct(product: ProductInCart): void {
    this.updateQuantityInCart(product, -1)
    this.updateAvailableQuantity(product, 1);
  }

  onAddProduct(product: ProductInCart): void {
    this.updateQuantityInCart(product, 1)
    this.updateAvailableQuantity(product, -1);
  }

  onDeleteProduct(product: ProductInCart): void {
    this.sharedService.deleteProductFromCart(product.id);
    this.updateAvailableQuantity(product, product.quantityInCart);
  }

  private updateQuantityInCart(product, count) {
    this.cartProducts.forEach(p => {
      if (p.id === product.id) {
        p.quantityInCart += count;
      }
    })
  }

  private updateAvailableQuantity(product, count) {
    this.products.forEach(p => {
      if (p.id === product.id) {
        p.availableQuantity += count;
      }
    })
  }
}
