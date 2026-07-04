import { Button } from './components/ui/button';
import { Link } from 'wouter';
import { MapPin, DollarSign, Clock, TrendingUp, Zap, Shield } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Marketplace() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container">
          <h1 className="mb-6">Truck Logistics Marketplace</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Connect directly with shippers and logistics companies. Browse loads, negotiate rates, and grow your business in real-time.
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">How Our Marketplace Works</h2>
              <p className="text-muted-foreground mb-6">
                Zitruckgo connects truck drivers with logistics companies through an intelligent, transparent platform designed for efficiency and profitability.
              </p>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Browse Loads', desc: 'View available shipments with full details and pricing' },
                  { step: '2', title: 'Make an Offer', desc: 'Submit competitive bids or accept posted rates' },
                  { step: '3', title: 'Get Confirmed', desc: 'Receive instant confirmation and shipment details' },
                  { step: '4', title: 'Track & Earn', desc: 'Monitor your shipment and receive secure payment' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/manus-storage/marketplace-platform_ccb109f4.png"
                alt="Marketplace Platform"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Marketplace Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed to help you maximize earnings and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Real-Time Load Matching',
                description: 'Our AI algorithm matches you with loads that fit your route and schedule perfectly.',
              },
              {
                icon: DollarSign,
                title: 'Transparent Pricing',
                description: 'No hidden fees. See exactly what you will earn before accepting any load.',
              },
              {
                icon: MapPin,
                title: 'Advanced Tracking',
                description: 'GPS tracking, real-time updates, and proof of delivery documentation.',
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'Set your availability and choose loads that work with your schedule.',
              },
              {
                icon: TrendingUp,
                title: 'Performance Analytics',
                description: 'Track your earnings, completion rates, and customer ratings.',
              },
              {
                icon: Shield,
                title: 'Secure Payments',
                description: 'Fast, secure payment processing with multiple withdrawal options.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300">
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load Types */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Types of Loads Available</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Full Truckload (FTL)',
                description: 'Complete shipments dedicated to your truck. Typically higher margins and direct routes.',
              },
              {
                title: 'Less Than Truckload (LTL)',
                description: 'Partial loads that can be combined with other shipments for maximum efficiency.',
              },
              {
                title: 'Specialized Cargo',
                description: 'High-value shipments requiring certified drivers and specialized equipment.',
              },
              {
                title: 'Regional Routes',
                description: 'Shorter hauls perfect for drivers who prefer to stay closer to home.',
              },
              {
                title: 'Cross-Border Shipments',
                description: 'International loads connecting USA and Uganda with premium rates.',
              },
              {
                title: 'Expedited Delivery',
                description: 'Time-sensitive shipments with higher pay for faster service.',
              },
            ].map((loadType, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-3">{loadType.title}</h3>
                <p className="text-muted-foreground">{loadType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earning Potential */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-6">Maximize Your Earning Potential</h2>
            <p className="text-center text-muted-foreground mb-12">
              Our drivers earn competitive rates with transparent pricing and no hidden fees.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  metric: 'Average Rate',
                  value: '$2-4/mile',
                  desc: 'Competitive rates based on load type and distance',
                },
                {
                  metric: 'Payment Speed',
                  value: '24-48 hrs',
                  desc: 'Fast payment processing after delivery',
                },
                {
                  metric: 'Bonus Opportunities',
                  value: 'Up to 20%',
                  desc: 'Earn bonuses for on-time delivery and ratings',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-border text-center">
                  <p className="text-muted-foreground text-sm mb-2">{item.metric}</p>
                  <p className="text-3xl font-bold text-primary mb-2">{item.value}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Driver Requirements */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Driver Requirements</h2>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg border border-border">
            <div className="space-y-4">
              {[
                'Valid commercial driver license (CDL)',
                'Clean driving record',
                'Minimum 2 years driving experience',
                'Truck inspection certificate',
                'Insurance coverage',
                'Background check clearance',
                'Completion of Zitruckgo training program',
              ].map((req, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-foreground">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="container text-center">
          <h2 className="text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join our marketplace today and connect with loads that match your needs.
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-white/90 text-secondary px-8 py-6 text-base">
              Join the Marketplace
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
