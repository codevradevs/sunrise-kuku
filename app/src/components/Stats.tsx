import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { TrendingUp, Users, ShoppingBag, Award } from 'lucide-react';

const stats = [
  {
    icon: ShoppingBag,
    value: 5000,
    suffix: '+',
    label: 'Chickens Sold',
    description: 'And counting daily',
  },
  {
    icon: TrendingUp,
    value: 1200,
    suffix: '+',
    label: 'Egg Trays Weekly',
    description: 'Fresh from our farms',
  },
  {
    icon: Users,
    value: 300,
    suffix: '+',
    label: 'Happy Customers',
    description: 'Trust our quality',
  },
  {
    icon: Award,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'In poultry farming',
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="glass dark:glass-dark p-6 sm:p-8 rounded-2xl text-center card-hover">
        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-4 bg-farm-green/10 dark:bg-farm-green/20 rounded-xl flex items-center justify-center group-hover:bg-farm-green group-hover:text-white transition-colors">
          <stat.icon className="w-7 h-7 text-farm-green group-hover:text-white transition-colors" />
        </div>

        {/* Value */}
        <div className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          {hasAnimated ? (
            <CountUp
              end={stat.value}
              duration={3}
              separator=","
              suffix={stat.suffix}
            />
          ) : (
            <span>0{stat.suffix}</span>
          )}
        </div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
          {stat.label}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-gradient">Impact</span> in Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by hundreds of customers across Kenya, we are committed to 
            delivering quality poultry products every day.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
