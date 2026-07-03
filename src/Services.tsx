import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Headphones, BookOpen, BarChart3, Wrench, Users, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container">
          <h1 className="mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive solutions designed to support your success as a truck driver or logistics company.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Service 1 */}
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <Headphones className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="mb-4">24/7 Customer Support</h2>
                  <p className="text-muted-foreground mb-6">
                    Our dedicated support team is available around the clock to help you with any questions or issues. Get assistance via phone, email, or chat.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multilingual support staff</li>
                    <li>• Average response time under 5 minutes</li>
                    <li>• Technical and operational assistance</li>
                    <li>• Dispute resolution services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="mb-4">Training & Development</h2>
                  <p className="text-muted-foreground mb-6">
                    Beyond defense driving training, we offer continuous learning resources to help you advance your career and stay updated on industry best practices.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Online learning modules</li>
                    <li>• Industry certification programs</li>
                    <li>• Webinars and workshops</li>
                    <li>• Career advancement coaching</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <BarChart3 className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="mb-4">Analytics & Reporting</h2>
                  <p className="text-muted-foreground mb-6">
                    Gain insights into your performance with detailed analytics, earnings reports, and performance metrics to help you make data-driven decisions.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Real-time earnings tracking</li>
                    <li>• Performance dashboards</li>
                    <li>• Historical data analysis</li>
                    <li>• Custom report generation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <Wrench className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="mb-4">Fleet Management Tools</h2>
                  <p className="text-muted-foreground mb-6">
                    Manage your fleet efficiently with our integrated tools for maintenance tracking, fuel management, and vehicle compliance.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Maintenance scheduling</li>
                    <li>• Fuel cost tracking</li>
                    <li>• Vehicle compliance monitoring</li>
                    <li>• Driver management system</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="mb-4">Community & Networking</h2>
                  <p className="text-muted-foreground mb-6">
                    Connect with other drivers and logistics professionals, share experiences, and build relationships within the Zitruckgo community.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Driver forums and discussion groups</li>
                    <li>• Networking events</li>
                    <li>• Peer mentoring program</li>
                    <li>• Industry news and updates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <Zap className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="mb-4">API Integration</h2>
                  <p className="text-muted-foreground mb-6">
                    For logistics companies, we offer robust API integration to connect Zitruckgo with your existing systems and workflows.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• RESTful API access</li>
                    <li>• Real-time data synchronization</li>
                    <li>• Custom integration support</li>
                    <li>• Webhook notifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <h2 className="text-center mb-16">Service Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: 'Free',
                description: 'Perfect for getting started',
                features: [
                  'Access to marketplace',
                  'Basic load matching',
                  'Email support',
                  'Standard analytics',
                  'Mobile app access',
                ],
              },
              {
                name: 'Professional',
                price: '$29/mo',
                description: 'For active drivers',
                features: [
                  'All Basic features',
                  'Priority load matching',
                  '24/7 phone support',
                  'Advanced analytics',
                  'Fleet management tools',
                  'Training resources',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For logistics companies',
                features: [
                  'Custom API integration',
                  'Dedicated account manager',
                  'White-label options',
                  'Custom reporting',
                  'Priority support',
                  'Training for your team',
                ],
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-lg border p-8 transition-all ${
                  pkg.highlighted
                    ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary shadow-lg'
                    : 'bg-white border-border'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-primary mb-2">{pkg.price}</p>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={
                    pkg.highlighted
                      ? 'w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                      : 'w-full'
                  }
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Frequently Asked Questions</h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: 'How do I get started with Zitruckgo?',
                a: 'Simply sign up on our platform, complete the verification process, and you will have access to our marketplace. New drivers must complete our training program before accepting loads.',
              },
              {
                q: 'What are the payment terms?',
                a: 'We process payments within 24-48 hours of delivery confirmation. You can withdraw funds to your bank account or use our instant withdrawal option.',
              },
              {
                q: 'Is there a commission fee?',
                a: 'Zitruckgo charges a small platform fee of 5-8% depending on your service package. There are no hidden fees - all costs are transparent upfront.',
              },
              {
                q: 'What if I have a dispute with a shipper?',
                a: 'Our dispute resolution team will investigate and mediate any issues. We are committed to fair outcomes for all parties.',
              },
              {
                q: 'Can I use Zitruckgo internationally?',
                a: 'Yes, we operate in the USA and Uganda. Cross-border shipments are available with additional documentation requirements.',
              },
              {
                q: 'How do I contact support?',
                a: 'You can reach our support team 24/7 via phone, email, or in-app chat. We also have a comprehensive knowledge base and community forum.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-primary-foreground mb-6">Ready to Explore Our Services?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Choose the service package that best fits your needs and start growing your business today.
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-base">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
