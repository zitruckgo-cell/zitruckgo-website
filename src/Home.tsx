import { Button } from './components/ui/button';
import { Link } from 'wouter';
import { Truck, BookOpen, Zap, BarChart3, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/68682.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 md:flex-1">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Drive and deliver loads with confidence
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Zitruckgo connects professional truck drivers with logistics companies through a secure, technology-enabled marketplace. Access loads, training, and opportunities to grow your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/marketplace">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-semibold flex items-center gap-2">
                  Explore Marketplace
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-base font-semibold">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 hidden md:flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1601584942745-8b9d9b9d9d9d?w=500&h=400&fit=crop"
              alt="Professional truck driver"
              className="w-full max-w-md rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Zitruckgo?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building the future of trucking logistics with technology, safety, and professional growth at the core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Real-Time Matching',
                description: 'Get connected with loads instantly through our intelligent matching algorithm.',
              },
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Comprehensive defense driving training to keep you and others safe on the road.',
              },
              {
                icon: BarChart3,
                title: 'Earn More',
                description: 'Transparent pricing and direct access to high-paying loads to maximize your earnings.',
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200">
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-green-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Everything You Need to Succeed</h2>
              <div className="space-y-4">
                {[
                  'Access to thousands of verified loads',
                  'Professional driver training and certification',
                  'Real-time load tracking and updates',
                  'Transparent pricing and instant payments',
                  'Dedicated support team',
                  'Community of professional drivers'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 md:p-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Drivers</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Drivers</span>
                    <span className="text-2xl font-bold text-green-600">5,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Loads Completed</span>
                    <span className="text-2xl font-bold text-green-600">50,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Avg. Earnings</span>
                    <span className="text-2xl font-bold text-green-600">$5,000/mo</span>
                  </div>
                </div>
                <Link href="/marketplace">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                    Start Earning Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto">
            Join our community of professional drivers and start earning more today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-base font-semibold">
                Explore Loads
              </Button>
            </Link>
            <Link href="/training">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-green-700 px-8 py-3 text-base font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
