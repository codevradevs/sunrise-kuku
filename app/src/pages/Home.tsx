import Hero from '@/components/Hero';
import PromoMarquee from '@/components/PromoMarquee';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import Stats from '@/components/Stats';
import WhyPartners from '@/components/WhyPartners';
import BulkOrdersSection from '@/components/BulkOrdersSection';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PromoMarquee />
      <Categories />
      <FeaturedProducts />
      <Stats />
      <WhyPartners />
      <BulkOrdersSection />
      <Testimonials />
    </main>
  );
}
