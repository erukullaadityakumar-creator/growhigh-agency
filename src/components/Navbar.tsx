import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              GrowHigh
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-300 hover:text-brand-accent transition-colors">Services</a>
            <a href="#process" className="text-slate-300 hover:text-brand-accent transition-colors">Process</a>
            <a href="#results" className="text-slate-300 hover:text-brand-accent transition-colors">Results</a>
            <a href="#faq" className="text-slate-300 hover:text-brand-accent transition-colors">FAQ</a>
            <button className="px-6 py-2 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg font-medium hover:shadow-lg hover:shadow-brand-primary/30 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
