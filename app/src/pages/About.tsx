import { motion } from 'framer-motion';
import { Heart, Shield, Leaf, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Quality First',
    description: 'We never compromise on the health and quality of our poultry products.',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'Open about our farming practices and product sourcing.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Farming',
    description: 'Environmentally conscious practices for a better tomorrow.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Supporting local farmers and creating jobs in Kenya.',
  },
];

const milestones = [
  { year: '2014', event: 'Farm established in Kiambu' },
  { year: '2016', event: 'Expanded to 5,000 bird capacity' },
  { year: '2018', event: 'Started egg production' },
  { year: '2020', event: 'Launched home delivery service' },
  { year: '2022', event: 'Began day-old chick sales' },
  { year: '2024', event: 'Serving 300+ customers monthly' },
];

export default function About() {
  return (
    <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-farm.jpg"
            alt="Our Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/80">
              From a small family farm to one of Kenya's trusted poultry suppliers, 
              our journey has been driven by a passion for quality and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide Kenyan families and businesses with the freshest, highest-quality 
                poultry products while supporting sustainable farming practices and empowering 
                local communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To become Kenya's most trusted poultry brand, known for quality, reliability, 
                and innovation in farm-to-table fresh produce delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do, from how we raise our chickens 
              to how we treat our customers.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-farm-green/10 dark:bg-farm-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-farm-green" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Milestones that mark our growth and commitment to excellence.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="w-20 text-right">
                  <span className="text-2xl font-bold text-farm-green">
                    {milestone.year}
                  </span>
                </div>
                <div className="w-4 h-4 bg-farm-green rounded-full flex-shrink-0" />
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <p className="text-gray-700 dark:text-gray-300">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Farm Images */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Life on the Farm
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Glimpses of our daily operations and the people behind our success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="/images/about-farmer.jpg"
                alt="Our Farmer"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="/images/hero-farm.jpg"
                alt="Our Farm"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="/images/about-family.jpg"
                alt="Happy Customers"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Quality Assurance
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                'KEPHIS Certified',
                'Veterinary Approved',
                'HACCP Compliant',
                'Quality Guaranteed',
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Award className="w-5 h-5 text-farm-green" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
