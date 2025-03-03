import React from 'react';
import { Camera, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#181818] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Camera className="h-8 w-8 text-[#FF6A00]" />
              <span className="ml-2 text-2xl font-bold text-white">Anekɔik</span>
            </div>
            <p className="text-gray-400 mb-4">
              Le réseau social professionnel dédié aux acteurs de l'audiovisuel international.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {[
                { name: "Accueil", href: "#" },
                { name: "Fonctionnalités", href: "#features" },
                { name: "Témoignages", href: "#testimonials" },
                { name: "Tarifs", href: "#pricing" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#FF6A00] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Légal</h4>
            <ul className="space-y-2">
              {[
                { name: "Conditions d'utilisation", href: "#" },
                { name: "Politique de confidentialité", href: "#" },
                { name: "Mentions légales", href: "#" },
                { name: "Cookies", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#FF6A00] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#FF6A00] mr-2 mt-0.5" />
                <span className="text-gray-400">contact@anekoik.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#FF6A00] mr-2 mt-0.5" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-medium mb-2">Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="bg-[#1E2A38] text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#FF6A00] w-full"
                />
                <button className="bg-[#FF6A00] text-white px-4 py-2 rounded-r-md hover:bg-[#FF6A00]/80 transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Anekɔik. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;