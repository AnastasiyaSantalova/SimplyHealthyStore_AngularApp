import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from 'src/app/domain/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})

export class ProductCardComponent {
  @Input() product: Product;
  @Output() pushProduct: EventEmitter<[Product, number]> = new EventEmitter();

  productCount = 1;

  substractProducts(): void {
    this.productCount--;
  }

  addProducts(): void {
    this.productCount++;
  }

  onPushProduct(): void {
    this.pushProduct.emit([this.product, this.productCount]);
    this.productCount = 1;
  }
}
