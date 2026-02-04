import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeHelp } from './components/WhoWeHelp';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { Integrations } from './components/Integrations';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-50 selection:bg-brand-accent/30">
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <Process />
        <Results />
        <Integrations />
        <Comparison />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
