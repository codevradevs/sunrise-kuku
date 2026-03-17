const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['live-chicken', 'eggs', 'chicks', 'processed', 'manure', 'feeds']
  },
  description: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  image: {
    type: String,
    default: '/images/default-product.jpg'
  },
  weight: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  },
  bulkAvailable: {
    type: Boolean,
    default: false
  },
  bulkMinQuantity: {
    type: Number,
    default: 10
  },
  bulkDiscount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
