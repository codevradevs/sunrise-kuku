import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Package,
  Send,
  CheckCircle,
  Truck,
  Percent,
  Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const benefits = [
  {
    icon: Percent,
    title: 'Bulk Discounts',
    description: 'Save up to 15% on large orders',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Within Nairobi for orders over KSh 10,000',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Personal account manager assigned',
  },
  {
    icon: Package,
    title: 'Flexible Terms',
    description: 'Credit options for regular customers',
  },
];

export default function BulkOrders() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    location: '',
    productType: '',
    quantity: '',
    frequency: 'one-time',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.businessName || !formData.contactName || !formData.phone || !formData.productType) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    const message = `*Bulk Order Request*\n\nBusiness Name: ${formData.businessName}\nContact Name: ${formData.contactName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nLocation: ${formData.location}\n\nProduct Type: ${formData.productType}\nQuantity Needed: ${formData.quantity}\nOrder Frequency: ${formData.frequency}\n\nMessage:\n${formData.message}`;

    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast.success('Quote request sent! We will contact you shortly.');
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-farm-green py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">
                For Businesses & Resellers
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bulk Orders & Wholesale
            </h1>
            <p className="text-white/80 text-lg">
              Running a restaurant, hotel, or poultry business? Get competitive pricing, 
              reliable delivery, and dedicated support for your bulk poultry needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-farm-green/10 dark:bg-farm-green/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-farm-green" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Request a Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Business Name *
                  </label>
                  <Input
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Contact Person *
                  </label>
                  <Input
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Full name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@business.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Delivery Location
                  </label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Nairobi, Kenya"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Product Type *
                    </label>
                    <select
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select product</option>
                      <option value="Live Broiler Chicken">Live Broiler Chicken</option>
                      <option value="Kienyeji Chicken">Kienyeji Chicken</option>
                      <option value="Layer Eggs">Layer Eggs</option>
                      <option value="Kienyeji Eggs">Kienyeji Eggs</option>
                      <option value="Day-Old Chicks">Day-Old Chicks</option>
                      <option value="Dressed Chicken">Dressed Chicken</option>
                      <option value="Chicken Parts">Chicken Parts</option>
                      <option value="Poultry Feeds">Poultry Feeds</option>
                      <option value="Multiple Products">Multiple Products</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Quantity Needed
                    </label>
                    <Input
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g., 100 chickens"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Order Frequency
                  </label>
                  <select
                    value={formData.frequency}
                    onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="one-time">One-time Order</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Additional Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Request Quote via WhatsApp
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-farm-green/5 dark:bg-farm-green/10 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Premium quality poultry products',
                    'Competitive wholesale pricing',
                    'Reliable same-day delivery',
                    'Flexible payment options',
                    'Dedicated account manager',
                    'Consistent supply guarantee',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-farm-green flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Us Directly
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+254700000000"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-farm-green"
                  >
                    <Phone className="w-5 h-5" />
                    +254 700 000 000
                  </a>
                  <a
                    href="mailto:bulk@poultrymarket.co.ke"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-farm-green"
                  >
                    <Mail className="w-5 h-5" />
                    bulk@poultrymarket.co.ke
                  </a>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <MapPin className="w-5 h-5" />
                    Kiambu Road, Nairobi
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-farm-green to-farm-light rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-2">
                  Minimum Order Quantity
                </h3>
                <ul className="space-y-2 text-white/90">
                  <li>Live Chicken: 50 birds</li>
                  <li>Eggs: 10 trays</li>
                  <li>Chicks: 100 pieces</li>
                  <li>Processed: 20 kg</li>
                  <li>Feeds: 5 bags</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
