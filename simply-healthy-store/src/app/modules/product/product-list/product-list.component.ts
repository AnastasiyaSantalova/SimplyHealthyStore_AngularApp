import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/domain/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() pushProduct: EventEmitter<[Product, number]> = new EventEmitter();

  onPushProduct(product: [Product, number]): void {
    this.pushProduct.emit(product);
  }
}
