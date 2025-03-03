import React, { useState } from 'react';
import { Menu, X, Camera } from 'lucide-react';

const Header = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1E2A38]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Camera className="h-8 w-8 text-[#FF6A00]" />
          <span className="ml-2 text-2xl font-bold text-white">Anekɔik</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-white hover:text-[#FF6A00] transition-colors">
            Fonctionnalités
          </a>
          <a href="#testimonials" className="text-white hover:text-[#FF6A00] transition-colors">
            Témoignages
          </a>
          <a href="#pricing" className="text-white hover:text-[#FF6A00] transition-colors">
            Tarifs
          </a>
          <a href="#contact" className="text-white hover:text-[#FF6A00] transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="hidden md:flex space-x-4">
          <button 
            className="px-4 py-2 text-white hover:text-[#FF6A00] transition-colors"
            onClick={onLoginClick}
          >
            Connexion
          </button>
          <button 
            className="px-4 py-2 bg-[#FF6A00] text-white rounded-md hover:bg-[#FF6A00]/80 transition-colors"
            onClick={onLoginClick}
          >
            S'inscrire
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E2A38] absolute top-full left-0 right-0 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-white hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </a>
            <a 
              href="#testimonials" 
              className="text-white hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </a>
            <a 
              href="#pricing" 
              className="text-white hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
              <button 
                className="px-4 py-2 text-white hover:text-[#FF6A00] transition-colors text-left"
                onClick={() => {
                  setIsMenuOpen(false);
                  onLoginClick();
                }}
              >
                Connexion
              </button>
              <button 
                className="px-4 py-2 bg-[#FF6A00] text-white rounded-md hover:bg-[#FF6A00]/80 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  onLoginClick();
                }}
              >
                S'inscrire
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;