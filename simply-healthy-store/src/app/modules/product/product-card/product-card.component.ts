import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product;
  @Input() pageURL;
  @Output() pushProduct = new EventEmitter();

  private productCount: number = 0;
  private isAddButtonDisabled: boolean = false;
  private isAddToCartButtonDisabled: boolean = true;

  constructor() { }

  ngOnInit() {}

  substractProducts(quantity) {
    this.productCount = this.productCount - 1;
    if (this.productCount < quantity) {
      this.isAddButtonDisabled = false;
    }
  }

  addProducts(quantity) {
    this.isAddToCartButtonDisabled = false;

    this.productCount = this.productCount + 1;
    if (this.productCount === quantity) {
      this.isAddButtonDisabled = true;
    }
  }

  addToCart() {
    if (this.product.availableQuantity) {
      this.product.availableQuantity -= this.productCount;
      this.product.quantityInCart += this.productCount;
      this.productCount = 0;
    }

    if (!this.product.availableQuantity) {
      this.isAddToCartButtonDisabled = true;
    }

    this.onPushProduct(this.product);
    this.isAddToCartButtonDisabled = true;
  }

  onPushProduct(product) {
    this.pushProduct.emit(product);
  }
}
