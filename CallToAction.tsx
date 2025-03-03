import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="pricing" className="py-20 bg-[#1E2A38]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à rejoindre le réseau Anekɔik ?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choisissez l'offre qui correspond le mieux à vos besoins et commencez à développer votre réseau professionnel dès aujourd'hui.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Client Plan */}
          <div className="bg-[#181818] rounded-lg overflow-hidden border border-gray-800 hover:border-[#FF6A00]/50 transition-all duration-300">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Client</h3>
              <p className="text-gray-400 mb-6">Pour les entreprises à la recherche de talents</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">99$</span>
                <span className="text-gray-400">/mois</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Accès illimité à tous les profils",
                  "Publication d'offres illimitées",
                  "Messagerie avancée avec les candidats",
                  "Outils de gestion des talents",
                  "Contrats personnalisables",
                  "Support dédié 24/7",
                  "Gestion des paiements sécurisée"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FF6A00] mr-2">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-[#FF6A00] text-white rounded-md hover:bg-[#FF6A00]/80 transition-colors font-medium flex items-center justify-center">
                <span>S'abonner</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Freelance/Production Plan */}
          <div className="bg-[#181818] rounded-lg overflow-hidden border-2 border-[#FF6A00] transform md:scale-105 shadow-lg relative">
            <div className="absolute top-0 right-0 bg-[#FF6A00] text-white px-4 py-1 text-sm font-medium">
              Populaire
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Freelance & Production</h3>
              <p className="text-gray-400 mb-6">Pour les professionnels et sociétés de production</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">8%</span>
                <span className="text-gray-400"> commission</span>
              </div>
              <p className="text-gray-300 mb-6 text-sm">
                Inscription gratuite. Nous prélevons uniquement 8% sur le montant de vos contrats finalisés.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Profil professionnel complet",
                  "Visibilité auprès des clients",
                  "Candidatures illimitées",
                  "Messagerie intégrée",
                  "Gestion des contrats simplifiée",
                  "Paiement sécurisé et garanti",
                  "Support prioritaire"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FF6A00] mr-2">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-transparent border border-[#FF6A00] text-[#FF6A00] rounded-md hover:bg-[#FF6A00] hover:text-white transition-colors font-medium">
                Commencer Gratuitement
              </button>
            </div>
          </div>
        </div>
        
        {/* How it works section */}
        <div className="mt-16 bg-[#181818] p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Comment ça fonctionne</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-[#FF6A00]">Pour les clients</h4>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-[#FF6A00] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <p className="text-gray-300">Abonnez-vous au forfait Client pour 99$ par mois</p>
                </li>
                <li className="flex">
                  <span className="bg-[#FF6A00] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <p className="text-gray-300">Publiez vos offres et recherchez des talents qualifiés</p>
                </li>
                <li className="flex">
                  <span className="bg-[#FF6A00] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <p className="text-gray-300">Contactez et négociez directement avec les professionnels</p>
                </li>
                <li className="flex">
                  <span className="bg-[#FF6A00] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <p className="text-gray-300">Finalisez les contrats et effectuez les paiements en toute sécurité</p>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-[#FF6A00]">Pour les freelances & productions</h4>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-[#FF6A00] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <p className="text-gray-300">Inscrivez-vous gratuitement et créez votre profil professionnel</p>
                </li>
                <li className="flex">
                  <span className="bg-[#FF6A00] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <p className="text-gray-300">Trouvez et postulez à des projets correspondant à vos compétences</p>
                </li>
                <li className="flex">
                  <span className="bg-[#FF6A00] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <p className="text-gray-300">Négociez vos tarifs et conditions directement avec les clients</p>
                </li>
                <li className="flex">
                  <span className="bg-[#FF6A00] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <p className="text-gray-300">Recevez votre paiement moins 8% de commission après validation du travail</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Questions fréquentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Comment fonctionne le système de paiement ?",
                answer: "Anekɔik sécurise les paiements en servant d'intermédiaire entre les clients et les prestataires. Les fonds sont débloqués uniquement lorsque le travail est validé, garantissant ainsi une transaction sécurisée pour toutes les parties. Nous prélevons une commission de 8% uniquement sur les contrats finalisés."
              },
              {
                question: "Puis-je utiliser Anekɔik à l'international ?",
                answer: "Absolument ! Anekɔik est conçu pour faciliter les collaborations internationales. La plateforme prend en charge plusieurs devises et langues pour vous permettre de travailler avec des professionnels du monde entier."
              },
              {
                question: "Comment sont vérifiés les profils professionnels ?",
                answer: "Tous les profils sont soumis à un processus de vérification qui inclut la validation des références professionnelles, des diplômes et des expériences passées pour garantir la qualité et la fiabilité des membres de notre réseau."
              },
              {
                question: "Quels types de contrats sont disponibles sur la plateforme ?",
                answer: "Anekɔik propose plusieurs modèles de contrats adaptés aux différents besoins du secteur audiovisuel : contrats de prestation, contrats d'embauche temporaire, contrats de cession de droits, etc. Tous sont personnalisables selon vos besoins spécifiques."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#181818] p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-3">{faq.question}</h4>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;