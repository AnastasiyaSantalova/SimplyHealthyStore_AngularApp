import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {

  @Input() products;
  @Output() deleteProduct = new EventEmitter();

  isAddButtonDisabled: boolean;
  someData: string = 'First data';
  displayedColumns = ['image', 'name', 'price', 'button-substract', 'count', 'button-add', 'total', 'delete'];

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.changeSomeData('Second data');
    this.ngZone.runOutsideAngular(() => {
      this.changeSomeData('Third data');
    })
  }
  
  changeSomeData(text) {
    setTimeout(() => {
      this.someData = text
    }, 5000);
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
