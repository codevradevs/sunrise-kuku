import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Clock
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Bulk Orders', path: '/bulk-orders' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const categories = [
  { name: 'Live Chicken', path: '/products?category=live-chicken' },
  { name: 'Fresh Eggs', path: '/products?category=eggs' },
  { name: 'Day-Old Chicks', path: '/products?category=chicks' },
  { name: 'Processed Chicken', path: '/products?category=processed' },
  { name: 'Poultry Feeds', path: '/products?category=feeds' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/images/logo.png"
                alt="Sunrise Kuku"
                className="h-14 w-14 object-contain rounded-full bg-white p-0.5 shadow-md"
              />
              <div>
                <h3 className="font-bold text-lg">Sunrise Kuku</h3>
                <p className="text-farm-light text-sm">Kenya</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your trusted source for premium quality poultry products in Kenya.
              Fresh from farm to table, delivered with care.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-farm-green transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-farm-green transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-farm-green transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-farm-green transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-farm-light transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-gray-400 hover:text-farm-light transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-farm-light flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Kiambu Road, Nairobi
                  <br />
                  Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-farm-light flex-shrink-0" />
                <a
                  href="tel:+254700000000"
                  className="text-gray-400 hover:text-farm-light transition-colors text-sm"
                >
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-farm-light flex-shrink-0" />
                <a
                  href="mailto:info@sunrisekuku.co.ke"
                  className="text-gray-400 hover:text-farm-light transition-colors text-sm"
                >
                  info@sunrisekuku.co.ke
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-farm-light flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Mon - Sat: 8AM - 6PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Sunrise Kuku Kenya. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-500 hover:text-farm-light transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-500 hover:text-farm-light transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
