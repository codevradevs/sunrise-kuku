import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingCart, Plus, Minus } from 'lucide-react';
import type { Product } from '@/types';
import { api } from '@/services/api';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const categories = [
  { id: '', name: 'All Products' },
  { id: 'live-chicken', name: 'Live Chicken' },
  { id: 'eggs', name: 'Fresh Eggs' },
  { id: 'chicks', name: 'Day-Old Chicks' },
  { id: 'processed', name: 'Processed Chicken' },
  { id: 'manure', name: 'Poultry Manure' },
  { id: 'feeds', name: 'Poultry Feeds' },
];

const categoryImages: Record<string, string> = {
  'live-chicken': '/images/broiler-chicken.jpg',
  'eggs': '/images/layer-eggs.jpg',
  'chicks': '/images/broiler-chicks.jpg',
  'processed': '/images/dressed-chicken.jpg',
  'manure': '/images/chicken-manure.jpg',
  'feeds': '/images/chick-mash.jpg',
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const { addToCart, items, updateQuantity } = useCart();

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await api.getProducts(selectedCategory || undefined);
      setProducts(data);
    } catch (error) {
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCartQuantity = (productId: string) => {
    const cartItem = items.find(item => item._id === productId);
    return cartItem?.quantity || 0;
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    const currentQty = getCartQuantity(productId);
    const newQty = currentQty + delta;
    if (newQty <= 0) {
      return;
    }
    updateQuantity(productId, newQty);
  };

  return (
    <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-farm-green py-12">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Browse our complete collection of premium poultry products, 
              fresh from Kenyan farms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-16 z-30 bg-white dark:bg-gray-800 shadow-sm">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              <Filter className="w-5 h-5 text-gray-500 flex-shrink-0 mt-2" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-farm-green text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image || categoryImages[product.category]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.stock < 10 && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          Low Stock
                        </span>
                      </div>
                    )}
                    {product.bulkAvailable && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-farm-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                          Bulk Available
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="text-xs text-farm-green dark:text-farm-light font-medium mb-1 uppercase tracking-wide">
                      {categories.find(c => c.id === product.category)?.name}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-farm-green dark:text-farm-light">
                          KSh {product.price.toLocaleString()}
                        </span>
                        {product.weight && (
                          <span className="text-gray-400 text-sm ml-2">/ {product.weight}</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">
                        Stock: {product.stock}
                      </span>
                    </div>

                    {/* Add to Cart */}
                    {getCartQuantity(product._id) > 0 ? (
                      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-xl p-2">
                        <button
                          onClick={() => handleUpdateQuantity(product._id, -1)}
                          className="w-10 h-10 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-lg">
                          {getCartQuantity(product._id)}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(product._id, 1)}
                          className="w-10 h-10 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-farm-green hover:bg-farm-light text-white"
                        disabled={product.stock === 0}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
