import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Camera } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState('');
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && step === 1) {
      setStep(2);
    } else {
      onLogin({ email, password, userType });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181818] p-4">
      <div className="bg-[#1E2A38] rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
            <Camera className="h-10 w-10 text-[#FF6A00]" />
            <span className="ml-2 text-3xl font-bold text-white">Anekɔik</span>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {isSignUp 
              ? (step === 1 ? "Créer un compte" : "Sélectionnez votre profil") 
              : "Connexion à votre compte"}
          </h2>
          
          {isSignUp && step === 2 ? (
            <div>
              <p className="text-gray-300 mb-6 text-center">
                Quel type d'utilisateur êtes-vous ?
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-6">
                {[
                  { id: 'client', label: 'Client recherchant des professionnels', description: 'Vous cherchez des talents pour vos projets audiovisuels' },
                  { id: 'production', label: 'Boîte de production', description: 'Vous représentez une société de production audiovisuelle' },
                  { id: 'freelance', label: 'Freelance', description: 'Vous êtes un professionnel indépendant de l\'audiovisuel' }
                ].map((type) => (
                  <div 
                    key={type.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      userType === type.id 
                        ? 'border-[#FF6A00] bg-[#FF6A00]/10' 
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                    onClick={() => setUserType(type.id)}
                  >
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${
                        userType === type.id 
                          ? 'border-[#FF6A00] bg-[#FF6A00]' 
                          : 'border-gray-500'
                      }`}>
                        {userType === type.id && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-white">{type.label}</h3>
                        <p className="text-sm text-gray-400">{type.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Retour
                </button>
                <button
                  type="button"
                  onClick={() => onLogin({ email, password, userType })}
                  disabled={!userType}
                  className={`px-6 py-2 rounded-md flex items-center ${
                    userType 
                      ? 'bg-[#FF6A00] text-white hover:bg-[#FF6A00]/80' 
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  } transition-colors`}
                >
                  <span>Continuer</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-[#181818] text-white pl-10 pr-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6A00] border border-gray-700"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-[#181818] text-white pl-10 pr-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6A00] border border-gray-700"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                
                {!isSignUp && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-[#FF6A00] focus:ring-[#FF6A00] border-gray-700 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                        Se souvenir de moi
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="text-[#FF6A00] hover:text-[#FF6A00]/80">
                        Mot de passe oublié ?
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-[#FF6A00] text-white py-3 rounded-md hover:bg-[#FF6A00]/80 transition-colors flex items-center justify-center"
                >
                  <span>{isSignUp ? "S'inscrire" : "Se connecter"}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          )}
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isSignUp ? "Vous avez déjà un compte ?" : "Vous n'avez pas de compte ?"}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setStep(1);
                }}
                className="ml-1 text-[#FF6A00] hover:text-[#FF6A00]/80"
              >
                {isSignUp ? "Se connecter" : "S'inscrire"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;