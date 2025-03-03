import React from 'react';
import { Camera, Globe, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A38] to-[#181818]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#FF6A00] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#1E2A38] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#FF6A00]">Anekɔik</span> - Le Réseau Social Professionnel de l'Audiovisuel International
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connectez-vous avec des talents, des entreprises et des clients du monde entier. 
              Trouvez des contrats, collaborez et développez votre carrière dans l'audiovisuel.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-[#FF6A00] text-white rounded-md hover:bg-[#FF6A00]/80 transition-colors font-medium text-lg">
                Commencer Gratuitement
              </button>
              <button className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors font-medium text-lg">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Professionnels de l'audiovisuel collaborant" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-60"></div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-5 -right-5 bg-[#1E2A38] p-3 rounded-lg shadow-lg flex items-center">
              <Globe className="h-6 w-6 text-[#FF6A00] mr-2" />
              <span className="font-medium">International</span>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#1E2A38] p-3 rounded-lg shadow-lg flex items-center">
              <Users className="h-6 w-6 text-[#FF6A00] mr-2" />
              <span className="font-medium">+10,000 Professionnels</span>
            </div>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Utilisé par des professionnels du monde entier</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="flex items-center">
              <Camera className="h-5 w-5 text-white mr-2" />
              <span className="font-medium">CineProduction</span>
            </div>
            <div className="flex items-center">
              <Camera className="h-5 w-5 text-white mr-2" />
              <span className="font-medium">MediaTech</span>
            </div>
            <div className="flex items-center">
              <Camera className="h-5 w-5 text-white mr-2" />
              <span className="font-medium">GlobalFilm</span>
            </div>
            <div className="flex items-center">
              <Camera className="h-5 w-5 text-white mr-2" />
              <span className="font-medium">StudioConnect</span>
            </div>
            <div className="flex items-center">
              <Camera className="h-5 w-5 text-white mr-2" />
              <span className="font-medium">ArtVision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;