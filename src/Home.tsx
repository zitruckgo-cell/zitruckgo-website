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
            backgroundImage: 'url(/68682.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Drive and deliver loads with confidence and earn more
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Zitruckgo connects professional truck drivers with logistics companies through a secure, technology-enabled marketplace. Access loads, training, and opportunities to grow your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/marketplace">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Zitruckgo?</h2>
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
                title: 'Earn More',
                description: 'Transparent pricing and direct access to high-paying loads to maximize your earnings.',
              }
            ].map((feature, i) => (
              <div key={i} className="bg-background p-8 rounded-xl shadow-sm border border-border">
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
