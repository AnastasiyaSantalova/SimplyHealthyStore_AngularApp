export interface Product {
    id: number;
    name: string;
    price: number;
    serving: string;
    availableQuantity: number;
    img: string;
    quantityInCart: number;
    description?: string;
  }