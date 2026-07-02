import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Truck, BookOpen, Zap, BarChart3, Shield, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/manus-storage/hero-green-trucks_866954d8.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
        </div>

        <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-white mb-6 leading-tight">
              Drive with Confidence, Earn More
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Zitruckgo connects professional truck drivers with logistics companies through a secure, technology-enabled marketplace. Access loads, training, and opportunities to grow your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/marketplace">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-base">
                  Explore Marketplace
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-base">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Zitruckgo?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                title: 'Maximize Earnings',
                description: 'Transparent pricing and direct connections mean more money in your pocket.',
              },
              {
                icon: Truck,
                title: 'Fleet Management',
                description: 'Tools to manage your operations efficiently and track performance metrics.',
              },
              {
                icon: BookOpen,
                title: 'Continuous Learning',
                description: 'Access training resources and industry insights to grow your skills.',
              },
              {
                icon: Users,
                title: 'Community Support',
                description: 'Join a network of professional drivers and logistics partners.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg border border-border hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="mb-6">Professional Truck Defense Training</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive defense driving training program is designed to equip truck drivers with advanced safety techniques and hazard perception skills.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Advanced defensive driving techniques',
                  'Hazard perception and response',
                  'Weather and road condition management',
                  'Certified instructors with industry experience',
                  'Flexible online and in-person options',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/training">
                <Button className="bg-primary hover:bg-primary/90">
                  Learn More About Training
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/manus-storage/truck-defense-training_a44ac89e.png"
                alt="Training Facility"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Marketplace Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="/manus-storage/marketplace-platform_ccb109f4.png"
                alt="Marketplace Platform"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-6">Truck Logistics Marketplace</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our digital marketplace connects truck drivers with logistics companies, simplifying the process of finding and booking loads.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Browse available loads in real-time',
                  'Transparent pricing and terms',
                  'Secure payment processing',
                  'Track shipments end-to-end',
                  'Direct communication with shippers',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/marketplace">
                <Button className="bg-primary hover:bg-primary/90">
                  Explore the Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Drivers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real success stories from professional truck drivers using Zitruckgo to grow their business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marcus Johnson',
                role: 'Owner-Operator, Texas',
                quote: 'Zitruckgo has transformed how I find loads. I am earning 30% more than I did before, and the training program helped me become a safer driver. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Amara Okafor',
                role: 'Fleet Driver, Uganda',
                quote: 'The marketplace is transparent and fair. I appreciate the real-time tracking and quick payments. Zitruckgo treats drivers with respect and professionalism.',
                rating: 5,
              },
              {
                name: 'David Chen',
                role: 'Independent Contractor, California',
                quote: 'The defense driving training was excellent. I learned practical skills that have already prevented accidents. The support team is responsive and helpful.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professional truck drivers and logistics companies using Zitruckgo to grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-base">
                Start Your Journey
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-base"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
