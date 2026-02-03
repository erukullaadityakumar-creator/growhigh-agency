import React from 'react'
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react'

const Results: React.FC = () => {
  const metrics = [
    { icon: TrendingUp, value: '300%', label: 'Average Revenue Growth' },
    { icon: Users, value: '10K+', label: 'Leads Generated Monthly' },
    { icon: Clock, value: '70%', label: 'Time Saved on Operations' },
    { icon: DollarSign, value: '5X', label: 'Average ROI in 6 Months' },
  ]

  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Real Results</h2>
          <p className="text-xl text-slate-400">Data-backed success from our clients</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700"
            >
              <metric.icon className="w-12 h-12 text-brand-accent mx-auto mb-4" />
              <div className="text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-slate-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
