import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              GrowHigh
            </span>
            <p className="mt-4 text-slate-400">
              AI-powered growth solutions for modern businesses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors">AI Chatbots</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Email Automation</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Lead Generation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@growhigh.ai</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; 2024 GrowHigh Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
