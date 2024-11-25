import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Passive Network Engineer',
      company: 'ANT-Air Networks Towers',
      period: 'Jun 2023 – Present',
      description: 'Designed fiber optic layouts, supported cable installations, and maintained network documentation.',
    },
    {
      title: 'IT Specialist',
      company: 'Concord Engineering & Contracting',
      period: 'Jun 2021 – Oct 2021',
      description: 'Delivered IT infrastructure support and managed technical documentation.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-blue-200">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Briefcase className="h-8 w-8 p-1.5 bg-blue-600 text-white rounded-full" />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 ml-8 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <div className="text-blue-600 font-medium mt-1">{exp.company}</div>
                <div className="flex items-center text-gray-500 mt-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {exp.period}
                </div>
                <p className="mt-3 text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;