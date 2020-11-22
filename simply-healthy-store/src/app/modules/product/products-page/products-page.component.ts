import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Product, ProductInCart } from 'src/app/domain/Product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})

export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
  cartProducts: ProductInCart[] = [];

  constructor(private productService: ProductsService,
              private sharedService: SharedService) { }

  ngOnInit(): void {
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

  pushProduct(product: [Product, number]): void {
    this.sharedService.addProductToCart(product[0], product[1]);
    this.updateAvailableQuantity(product);
  }

  private updateAvailableQuantity(product): void {
    this.products.forEach(p => {
      if (p.id === product[0].id) {
        p.availableQuantity -= product[1];
      }
    });
  }
}
