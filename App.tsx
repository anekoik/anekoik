import React, { useState } from 'react';
import { Camera, Globe, Users, Shield, CreditCard, Menu, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    console.log('User logged in:', userData);
    setUser({
      name: 'Marc Leroy',
      email: userData.email,
      role: userData.userType === 'client' 
        ? 'Client' 
        : userData.userType === 'production' 
          ? 'Boîte de Production' 
          : 'Cadreur Freelance',
      userType: userData.userType
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  if (isLoggedIn) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <Header onLoginClick={() => document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' })} />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <div id="login-section">
        <Login onLogin={handleLogin} />
      </div>
      <Footer />
    </div>
  );
}

export default App;