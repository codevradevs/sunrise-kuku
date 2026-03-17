import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

import 'swiper/swiper-bundle.css';

const testimonials = [
  {
    name: 'John Kamau',
    role: 'Restaurant Owner',
    location: 'Nairobi',
    image: '/images/about-farmer.jpg',
    content: 'Sunrise Kuku Kenya has been our trusted supplier for over 2 years. Their chickens are always fresh and the delivery is reliable. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mary Wanjiku',
    role: 'Hotel Manager',
    location: 'Kiambu',
    image: '/images/about-family.jpg',
    content: 'The quality of their eggs is exceptional. Our customers always compliment the freshness. The bulk ordering system is very convenient.',
    rating: 5,
  },
  {
    name: 'Peter Ochieng',
    role: 'Poultry Farmer',
    location: 'Kisumu',
    image: '/images/hero-farm.jpg',
    content: 'I buy day-old chicks from them regularly. The vaccination program is thorough and the chicks have excellent survival rates. Great service!',
    rating: 5,
  },
  {
    name: 'Grace Muthoni',
    role: 'Catering Business',
    location: 'Nakuru',
    image: '/images/delivery.jpg',
    content: 'Their processed chicken cuts are perfect for my catering business. Clean, well-packaged, and always on time. A reliable partner!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our products and services.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg h-full">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-farm-green/10 dark:bg-farm-green/20 rounded-full flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-farm-green" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-4">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
