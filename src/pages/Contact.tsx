
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, MessageCircle, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      budget: '',
      timeline: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary leading-tight mb-8">
              Let's Build Your Brand <span className="text-evolv-copper">Ecosystem</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Ready to evolve? Let's start with a conversation about your brand's future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-evolv-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-black text-primary mb-8">
                  Start Your Evolution
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-evolv-copper focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10L">Under ₹10 Lakhs</option>
                        <option value="10L-50L">₹10 - ₹50 Lakhs</option>
                        <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                        <option value="1Cr-5Cr">₹1 - ₹5 Crores</option>
                        <option value="above-5Cr">Above ₹5 Crores</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-evolv-copper focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (Within 1 month)</option>
                        <option value="short">Short term (1-3 months)</option>
                        <option value="medium">Medium term (3-6 months)</option>
                        <option value="long">Long term (6+ months)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your brand, challenges, and what you're looking to achieve..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary text-white hover:bg-evolv-slate py-4 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-primary mb-8">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Ready to transform your brand? We're here to listen, understand, 
                  and create something extraordinary together.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-evolv-copper mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Location</h3>
                    <p className="text-gray-600">
                      Jubilee Hills<br />
                      Hyderabad, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-evolv-copper mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <p className="text-gray-600">
                      connect@evolvglobal.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MessageCircle className="text-evolv-copper mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">WhatsApp Business</h3>
                    <Button 
                      variant="outline"
                      className="border-2 border-evolv-copper text-evolv-copper hover:bg-evolv-copper hover:text-white mt-2"
                      onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                    >
                      Chat with us
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-evolv-copper mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>
              
              <Card className="border-2 border-evolv-copper bg-gradient-to-br from-evolv-light-grey to-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-primary mb-3">Quick Response Guarantee</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We respond to all inquiries within 24 hours. For urgent projects, 
                    reach out via WhatsApp for immediate assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
