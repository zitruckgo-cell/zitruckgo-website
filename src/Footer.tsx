import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Youtube, MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/">
              <a className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
                <img
                  src="/manus-storage/zitruckgo-logo-transparent_481297ec.png"
                  alt="Zitruckgo"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-xl font-bold text-green-400">Zitruckgo</span>
              </a>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Connecting professional truck drivers with logistics companies through a secure, technology-enabled marketplace.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/19784170522" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/training">
                  <a className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    Training
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    Support
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+19784170522" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +1 (978) 417-0522
              </a>
              <a href="mailto:zitruckgo@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                zitruckgo@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zitruckgo. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
