export interface Product {
  id: number;
  name: string;
  price: number;
  availableQuantity: number;
  description?: string;
  img: string;
  quantityInCart: number;
}

export const PRODUCTS: Array<Product> = [
  {
    id: 1,
    name: 'Fresh salad',
    price: 100,
    availableQuantity: 10,
    description: '',
    img: 'fresh_salad.jpg',
    quantityInCart: 0,
  },
  {
    id: 2,
    name: 'Carrot sticks',
    price: 80,
    availableQuantity: 19,
    description: '',
    img: 'carrot_sticks.jpg',
    quantityInCart: 0,
  },
  {
    id: 3,
    name: 'Celery juice',
    price: 130,
    availableQuantity: 20,
    description: '',
    img: 'celery_juice.jpg',
    quantityInCart: 0,
  },
  {
    id: 4,
    name: 'Freshburger',
    price: 200,
    availableQuantity: 16,
    description: '',
    img: 'freshburger.jpg',
    quantityInCart: 0,
  },
  {
    id: 5,
    name: 'Tomato chips',
    price: 150,
    availableQuantity: 9,
    description: '',
    img: 'tomato_chips.jpg',
    quantityInCart: 0,
  },
  {
    id: 6,
    name: 'Royal Apples',
    price: 300,
    availableQuantity: 29,
    description: '',
    img: 'royal_apples.jpg',
    quantityInCart: 0,
  },
  {
    id: 7,
    name: 'Nuts mix',
    price: 500,
    availableQuantity: 23,
    description: '',
    img: 'nuts_mix.jpg',
    quantityInCart: 0,
  },
  {
    id: 8,
    name: 'Dried seaweed',
    price: 330,
    availableQuantity: 11,
    description: '',
    img: 'dried_seaweed.jpg',
    quantityInCart: 0,
  },
  {
    id: 9,
    name: 'Golden mango',
    price: 450,
    availableQuantity: 15,
    description: '',
    img: 'golden_mango.jpg',
    quantityInCart: 0,
  },
  {
    id: 10,
    name: 'Spring roll',
    price: 260,
    availableQuantity: 7,
    description: '',
    img: 'spring_roll.jpg',
    quantityInCart: 0,
  },
];

export const CARTPRODUCTS: Array<Product> = [];
