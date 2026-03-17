import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const cards = [
  {
    title: 'Traceable Supply Chains',
    description:
      'Follow every flock from hatchery to doorstep with blockchain-backed certificates and live health records.',
    image: '/images/broiler-chicken.jpg',
    perks: ['Digital health passports', 'QA snapshots at every hub', 'Transparent farm audits'],
  },
  {
    title: 'Intelligent Fulfillment',
    description:
      'AI-assisted route planning and demand forecasting keep inventory lean while guaranteeing freshness.',
    image: '/images/delivery.jpg',
    perks: ['Same-day dispatch windows', 'Cold-chain routing', 'Real-time tracking links'],
  },
  {
    title: 'Wholesale Meets Retail',
    description:
      'Dynamic pricing and curated storefronts let chefs, households, and resellers shop their way.',
    image: '/images/dressed-chicken.jpg',
    perks: ['Bulk & bundle deals', 'Smart substitutions', 'Flexible payment terms'],
  },
];

const slideVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function WhyPartners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0a1a0f] via-[#0f2d18] to-[#0a1a0f]">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-farm-green/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-farm-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-farm-light text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-farm-light rounded-full animate-pulse" />
            Why Partners Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Why partners choose{' '}
            <span className="text-farm-light">Sunrise Kuku</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to succeed in poultry. Tools designed to boost quality, protect
            margins, and grow your business.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={slideVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.03, y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group relative rounded-3xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl cursor-default"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Floating label */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">
                    Sunrise Kuku
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{card.description}</p>

                <ul className="space-y-2">
                  {card.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-white/80 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-farm-light shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover glow border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-farm-light/0 group-hover:border-farm-light/30 transition-all duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
