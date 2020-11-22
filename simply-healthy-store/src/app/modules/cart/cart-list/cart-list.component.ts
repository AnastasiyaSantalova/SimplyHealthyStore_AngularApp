import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductInCart } from 'src/app/domain/Product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {

  @Input() products: ProductInCart[] = [];
  @Output() deleteProduct: EventEmitter<ProductInCart> = new EventEmitter();
  @Output() substractProduct: EventEmitter<ProductInCart> = new EventEmitter();
  @Output() addProduct: EventEmitter<ProductInCart> = new EventEmitter();

  isAddButtonDisabled: boolean;
  displayedColumns: string[] = [
    'image',
    'name',
    'price',
    'button-substract',
    'count',
    'button-add',
    'total',
    'delete',
  ];

  onSubstractProduct(product: ProductInCart): void {
    this.substractProduct.emit(product);
  }

  onAddProduct(product: ProductInCart): void {
    this.addProduct.emit(product);
  }

  onDeleteProduct(product: ProductInCart): void {
    this.deleteProduct.emit(product);
  }
}
