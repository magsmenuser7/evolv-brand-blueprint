
import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-black mb-4">
              EVOLV<span className="text-evolv-copper">.</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              We don't run campaigns. We build brand ecosystems. 
              Evolv Global is where clarity meets execution.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span className="text-sm">Jubilee Hills, Hyderabad</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Services
              </Link>
              <Link to="/case-studies" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Case Studies
              </Link>
              <Link to="/clients" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Clients
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span className="text-sm">connect@evolvglobal.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageCircle size={16} />
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Our Philosophy</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Clarity before Creativity</div>
                <div>• Systems over Chaos</div>
                <div>• Outcomes over Outputs</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © 2024 Evolv Global. All rights reserved.
          </div>
          <div className="text-gray-300 text-sm mt-4 md:mt-0">
            Built for brands that dare to evolve.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
