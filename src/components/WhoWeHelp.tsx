import React from 'react'
import { Store, Briefcase, TrendingUp } from 'lucide-react'

const WhoWeHelp: React.FC = () => {
  const audiences = [
    {
      icon: Store,
      title: 'E-commerce Brands',
      description: 'Automate customer service, optimize marketing, and boost conversions with AI-powered solutions.',
    },
    {
      icon: Briefcase,
      title: 'B2B Companies',
      description: 'Streamline lead generation, automate sales processes, and scale your operations efficiently.',
    },
    {
      icon: TrendingUp,
      title: 'Growing Startups',
      description: 'Leverage AI to compete with larger companies without the overhead costs.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Who We Help</h2>
          <p className="text-xl text-slate-400">Tailored solutions for businesses ready to scale</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-brand-primary transition-all hover:shadow-lg hover:shadow-brand-primary/20"
            >
              <item.icon className="w-12 h-12 text-brand-accent mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeHelp
