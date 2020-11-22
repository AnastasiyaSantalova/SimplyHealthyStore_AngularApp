import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../mock-products';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/domain/Product';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {

  products: Product[] = [...PRODUCTS];

  constructor() { }

  ngOnInit(): void { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
