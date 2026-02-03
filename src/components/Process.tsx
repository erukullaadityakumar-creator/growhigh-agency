import React from 'react'
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react'

const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We analyze your business, identify bottlenecks, and uncover growth opportunities.',
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Custom AI automation strategy tailored to your specific goals and challenges.',
    },
    {
      icon: Rocket,
      title: 'Implementation',
      description: 'Rapid deployment of AI solutions with minimal disruption to your operations.',
    },
    {
      icon: TrendingUp,
      title: 'Optimization',
      description: 'Continuous monitoring and improvement to maximize ROI and performance.',
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-slate-400">A proven approach to accelerate your growth</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-primary to-transparent -z-10 hidden lg:block last:hidden"></div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
