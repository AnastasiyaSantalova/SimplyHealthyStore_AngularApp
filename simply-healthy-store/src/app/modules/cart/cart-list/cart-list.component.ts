import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {

  @Input() products;
  @Output() deleteProduct = new EventEmitter();

  isAddButtonDisabled: boolean;
  displayedColumns = ['image', 'name', 'price', 'button-substract', 'count', 'button-add', 'total', 'delete'];

  constructor() { }

  ngOnInit() {
  }

  substractProduct(product) {
    product.quantityInCart -= 1;
    product.availableQuantity += 1;
    if (!product.quantityInCart) {
      this.onDeleteProduct(product);
    }
  }

  addProduct(product) {
    product.quantityInCart += 1;
    product.availableQuantity -= 1;
    if (!product.availableQuantity) {
      this.isAddButtonDisabled = true;
    }
  }

  onDeleteProduct(product) {
    this.deleteProduct.emit(product);
  }

}
