import React from 'react';
import {
  Network,
  Shield,
  Server,
  Cloud,
  Workflow,
  HardDrive,
  HeartPulse,
  Headphones
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Network Design and Administration',
      description: 'Expertise in creating efficient and scalable network designs tailored to client needs. Includes configuring switches, routers, and managing network security.',
      icon: Network,
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Providing robust cybersecurity services, including vulnerability assessments, penetration testing, and implementing Zero Trust security models.',
      icon: Shield,
    },
    {
      title: 'System Administration & Support',
      description: 'Comprehensive system administration services for Windows, Linux, and cloud-based environments, including server configuration and IT support.',
      icon: Server,
    },
    {
      title: 'Cloud Security',
      description: 'Expertise in securing cloud infrastructures, implementing secure VPNs, and ensuring compliance with industry standards.',
      icon: Cloud,
    },
    {
      title: 'Network Virtualization & SDN',
      description: 'Designing and implementing Software-Defined Networks and network automation using tools like Python.',
      icon: Workflow,
    },
    {
      title: 'Disaster Recovery',
      description: 'Developing effective disaster recovery plans to minimize downtime and ensure business continuity.',
      icon: HeartPulse,
    },
    {
      title: 'Technical Support',
      description: 'Hands-on technical support with quick turnaround times for network and system-related issues.',
      icon: Headphones,
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Services Offered
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;