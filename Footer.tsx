import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
            <img
              src="/manus-storage/68682_7bb83086.jpg"
              alt="Zitruckgo"
              className="h-8 w-8 rounded-full"
            />
              <h3 className="font-bold text-lg">Zitruckgo</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting truck drivers and logistics companies through a professional, technology-enabled marketplace.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/training">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Training
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/marketplace">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Marketplace
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">+19784170522</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <a href="mailto:info@zitruckgo.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@zitruckgo.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">Logistics Headquarters</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Zitruckgo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Facebook
            </a>
            <a href="https://youtube.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              YouTube
            </a>
            <a href="https://wa.me/19784170522" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              WhatsApp
            </a>
            <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
