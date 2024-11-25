import React from 'react';
import {
  Network, Shield, Server, Cloud, Database, Wifi, 
  HardDrive, Terminal, Code, Laptop
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Network Design and Administration',
      icon: Network,
      skills: [
        'Network Design',
        'Aruba Switching',
        'Cisco Networking',
        'Huawei Data Communication',
        'Routing & Switching',
        'Network Configuration & Management',
        'Network Monitoring & Analysis'
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      skills: [
        'Cyber Risk Management',
        'Endpoint Security & Antivirus Solutions',
        'Data Encryption & Security Protocols',
        'Zero Trust Security Models',
        'Intrusion Detection & Prevention Systems (IDS/IPS)',
        'Network Security Architecture'
      ]
    },
    {
      title: 'System Administration',
      icon: Server,
      skills: [
        'System Administration',
        'Server Configuration & Deployment',
        'Linux System Administration',
        'Windows Administration',
        'Active Directory & Identity Management'
      ]
    },
    {
      title: 'Cloud Computing',
      icon: Cloud,
      skills: [
        'Cloud Computing',
        'Cloud Security',
        'Secure VPN Design & Implementation'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;