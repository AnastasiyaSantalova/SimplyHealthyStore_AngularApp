export interface Product {
  id: number;
  name: string;
  price: number;
  serving: string;
  availableQuantity: number;
  img: string;
  description?: string;
}

export interface ProductInCart {
  id: number;
  name: string;
  price: number;
  availableQuantity: number;
  quantityInCart: number;
  img: string;
}
