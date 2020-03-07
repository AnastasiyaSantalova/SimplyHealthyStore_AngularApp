import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../mock-products';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  public products: Array<Product>;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  pushProduct(product): void {
    this.productService.pushProductToCart(product);
  }

}
