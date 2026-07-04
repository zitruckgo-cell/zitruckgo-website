import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Mail, Phone, Clock } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
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
    <div className="min-h-screen flex flex-col bg-[#f0fdf4]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-white border-b border-green-100">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Have questions about our marketplace or training programs? We would love to hear from you. Contact our team and we will respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+1 (978) 417-0522',
                  subtext: 'Available 24/7 for driver support',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'zitruckgo@gmail.com',
                  subtext: 'Response within 24 hours',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-green-100 shadow-sm flex items-center gap-6">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <item.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xl font-bold text-green-600 mb-1">{item.content}</p>
                    <p className="text-sm text-gray-500">{item.subtext}</p>
                  </div>
                </div>
              ))}

              <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-green-600 rounded-full blur-3xl opacity-20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-green-400" />
                    <h4 className="text-xl font-bold">Business Hours</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    We operate 24/7 to serve our global community of drivers and logistics partners. Our support team is always available to assist you with any inquiries.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-green-100 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border-green-100 focus:border-green-500 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Telephone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (978) 417-0522"
                      className="w-full border-green-100 focus:border-green-500 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="zitruckgo@gmail.com"
                    className="w-full border-green-100 focus:border-green-500 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-2">
                    Full Address *
                  </label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address, city, state, zip code"
                    rows={2}
                    className="w-full border-green-100 focus:border-green-500 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={4}
                    className="w-full border-green-100 focus:border-green-500 rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg shadow-green-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
