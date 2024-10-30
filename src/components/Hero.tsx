import React from 'react';
import { ArrowUpRight, Rocket, Globe, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-950 to-indigo-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute h-full w-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-32">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Rocket className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-gray-200">Elevating Digital Success</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Taking Your Business to
            <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              New Heights
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mb-12">
            We craft digital experiences that elevate your brand, boost your visibility, 
            and drive remarkable growth in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all">
              Get Started
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: Globe,
              title: "Web Development",
              description: "Custom websites that convert visitors into customers"
            },
            {
              icon: TrendingUp,
              title: "SEO Optimization",
              description: "Boost your visibility in search results"
            },
            {
              icon: Rocket,
              title: "Digital Marketing",
              description: "Strategic campaigns that drive real results"
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <service.icon className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}