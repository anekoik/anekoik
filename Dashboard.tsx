import React, { useState } from 'react';
import { 
  Home, User, Briefcase, FileText, Settings, Bell, Search, 
  MessageSquare, LogOut, Plus, Camera, Menu, X
} from 'lucide-react';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('feed');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'feed', label: "Fil d'actualité", icon: <Home className="h-5 w-5" /> },
    { id: 'profile', label: "Profil", icon: <User className="h-5 w-5" /> },
    { id: 'projects', label: "Projets", icon: <Briefcase className="h-5 w-5" /> },
    { id: 'contracts', label: "Contrats", icon: <FileText className="h-5 w-5" /> },
    { id: 'settings', label: "Paramètres", icon: <Settings className="h-5 w-5" /> },
  ];

  // Sample data for the feed
  const feedPosts = [
    {
      id: 1,
      author: {
        name: "Sophie Dubois",
        role: "Directrice de Production",
        company: "CineProduction",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      content: "Nous recherchons un chef opérateur expérimenté pour un tournage de documentaire au Sénégal prévu pour septembre. Projet de 3 semaines avec une équipe internationale. #Audiovisuel #Documentaire #Recrutement",
      timestamp: "Il y a 2 heures",
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      author: {
        name: "Marc Leroy",
        role: "Cadreur Freelance",
        company: "",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      content: "Je viens de terminer un projet passionnant pour France Télévisions. Voici quelques images des coulisses du tournage à Lyon. Ravi d'avoir collaboré avec une équipe aussi talentueuse !",
      image: "https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      timestamp: "Il y a 1 jour",
      likes: 56,
      comments: 12
    },
    {
      id: 3,
      author: {
        name: "Amina Ndiaye",
        role: "Réalisatrice",
        company: "GlobalFilm",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      content: "Fière d'annoncer que notre court-métrage 'Échos du Sahel' a été sélectionné pour le Festival de Cannes 2025 ! Un grand merci à toute l'équipe qui a rendu ce projet possible. #Cannes2025 #CourtMétrage",
      timestamp: "Il y a 3 jours",
      likes: 128,
      comments: 34
    }
  ];

  // Sample projects
  const projects = [
    {
      id: 1,
      title: "Documentaire - Les Voix de l'Océan",
      client: "OceanMedia Productions",
      status: "En cours",
      deadline: "15 Août 2025",
      budget: "45 000 €",
      progress: 65
    },
    {
      id: 2,
      title: "Publicité - Nouvelle Gamme Eco-Responsable",
      client: "GreenLife",
      status: "En attente",
      deadline: "30 Juin 2025",
      budget: "28 000 €",
      progress: 20
    },
    {
      id: 3,
      title: "Court-métrage - Échos du Sahel",
      client: "Festival Productions",
      status: "Terminé",
      deadline: "10 Mai 2025",
      budget: "35 000 €",
      progress: 100
    }
  ];

  // Sample contracts
  const contracts = [
    {
      id: 1,
      title: "Contrat de prestation - Documentaire OceanMedia",
      client: "OceanMedia Productions",
      startDate: "15 Mai 2025",
      endDate: "20 Août 2025",
      value: "45 000 €",
      status: "Actif"
    },
    {
      id: 2,
      title: "Contrat publicitaire - GreenLife",
      client: "GreenLife",
      startDate: "1 Juin 2025",
      endDate: "30 Juin 2025",
      value: "28 000 €",
      status: "En attente de signature"
    },
    {
      id: 3,
      title: "Contrat de réalisation - Court-métrage Festival",
      client: "Festival Productions",
      startDate: "1 Février 2025",
      endDate: "10 Mai 2025",
      value: "35 000 €",
      status: "Terminé"
    }
  ];

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return (
          <div className="space-y-6">
            {/* Create post */}
            <div className="bg-[#1E2A38] rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={user?.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"} 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <button className="w-full text-left bg-[#181818] text-gray-400 rounded-full px-4 py-2 hover:bg-[#181818]/80 transition-colors">
                    Partagez une actualité ou une opportunité...
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-3 pt-3 border-t border-gray-700">
                <button className="flex items-center text-gray-300 hover:text-[#FF6A00] transition-colors">
                  <Plus className="h-5 w-5 mr-1" />
                  <span>Photo</span>
                </button>
                <button className="flex items-center text-gray-300 hover:text-[#FF6A00] transition-colors">
                  <Briefcase className="h-5 w-5 mr-1" />
                  <span>Projet</span>
                </button>
                <button className="flex items-center text-gray-300 hover:text-[#FF6A00] transition-colors">
                  <FileText className="h-5 w-5 mr-1" />
                  <span>Article</span>
                </button>
              </div>
            </div>
            
            {/* Feed posts */}
            {feedPosts.map(post => (
              <div key={post.id} className="bg-[#1E2A38] rounded-lg overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h3 className="font-medium text-white">{post.author.name}</h3>
                      <p className="text-sm text-gray-400">
                        {post.author.role} {post.author.company && `chez ${post.author.company}`}
                      </p>
                      <p className="text-xs text-gray-500">{post.timestamp}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-200 mb-3">{post.content}</p>
                  
                  {post.image && (
                    <div className="rounded-lg overflow-hidden mb-3">
                      <img 
                        src={post.image} 
                        alt="Post" 
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  
                  <div className="flex justify-between text-gray-400 text-sm pt-2 border-t border-gray-700">
                    <button className="flex items-center hover:text-[#FF6A00] transition-colors py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center hover:text-[#FF6A00] transition-colors py-2">
                      <MessageSquare className="h-5 w-5 mr-1" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center hover:text-[#FF6A00] transition-colors py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span>Partager</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        
      case 'profile':
        return (
          <div>
            {/* Profile header */}
            <div className="relative mb-6">
              <div className="h-48 bg-gradient-to-r from-[#1E2A38] to-[#FF6A00]/30 rounded-lg"></div>
              <div className="absolute bottom-0 left-0 transform translate-y-1/2 ml-6">
                <div className="relative">
                  <img 
                    src={user?.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"} 
                    alt="Profile" 
                    className="w-24 h-24 rounded-full border-4 border-[#181818] object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-[#FF6A00] text-white p-1 rounded-full">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex justify-end p-4">
                <button className="bg-[#FF6A00] text-white px-4 py-2 rounded-md hover:bg-[#FF6A00]/80 transition-colors">
                  Modifier le profil
                </button>
              </div>
            </div>
            
            {/* Profile info */}
            <div className="bg-[#1E2A38] rounded-lg p-6 mt-12">
              <h2 className="text-2xl font-bold mb-1">{user?.name || "Marc Leroy"}</h2>
              <p className="text-[#FF6A00] mb-3">{user?.role || "Cadreur Freelance"}</p>
              <p className="text-gray-300 mb-4">
                Cadreur professionnel avec 8 ans d'expérience dans la production de documentaires, films et publicités. 
                Spécialisé dans les prises de vue en conditions extrêmes et les tournages internationaux.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-medium text-white mb-2">Informations</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">Localisation:</span>
                      <span>Paris, France</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">Disponibilité:</span>
                      <span className="text-green-400">Disponible</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">Expérience:</span>
                      <span>8 ans</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">Langues:</span>
                      <span>Français, Anglais, Espagnol</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-2">Compétences</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Caméra RED", "Sony FS7", "Steadicam", "Drone", "4K", "Éclairage", "Post-production", "Adobe Premiere"].map((skill, index) => (
                      <span key={index} className="bg-[#181818] text-gray-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-white mb-3">Portfolio</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "https://images.unsplash.com/photo-1576024267168-6be0a170c67a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                    "https://images.unsplash.com/photo-1585023017723-c9a4f9e5fbde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
                    "https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80"
                  ].map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden h-32">
                      <img 
                        src={img} 
                        alt={`Portfolio ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="rounded-lg overflow-hidden h-32 bg-[#181818] flex items-center justify-center">
                    <button className="text-[#FF6A00] hover:text-[#FF6A00]/80 transition-colors">
                      <Plus className="h-8 w-8" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'projects':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Projets</h2>
              <button className="bg-[#FF6A00] text-white px-4 py-2 rounded-md hover:bg-[#FF6A00]/80 transition-colors flex items-center">
                <Plus className="h-5 w-5 mr-1" />
                <span>Nouveau projet</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {projects.map(project => (
                <div key={project.id} className="bg-[#1E2A38] rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-gray-400">Client: {project.client}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm ${
                        project.status === 'En cours' ? 'bg-blue-900/30 text-blue-400' :
                        project.status === 'En attente' ? 'bg-yellow-900/30 text-yellow-400' :
                        'bg-green-900/30 text-green-400'
                      }`}>
                        {project.status}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-gray-400 text-sm">Date limite</p>
                        <p className="text-white">{project.deadline}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Budget</p>
                        <p className="text-white">{project.budget}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Progression</p>
                        <div className="flex items-center">
                          <div className="w-full bg-[#181818] rounded-full h-2 mr-2">
                            <div 
                              className="bg-[#FF6A00] h-2 rounded-full" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-white text-sm">{project.progress}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-3">
                      <button className="text-gray-300 hover:text-[#FF6A00] transition-colors">
                        Détails
                      </button>
                      <button className="text-gray-300 hover:text-[#FF6A00] transition-colors">
                        Modifier
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'contracts':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Contrats</h2>
              <button className="bg-[#FF6A00] text-white px-4 py-2 rounded-md hover:bg-[#FF6A00]/80 transition-colors flex items-center">
                <Plus className="h-5 w-5 mr-1" />
                <span>Nouveau contrat</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-[#1E2A38] rounded-lg overflow-hidden">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Contrat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Période
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Montant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contracts.map((contract, index) => (
                    <tr 
                      key={contract.id} 
                      className={index !== contracts.length - 1 ? "border-b border-gray-700" : ""}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{contract.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{contract.client}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">
                          {contract.startDate} - {contract.endDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{contract.value}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          contract.status === 'Actif' ? 'bg-green-900/30 text-green-400' :
                          contract.status === 'En attente de signature' ? 'bg-yellow-900/30 text-yellow-400' :
                          'bg-gray-900/30 text-gray-400'
                        }`}>
                          {contract.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        <button className="text-[#FF6A00] hover:text-[#FF6A00]/80 transition-colors mr-3">
                          Voir
                        </button>
                        <button className="text-gray-300 hover:text-white transition-colors">
                          Télécharger
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Paramètres</h2>
            
            <div className="bg-[#1E2A38] rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Informations personnelles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Nom complet
                      </label>
                      <input 
                        type="text" 
                        className="w-full bg-[#181818] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#FF6A00]"
                        defaultValue="Marc Leroy"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Email
                      </label>
                      <input 
                        type="email" 
                        className="w-full bg-[#181818] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#FF6A00]"
                        defaultValue="marc.leroy@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Téléphone
                      </label>
                      <input 
                        type="tel" 
                        className="w-full bg-[#181818] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#FF6A00]"
                        defaultValue="+33 6 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Localisation
                      </label>
                      <input 
                        type="text" 
                        className="w-full bg-[#181818] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#FF6A00]"
                        defaultValue="Paris, France"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Mot de passe</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Mot de passe actuel
                      </label>
                      <input 
                        type="password" 
                        className="w-full bg-[#181818] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#FF6A00]"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Nouveau mot de passe
                      </label>
                      <input 
                        type="password" 
                        className="w-full bg-[#181818] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#FF6A00]"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Notifications</h3>
                  <div className="space-y-3">
                    {[
                      "Recevoir des notifications par email",
                      "Notifications de nouveaux projets",
                      "Notifications de messages",
                      "Notifications de contrats",
                      "Mises à jour de la plateforme"
                    ].map((option, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          id={`notification-${index}`}
                          type="checkbox"
                          defaultChecked={true}
                          className="h-4 w-4 text-[#FF6A00] focus:ring-[#FF6A00] border-gray-700 rounded"
                        />
                        <label htmlFor={`notification-${index}`} className="ml-2 block text-sm text-gray-300">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 border border-gray-700 text-gray-300 rounded-md hover:bg-gray-700 transition-colors">
                    Annuler
                  </button>
                  <button className="px-4 py-2 bg-[#FF6A00] text-white rounded-md hover:bg-[#FF6A00]/80 transition-colors">
                    Enregistrer les modifications
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col">
      {/* Header */}
      <header className="bg-[#1E2A38] border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Camera className="h-8 w-8 text-[#FF6A00]" />
                <span className="ml-2 text-2xl font-bold">Anekɔik</span>
              </div>
              
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                        activeTab === tab.id 
                          ? 'bg-[#FF6A00]/10 text-[#FF6A00]' 
                          : 'text-gray-300 hover:bg-[#181818]/50 hover:text-white'
                      }`}
                    >
                      {tab.icon}
                      <span className="ml-2">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="bg-[#181818] text-white pl-10 pr-4 py-2 w-64 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6A00] border border-gray-700"
                  />
                </div>
                
                <button className="relative p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[#FF6A00]"></span>
                </button>
                
                <button className="relative p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                  <MessageSquare className="h-6 w-6" />
                </button>
                
                <div className="border-l border-gray-700 h-6 mx-2"></div>
                
                <div className="flex items-center">
                  <img 
                    src={user?.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"} 
                    alt="Profile" 
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <button 
                    onClick={onLogout}
                    className="ml-2 text-gray-300 hover:text-white flex items-center"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1E2A38] border-t border-gray-800 py-2">
            <div className="px-4 py-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer- events-none">
                    <Search className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="bg-[#181818] text-white pl-10 pr-4 py-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6A00] border border-gray-700"
                  />
                </div>
              </div>
              
              <div className="px-2 pt-2 pb-3 space-y-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center ${
                      activeTab === tab.id 
                        ? 'bg-[#FF6A00]/10 text-[#FF6A00]' 
                        : 'text-gray-300 hover:bg-[#181818]/50 hover:text-white'
                    }`}
                  >
                    {tab.icon}
                    <span className="ml-2">{tab.label}</span>
                  </button>
                ))}
                
                <div className="border-t border-gray-700 my-2"></div>
                
                <div className="flex items-center px-3 py-2">
                  <img 
                    src={user?.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"} 
                    alt="Profile" 
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="ml-3 text-white font-medium">{user?.name || "Marc Leroy"}</span>
                </div>
                
                <button 
                  onClick={onLogout}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#181818]/50 hover:text-white w-full text-left flex items-center"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  <span>Déconnexion</span>
                </button>
              </div>
            </div>
          )}
      </header>
      
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;