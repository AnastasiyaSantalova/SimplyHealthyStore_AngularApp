const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Fresh salad',
      price: 100,
      serving: '100g',
      availableQuantity: 10,
      description: '',
      img: 'fresh_salad.jpg',
    },
    {
      id: 2,
      name: 'Carrot sticks',
      price: 80,
      serving: '100g',
      availableQuantity: 19,
      description: '',
      img: 'carrot_sticks.jpg',
    },
    {
      id: 3,
      name: 'Celery juice',
      price: 130,
      serving: '500ml',
      availableQuantity: 20,
      description: '',
      img: 'celery_juice.jpg',
    },
    {
      id: 4,
      name: 'Freshburger',
      price: 200,
      serving: '250g',
      availableQuantity: 16,
      description: '',
      img: 'freshburger.jpg',
    },
    {
      id: 5,
      name: 'Tomato chips',
      price: 150,
      serving: '100g',
      availableQuantity: 9,
      description: '',
      img: 'tomato_chips.jpg',
    },
    {
      id: 6,
      name: 'Royal Apples',
      price: 300,
      serving: '1kg',
      availableQuantity: 29,
      description: '',
      img: 'royal_apples.jpg',
    },
    {
      id: 7,
      name: 'Nuts mix',
      price: 500,
      serving: '300g',
      availableQuantity: 23,
      description: '',
      img: 'nuts_mix.jpg',
    },
    {
      id: 8,
      name: 'Dried seaweed',
      price: 330,
      serving: '100g',
      availableQuantity: 11,
      description: '',
      img: 'dried_seaweed.jpg',
    },
    {
      id: 9,
      name: 'Golden mango',
      price: 450,
      serving: 'one',
      availableQuantity: 15,
      description: '',
      img: 'golden_mango.jpg',
    },
    {
      id: 10,
      name: 'Spring roll',
      price: 260,
      serving: '200g',
      availableQuantity: 7,
      description: '',
      img: 'spring_roll.jpg',
    },
  ];
  res.status(200).json(products);
});

module.exports = app;
