import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);

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
    { 
      label: 'Marketplace', 
      href: '#',
      isDropdown: true,
      subItems: [
        { label: 'Browse Marketplace', href: '/marketplace' },
        { label: 'Zhuri Transcare', href: 'https://zhuritranscare.zitruckgo.com', external: true },
      ]
    },
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

        {/* Desktop Menu - Horizontal and Stable */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            item.isDropdown ? (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => setIsMarketplaceOpen(true)}
                onMouseLeave={() => setIsMarketplaceOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm lg:text-base font-medium text-gray-700 hover:text-green-600 transition-colors py-2">
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMarketplaceOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMarketplaceOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-green-100 shadow-xl rounded-xl py-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.subItems?.map((subItem) => (
                      subItem.external ? (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link key={subItem.href} href={subItem.href}>
                          <a className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                            {subItem.label}
                          </a>
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                <a className="text-sm lg:text-base font-medium text-gray-700 hover:text-green-600 transition-colors">
                  {item.label}
                </a>
              </Link>
            )
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
        <div className="md:hidden bg-green-50 border-t border-green-200 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              item.isDropdown ? (
                <div key={item.label} className="flex flex-col gap-2">
                  <div className="text-sm font-semibold text-green-600 px-2 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="pl-4 flex flex-col gap-2 border-l-2 border-green-100 ml-2">
                    {item.subItems?.map((subItem) => (
                      subItem.external ? (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-medium text-gray-700 hover:text-green-600 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link key={subItem.href} href={subItem.href}>
                          <a 
                            className="text-base font-medium text-gray-700 hover:text-green-600 py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </a>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href}>
                  <a
                    className="text-base font-medium text-gray-700 hover:text-green-600 px-2 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              )
            ))}
            <Button className="mt-2 bg-green-600 hover:bg-green-700 text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
