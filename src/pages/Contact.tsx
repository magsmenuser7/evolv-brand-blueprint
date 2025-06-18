
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Instagram, Linkedin, X, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: 'https://www.instagram.com/evolv._global?utm_source=qr&igsh=YnZyOHdpbmxmZnRv',
      linkedin: 'https://www.linkedin.com/company/evolv-global/',
      x: 'https://x.com/global_evolv?t=tY28K6FfW6zDdtRCwcQgPg&s=08',
      whatsapp: 'https://wa.me/916304970488'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-primary leading-tight mb-8">
              Let's Start Your <span className="text-evolv-copper">Evolution</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Ready to transform your brand? We're here to listen, strategize, and execute.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-evolv-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Start Your Evolution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="6304970488"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project and goals..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary text-white hover:bg-evolv-slate"
                  >
                    Let's Evolve Together
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="text-evolv-copper mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-primary">Email</h4>
                      <a 
                        href="mailto:Connect@evolvbrands.in" 
                        className="text-gray-600 hover:text-evolv-copper transition-colors"
                      >
                        Connect@evolvbrands.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="text-evolv-copper mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-primary">Phone</h4>
                      <div className="text-gray-600">
                        <a href="tel:+916304970488" className="hover:text-evolv-copper transition-colors block">
                          +91 6304970488
                        </a>
                        <a href="tel:+919703356332" className="hover:text-evolv-copper transition-colors block">
                          +91 9703356332
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-evolv-copper mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-primary">Address</h4>
                      <p className="text-gray-600">
                        8-2-293/82/B/S-7 4th Floor,<br />
                        JK TOWERS, Rd Number 10C,<br />
                        Gayatri Hills, Jubilee Hills,<br />
                        Hyderabad, Telangana 500033
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSocialClick('instagram')}
                        className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white flex items-center space-x-2"
                      >
                        <Instagram size={16} />
                        <span>Instagram</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSocialClick('linkedin')}
                        className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white flex items-center space-x-2"
                      >
                        <Linkedin size={16} />
                        <span>LinkedIn</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSocialClick('x')}
                        className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white flex items-center space-x-2"
                      >
                        <X size={16} />
                        <span>X</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSocialClick('whatsapp')}
                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white flex items-center space-x-2"
                      >
                        <MessageCircle size={16} />
                        <span>WhatsApp</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0823!2d78.4004!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c5b1a1b1b1%3A0x1b1b1b1b1b1b1b1b!2s8-2-293%2F82%2FB%2FS-7%204th%20Floor%2C%20JK%20TOWERS%2C%20Rd%20Number%2010C%2C%20Gayatri%20Hills%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Evolv Global Office Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-12">
              Why Partner With Us?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-evolv-copper mb-4">130+</div>
                <h3 className="text-xl font-bold text-primary mb-4">Brands Evolved</h3>
                <p className="text-gray-600">
                  From startups to enterprises, we've helped brands across industries find their voice.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-black text-evolv-copper mb-4">₹200Cr+</div>
                <h3 className="text-xl font-bold text-primary mb-4">Media Handled</h3>
                <p className="text-gray-600">
                  Strategic media investments that deliver measurable results and ROI.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-black text-evolv-copper mb-4">25+</div>
                <h3 className="text-xl font-bold text-primary mb-4">Industries</h3>
                <p className="text-gray-600">
                  Deep expertise across diverse sectors and market dynamics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
