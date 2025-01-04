import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PassCreator from './components/features/PassCreator';
import InvitationCreator from './components/features/InvitationCreator';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App1() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <PassCreator />
      <InvitationCreator />
      <Contact />
      <Footer />
    </div>
  );
}