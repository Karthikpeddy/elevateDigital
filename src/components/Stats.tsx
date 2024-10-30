import React from 'react';
import { Users, Award, LineChart } from 'lucide-react';

export default function Stats() {
  return (
    <div className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Users,
              number: "500+",
              label: "Happy Clients"
            },
            {
              icon: Award,
              number: "150+",
              label: "Projects Completed"
            },
            {
              icon: LineChart,
              number: "300%",
              label: "Average Growth"
            }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <stat.icon className="w-12 h-12 text-indigo-400 mb-4" />
              <span className="text-4xl font-bold text-white mb-2">{stat.number}</span>
              <span className="text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}