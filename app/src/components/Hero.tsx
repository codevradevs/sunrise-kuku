import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Dimmed background image ── */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-farm.jpg"
          alt=""
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* ── Ambient blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-farm-green/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-farm-accent/20 rounded-full blur-3xl"
        />
      </div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: content ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Fresh from Kenyan Farms</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Fresh Farm{' '}
              <span className="text-farm-light">Chicken</span>
              <br />
              Delivered Daily
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/75 mb-8 max-w-lg"
            >
              Premium quality poultry products from trusted Kenyan farmers.
              From live chickens to fresh eggs, we deliver freshness to your doorstep.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-farm-green hover:bg-farm-light text-white px-8 py-6 text-lg rounded-xl group"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm bg-white/10"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                </Button>
              </a>
            </motion.div>

            {/* Trust Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.18)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex-1 min-w-[200px] cursor-default"
              >
                <motion.span
                  animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                  className="text-2xl mt-0.5 inline-block"
                >❄️</motion.span>
                <div>
                  <p className="text-white font-semibold text-sm">Cold-chain Dispatch</p>
                  <p className="text-white/60 text-xs mt-0.5">Guaranteed freshness with monitored temperature routes.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.18)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex-1 min-w-[200px] cursor-default"
              >
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2 }}
                  className="text-2xl mt-0.5 inline-block"
                >🩺</motion.span>
                <div>
                  <p className="text-white font-semibold text-sm">Veterinary Certified</p>
                  <p className="text-white/60 text-xs mt-0.5">Audited farms and real-time health documentation.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '5000+', label: 'Chickens Sold' },
                  { value: '1200+', label: 'Egg Trays Weekly' },
                  { value: '300+',  label: 'Happy Customers' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl sm:text-4xl font-bold text-white">{s.value}</p>
                    <p className="text-white/60 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: product collage ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:block"
          >
            {/* Grid: col 1 = tall card, col 2 = 2 stacked, col 3 = 2 stacked */}
            <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[520px]">

              {/* Tall left card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="row-span-2 relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
              >
                <img src="/images/broiler-chicken.jpg" alt="Live Chicken" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  Live Chicken
                </span>
              </motion.div>

              {/* Top-middle */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative rounded-3xl overflow-hidden border border-white/15 shadow-xl"
              >
                <img src="/images/layer-eggs.jpg" alt="Fresh Eggs" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  Fresh Eggs
                </span>
              </motion.div>

              {/* Top-right */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative rounded-3xl overflow-hidden border border-white/15 shadow-xl"
              >
                <img src="/images/dressed-chicken.jpg" alt="Processed" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  Processed
                </span>
              </motion.div>

              {/* Bottom-middle */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative rounded-3xl overflow-hidden border border-white/15 shadow-xl"
              >
                <img src="/images/kienyeji-chicks.jpg" alt="Day-old Chicks" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  Day-old Chicks
                </span>
              </motion.div>

              {/* Bottom-right */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative rounded-3xl overflow-hidden border border-white/15 shadow-xl"
              >
                <img src="/images/chicken-breast.jpg" alt="Chicken Cuts" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  Chicken Cuts
                </span>
              </motion.div>
            </div>

            {/* Caption below collage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-center text-white/40 text-sm mt-4 tracking-wide"
            >
              Live birds · Eggs · Chicks · Processed cuts · Feeds & Manure
            </motion.p>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
