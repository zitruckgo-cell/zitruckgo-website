import { Button } from './components/ui/button';
import { Link } from 'wouter';
import { Truck, BookOpen, Zap, BarChart3, Shield, Users, ArrowRight, CheckCircle, Globe, Award, Headphones } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0fdf4] font-sans selection:bg-green-200 selection:text-green-900">
      <Navigation />
      
      {/* Hero Section - High-End Corporate Look */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-white border-b border-green-100">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" />
                <span>Trusted by 5,000+ Professional Drivers</span>
              </div>
              <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
                The Future of <span className="text-green-600">Trucking Logistics</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Zitruckgo is a premier technology-enabled marketplace connecting professional drivers with verified logistics opportunities. Experience the most secure, transparent, and efficient way to grow your trucking career.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link href="/marketplace">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-xl shadow-green-200 transition-all hover:-translate-y-1 flex items-center gap-2">
                    Explore Marketplace
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-10 py-4 text-lg font-bold rounded-xl transition-all">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-2xl">
              <div className="absolute -inset-4 bg-green-100/50 rounded-3xl blur-2xl z-0" />
              <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-green-50">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663812970586/vkjNWUbDXPmSOQqH.png"
                  alt="Zitruckgo Logistics Truck"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-green-50 hidden md:block z-20">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Top Rated Platform</p>
                    <p className="text-xl font-bold text-gray-900">98% Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white py-10 border-b border-green-50">
        <div className="container">
          <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">Empowering Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-gray-400">LOGISTICS+</span>
            <span className="text-2xl font-black text-gray-400">GLOBALTRUCK</span>
            <span className="text-2xl font-black text-gray-400">FREIGHTPRO</span>
            <span className="text-2xl font-black text-gray-400">TRANSITWAY</span>
          </div>
        </div>
      </div>

      {/* Features Section - Modern Grid */}
      <section className="py-24 md:py-32 bg-[#f0fdf4]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4">Core Capabilities</h2>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Designed for Professionals</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our platform provides the essential tools and network required to excel in the modern logistics landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Zap,
                title: 'Intelligent Matching',
                description: 'Our proprietary algorithm connects you with the most profitable loads based on your equipment and route preferences.',
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Every transaction and partner is verified to ensure the highest level of safety and reliability in the industry.',
              },
              {
                icon: BarChart3,
                title: 'Revenue Analytics',
                description: 'Comprehensive financial tools to track your earnings, expenses, and business growth in real-time.',
              }
            ].map((feature, i) => (
              <div key={i} className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-green-50 hover:-translate-y-2">
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Premium Dark Style */}
      <section className="py-24 md:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#16a34a 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-green-500 font-bold tracking-widest uppercase text-sm mb-4">Market Presence</h2>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">Scale Your Business With a Global Network</h2>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <p className="text-4xl md:text-5xl font-black text-white mb-2">5,000+</p>
                  <p className="text-gray-400 font-medium">Active Drivers</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black text-white mb-2">50k+</p>
                  <p className="text-gray-400 font-medium">Loads Delivered</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black text-white mb-2">$120M</p>
                  <p className="text-gray-400 font-medium">Driver Earnings</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black text-white mb-2">24/7</p>
                  <p className="text-gray-400 font-medium">Expert Support</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Platform Benefits</h3>
              <div className="space-y-6">
                {[
                  'Verified Premium Loads',
                  'Instant Payment Processing',
                  'Professional Certification Programs',
                  'Real-time Logistics Tracking',
                  'Dedicated Success Managers'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-green-500/20 p-1 rounded-full">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <span className="text-gray-300 text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/marketplace">
                <Button className="w-full mt-10 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-lg">
                  Join the Network
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Impactful */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="bg-green-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-green-200">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-green-700 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to Transform Your Logistics Business?</h2>
              <p className="text-xl text-green-50 mb-12 leading-relaxed">
                Join the most advanced logistics marketplace today. Start accessing high-quality loads and professional tools designed for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/marketplace">
                  <Button className="bg-white text-green-600 hover:bg-gray-100 px-12 py-5 text-xl font-black rounded-2xl transition-transform hover:scale-105">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-green-700 px-12 py-5 text-xl font-black rounded-2xl transition-transform hover:scale-105">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
