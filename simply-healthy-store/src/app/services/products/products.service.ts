import { Injectable } from '@angular/core';
import { PRODUCTS, CARTPRODUCTS } from '../../mock-products';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/domain/Product';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {

  products = [...PRODUCTS];
  cartProducts = [...CARTPRODUCTS];

  constructor() { }

  ngOnInit() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getCartProducts(): Observable<Product[]> {
    return of(this.cartProducts);
  }

  pushProductToCart(product: Product): Observable<Product[]> {
    let ifContains = false;

    this.cartProducts.forEach(cartProduct => {
      if (cartProduct.id === product.id) {
        return ifContains = true;
      }
    });

    if (!ifContains) {
      this.cartProducts = [...this.cartProducts, product];
      return;
    }
  }

  deleteProductFromCart(id): Observable<Product[]> {
    this.products = this.products.map(product => {
      if (product.id === id) {
        product.availableQuantity += product.quantityInCart;
        product.quantityInCart = 0;
      }
      return product;
    });
    this.cartProducts = this.cartProducts.filter(product => product.id !== id);

    return of(this.cartProducts);
  }
}
