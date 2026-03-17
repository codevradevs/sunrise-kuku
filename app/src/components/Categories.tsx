import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Beef, 
  Egg, 
  Baby, 
  UtensilsCrossed, 
  Leaf, 
  Wheat 
} from 'lucide-react';

const categories = [
  {
    id: 'live-chicken',
    name: 'Live Chicken',
    description: 'Broilers, Kienyeji & Layers',
    icon: Beef,
    image: '/images/broiler-chicken.jpg',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'eggs',
    name: 'Fresh Eggs',
    description: 'Layer & Kienyeji Eggs',
    icon: Egg,
    image: '/images/layer-eggs.jpg',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'chicks',
    name: 'Day-Old Chicks',
    description: 'Broiler & Layer Chicks',
    icon: Baby,
    image: '/images/broiler-chicks.jpg',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 'processed',
    name: 'Processed Chicken',
    description: 'Dressed, Wings & Parts',
    icon: UtensilsCrossed,
    image: '/images/dressed-chicken.jpg',
    color: 'from-red-500 to-rose-600',
  },
  {
    id: 'manure',
    name: 'Poultry Manure',
    description: 'Organic Fertilizer',
    icon: Leaf,
    image: '/images/chicken-manure.jpg',
    color: 'from-amber-600 to-yellow-700',
  },
  {
    id: 'feeds',
    name: 'Poultry Feeds',
    description: 'Mash & Finisher Feeds',
    icon: Wheat,
    image: '/images/chick-mash.jpg',
    color: 'from-amber-500 to-orange-600',
  },
];

export default function Categories() {
  return (
    <section className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our wide range of poultry products, from live chickens to fresh eggs 
            and everything in between.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/products?category=${category.id}`}>
                <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
                  {/* Background Image */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <category.icon className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-center text-sm sm:text-base">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-xs text-center mt-1 hidden sm:block">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
