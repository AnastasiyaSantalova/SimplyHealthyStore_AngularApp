/* eslint-disable id-blacklist */
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  // id: { type: Number, required: true }, it'll be generated automatically
  name: { type: String, required: true },
  price: { type: Number, required: true },
  serving: { type: String, required: true },
  availableQuantity: { type: Number, required: true },
  img: { type: String, required: true },
  description: { type: String, required: false },
});

mongoose.model('Product', productSchema);
