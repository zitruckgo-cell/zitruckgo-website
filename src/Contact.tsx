import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.address || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', address: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Have questions? We would love to hear from you. Contact our team and we will respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '+19784170522',
                subtext: 'Available 24/7',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@zitruckgo.com',
                subtext: 'Response within 24 hours',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border text-center">
                <item.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="font-semibold text-foreground mb-1">{item.content}</p>
                <p className="text-sm text-muted-foreground">{item.subtext}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name (Company or Individual) *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name or company name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Full Address (Company or Individual) *
                  </label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address, city, state, zip code"
                    rows={3}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telephone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+19784170522"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="mb-6">Why Contact Us?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Driver Inquiries',
                    description: 'Questions about joining our marketplace, training programs, or how to maximize your earnings.',
                  },
                  {
                    title: 'Logistics Companies',
                    description: 'Interested in partnering with us? Learn how to connect with our network of professional drivers.',
                  },
                  {
                    title: 'Training Programs',
                    description: 'Want to enroll in our defense driving training? Get details about schedules and pricing.',
                  },
                  {
                    title: 'Technical Support',
                    description: 'Having issues with our platform? Our technical team is ready to help.',
                  },
                  {
                    title: 'Partnerships',
                    description: 'Interested in collaborating with Zitruckgo? We are always open to strategic partnerships.',
                  },
                ].map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-muted/30 p-6 rounded-lg border border-border">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      We operate 24/7 to serve our global community. Our support team is always available to assist you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <h2 className="text-center mb-16">Our Offices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                region: 'Headquarters',
                address: '123 Logistics Drive, Chicago, IL 60601',
                phone: '+19784170522',
                email: 'info@zitruckgo.com',
              },
            ].map((office, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-4">{office.region}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>+19784170522</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{office.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
