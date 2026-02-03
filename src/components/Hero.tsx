import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full border border-brand-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-brand-accent font-medium">AI-Powered Growth Agency</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Scale Your Business with{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              AI Automation
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            We help businesses grow faster with intelligent automation, data-driven strategies, and cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-brand-primary/40 transition-all flex items-center justify-center gap-2">
              Start Growing Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 rounded-lg font-semibold text-lg border border-slate-700 hover:border-brand-primary hover:bg-slate-800 transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
