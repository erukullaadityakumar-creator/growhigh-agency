import React from 'react'
import { Bot, Mail, BarChart3, Zap, MessageSquare, Target } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that handles customer inquiries 24/7 and converts leads automatically.',
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'Personalized email campaigns that nurture leads and drive conversions on autopilot.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven strategies powered by AI to optimize every aspect of your business.',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Eliminate repetitive tasks and streamline operations with intelligent automation.',
    },
    {
      icon: MessageSquare,
      title: 'Social Media Management',
      description: 'AI-powered content creation and scheduling to maintain consistent brand presence.',
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Automated systems that identify, qualify, and convert prospects into customers.',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-slate-400">Comprehensive AI solutions to accelerate your growth</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 hover:border-brand-accent transition-all hover:shadow-lg hover:shadow-brand-accent/20 group"
            >
              <service.icon className="w-12 h-12 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
