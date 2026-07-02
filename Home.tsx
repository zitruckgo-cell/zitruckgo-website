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
              Drive and deliver loads with confidence and earn more
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
