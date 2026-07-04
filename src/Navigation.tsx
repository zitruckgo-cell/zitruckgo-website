import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Training', href: '/training' },
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-green-50 shadow-lg'
          : 'bg-green-50/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <img
              src="/manus-storage/zitruckgo-logo-transparent_481297ec.png"
              alt="Zitruckgo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg md:text-xl font-bold text-green-600 hidden sm:inline">
              Zitruckgo
            </span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col items-start gap-2 absolute top-full left-0 right-0 bg-green-50 border-b border-green-200 p-4 shadow-lg">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-sm lg:text-base font-medium text-gray-700 hover:text-green-600 transition-colors py-2 px-4 w-full hover:bg-green-100 rounded">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm lg:text-base"
        >
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-green-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-50 border-t border-green-200 shadow-lg">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors py-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
