import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from 'src/app/domain/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() pageURL: string;
  @Output() pushProduct: EventEmitter<Product> = new EventEmitter();

  private productCount: number = 1;

  constructor() { }

  ngOnInit() {}

  substractProducts(): void {
    this.productCount = this.productCount - 1;
  }

  addProducts(): void {
    this.productCount = this.productCount + 1;
  }

  addToCart(): void {
    if (this.product.availableQuantity) {
      this.product.availableQuantity -= this.productCount;
      this.product.quantityInCart += this.productCount;
      this.productCount = 1;
    }
    this.onPushProduct(this.product);
  }

  onPushProduct(product: Product): void {
    this.pushProduct.emit(product);
  }
}
