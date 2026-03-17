import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Truck, Percent, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Percent,
    title: 'Bulk Discounts',
    description: 'Get up to 15% off on large orders',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Within Nairobi for orders over KSh 10,000',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Personal account manager',
  },
  {
    icon: Building2,
    title: 'Flexible Payment',
    description: 'M-Pesa, bank transfer, or credit terms',
  },
];

export default function BulkOrdersSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/delivery.jpg"
          alt="Delivery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-farm-green/95 via-farm-green/90 to-farm-green/70" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">
                For Hotels, Restaurants & Resellers
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bulk Orders Made <span className="text-farm-accent">Easy</span>
            </h2>

            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Running a restaurant, hotel, or poultry business? We supply fresh 
              chickens, eggs, and chicks in bulk with competitive pricing and 
              reliable delivery.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{benefit.title}</h4>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/bulk-orders">
              <Button
                size="lg"
                className="bg-white text-farm-green hover:bg-gray-100 px-8 py-6 text-lg rounded-xl group"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="glass bg-white/10 backdrop-blur-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-white/80">Minimum Order</span>
                  <span className="text-white font-semibold">50 Chickens</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-white/80">Bulk Discount</span>
                  <span className="text-farm-accent font-semibold">Up to 15%</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-white/80">Delivery Time</span>
                  <span className="text-white font-semibold">Same Day</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Payment Terms</span>
                  <span className="text-white font-semibold">Flexible</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/60 text-sm text-center">
                  Trusted by 50+ hotels and restaurants across Kenya
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
