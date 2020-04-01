import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { ProductInCart, Product } from 'src/app/domain/Product';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private _productsInCart: ProductInCart[] = [];
  private _productsUpdated: ReplaySubject<ProductInCart[]>;

  constructor() {
    this._productsUpdated = new ReplaySubject<ProductInCart[]>(1);
  }

  addProductToCart(product: Product, productCount: number): void {
    if (this._productsInCart.length) {
      if (this._productsInCart.some(pr => pr.id === product.id)) {
        this._productsInCart.map(p => {
          if (p.id === product.id) {
            return p.quantityInCart += productCount;
          }
        })
      } else {
        this.createNewCartProduct(product, productCount);
      }
    } else {
      this.createNewCartProduct(product, productCount);
    }
    this._productsUpdated.next([...this._productsInCart]);
  }

  deleteProductFromCart(id: number): void {
    this._productsInCart = this._productsInCart.filter(product => product.id !== id);
    this._productsUpdated.next([...this._productsInCart]);
  }

  getCartProducts(): Observable<ProductInCart[]> {
    return this._productsUpdated.asObservable();
  }

  private createNewCartProduct(product: Product, productCount: number): void {
    let cartProduct: ProductInCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      availableQuantity: product.availableQuantity,
      quantityInCart: productCount,
      img: product.img,
    };
    this._productsInCart.push(cartProduct);
  }
}
