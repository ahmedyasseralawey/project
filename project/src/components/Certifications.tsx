import React from 'react';
import { Award, Calendar, Key } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Cisco Certified Specialist - Enterprise Core',
      issued: 'June 2023',
      expires: 'June 2026',
      credentialId: 'CSCO14381062',
      icon: Award,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Professional Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <cert.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                  <p>Issued: {cert.issued}</p>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                  <p>Expires: {cert.expires}</p>
                </div>
                <div className="flex items-center">
                  <Key className="h-5 w-5 mr-2 text-gray-400" />
                  <p>Credential ID: {cert.credentialId}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;