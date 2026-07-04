import { Button } from './components/ui/button';
import { Link } from 'wouter';
import { Globe, Target, Users, Zap } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <h1 className="mb-6">About Zitruckgo</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            We're revolutionizing the truck logistics industry by connecting professional drivers with opportunities, training, and technology that empowers them to succeed.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Target className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="mb-4">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To empower truck drivers and logistics companies with a transparent, technology-enabled platform that simplifies operations, increases earnings, and prioritizes safety.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-6">
                <Globe className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="mb-4">Our Vision</h2>
                  <p className="text-muted-foreground">
                    To become the most trusted logistics marketplace in Africa and North America, where drivers thrive, companies grow, and technology serves the people who keep commerce moving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Zitruckgo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'People First',
                description: 'We prioritize the needs and success of our drivers and partners above all.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'We continuously improve our platform with cutting-edge technology.',
              },
              {
                icon: Target,
                title: 'Transparency',
                description: 'We believe in honest communication and clear terms.',
              },
              {
                icon: Globe,
                title: 'Global Impact',
                description: 'We are committed to creating opportunities and growth across continents.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border text-center">
                <value.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="mb-6">Why We Started Zitruckgo</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                The truck logistics industry has been fragmented for decades. Drivers spend hours searching for loads, negotiating rates, and managing payments. Logistics companies struggle to find reliable drivers and manage their fleets efficiently. There had to be a better way.
              </p>
              <p>
                We founded Zitruckgo to bridge this gap. By combining a powerful digital marketplace with professional training and support, we're creating an ecosystem where drivers earn more, companies operate more efficiently, and safety is never compromised.
              </p>
              <p>
                Our platform leverages real-time data, transparent pricing, and direct communication to eliminate intermediaries and build trust. Whether you're a driver looking for your next load or a logistics company seeking reliable partners, Zitruckgo is your solution.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container text-center">
          <h2 className="text-white mb-6">Join the Zitruckgo Community</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a driver or a logistics company, we're here to support your success.
          </p>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-base">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
