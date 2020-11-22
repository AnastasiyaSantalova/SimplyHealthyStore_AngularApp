import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { ProductInCart, Product } from 'src/app/domain/Product';

@Injectable({
  providedIn: 'root',
})

export class SharedService {
  private productsInCart: ProductInCart[] = [];
  private productsUpdated: ReplaySubject<ProductInCart[]>;

  constructor() {
    this.productsUpdated = new ReplaySubject<ProductInCart[]>(1);
  }

  addProductToCart(product: Product, productCount: number): void {
    if (this.productsInCart.length) {
      if (this.productsInCart.some(pr => pr.id === product.id)) {
        this.productsInCart.map(p => {
          if (p.id === product.id) {
            return p.quantityInCart += productCount;
          }
        });
      } else {
        this.createNewCartProduct(product, productCount);
      }
    } else {
      this.createNewCartProduct(product, productCount);
    }
    this.productsUpdated.next([...this.productsInCart]);
  }

  deleteProductFromCart(id: number): void {
    this.productsInCart = this.productsInCart.filter(product => product.id !== id);
    this.productsUpdated.next([...this.productsInCart]);
  }

  getCartProducts(): Observable<ProductInCart[]> {
    return this.productsUpdated.asObservable();
  }

  private createNewCartProduct(product: Product, productCount: number): void {
    const cartProduct: ProductInCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      availableQuantity: product.availableQuantity,
      quantityInCart: productCount,
      img: product.img,
    };
    this.productsInCart.push(cartProduct);
  }
}
