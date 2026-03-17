import Marquee from 'react-fast-marquee';
import { Truck, Percent, Clock, Shield, Star } from 'lucide-react';

const promos = [
  { icon: Truck, text: 'Free Delivery Within Nairobi' },
  { icon: Percent, text: 'Bulk Orders Get 10% Off' },
  { icon: Clock, text: 'Same Day Delivery Available' },
  { icon: Shield, text: '100% Quality Guaranteed' },
  { icon: Star, text: 'Fresh From Farm Daily' },
];

export default function PromoMarquee() {
  return (
    <div className="bg-farm-green dark:bg-farm-green/90 py-3 overflow-hidden">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {promos.map((promo, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-8 text-white"
          >
            <promo.icon className="w-4 h-4" />
            <span className="text-sm font-medium whitespace-nowrap">{promo.text}</span>
            <span className="text-white/40 mx-4">|</span>
          </div>
        ))}
        {promos.map((promo, index) => (
          <div
            key={`dup-${index}`}
            className="flex items-center gap-2 mx-8 text-white"
          >
            <promo.icon className="w-4 h-4" />
            <span className="text-sm font-medium whitespace-nowrap">{promo.text}</span>
            <span className="text-white/40 mx-4">|</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
