import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie Dubois",
      role: "Directrice de Production, CineProduction",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "Anekɔik a révolutionné notre façon de recruter des talents pour nos productions. Nous avons pu trouver des techniciens qualifiés dans plusieurs pays, ce qui a enrichi considérablement la qualité de nos projets."
    },
    {
      name: "Marc Leroy",
      role: "Cadreur Freelance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "Depuis que j'ai rejoint Anekɔik, j'ai pu décrocher des contrats internationaux et développer mon réseau professionnel. La plateforme est intuitive et les paiements sont toujours effectués dans les délais."
    },
    {
      name: "Amina Ndiaye",
      role: "Réalisatrice, GlobalFilm",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "La qualité des profils sur Anekɔik est impressionnante. J'ai pu constituer une équipe de tournage complète en moins d'une semaine pour un projet urgent. Un gain de temps et d'efficacité inestimable."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#181818]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos utilisateurs</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez comment Anekɔik transforme le quotidien des professionnels de l'audiovisuel à travers le monde.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#1E2A38] p-8 rounded-lg border border-gray-800 hover:border-[#FF6A00]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#FF6A00] fill-[#FF6A00]" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: "10,000+", label: "Professionnels" },
            { number: "5,000+", label: "Projets réalisés" },
            { number: "50+", label: "Pays représentés" }
          ].map((stat, index) => (
            <div key={index} className="bg-[#1E2A38] p-8 rounded-lg">
              <h3 className="text-4xl font-bold text-[#FF6A00] mb-2">{stat.number}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;