import React from 'react';
import { Users, Shield, CreditCard, Globe, Camera, MessageSquare } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-[#FF6A00]" />,
      title: "Mise en relation directe",
      description: "Connectez-vous directement avec des clients, des sociétés de production et des freelances du secteur audiovisuel."
    },
    {
      icon: <Shield className="h-10 w-10 text-[#FF6A00]" />,
      title: "Gestion des contrats",
      description: "Simplifiez la gestion de vos contrats pour une transparence totale entre toutes les parties."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-[#FF6A00]" />,
      title: "Paiement sécurisé",
      description: "Garantissez le paiement de vos prestations grâce à notre système de paiement sécurisé."
    },
    {
      icon: <Globe className="h-10 w-10 text-[#FF6A00]" />,
      title: "Opportunités internationales",
      description: "Élargissez votre réseau et saisissez des contrats à l'échelle mondiale."
    },
    {
      icon: <Camera className="h-10 w-10 text-[#FF6A00]" />,
      title: "Profils spécialisés",
      description: "Créez un profil mettant en valeur vos compétences spécifiques dans le domaine de l'audiovisuel."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#FF6A00]" />,
      title: "Communication intégrée",
      description: "Échangez facilement avec vos collaborateurs grâce à notre système de messagerie intégré."
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#1E2A38]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fonctionnalités Principales</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Anekɔik offre tous les outils nécessaires pour réussir dans le secteur audiovisuel international.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#181818] p-8 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-800 hover:border-[#FF6A00]/50"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Feature highlight */}
        <div className="mt-20 bg-gradient-to-r from-[#1E2A38] to-[#181818] p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Trouvez les meilleurs talents pour vos projets audiovisuels
              </h3>
              <p className="text-gray-300 mb-6">
                Que vous soyez à la recherche d'un technicien, d'un opérateur, d'un régisseur ou d'un directeur technique, 
                Anekɔik vous permet de trouver rapidement les professionnels qualifiés dont vous avez besoin.
              </p>
              <ul className="space-y-3">
                {[
                  "Recherche avancée par compétences et disponibilités",
                  "Vérification des références et des expériences",
                  "Communication directe avec les candidats",
                  "Gestion simplifiée des contrats et des paiements"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FF6A00] mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Équipe audiovisuelle en action" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;