import React from 'react';
import { Linkedin, Github, Youtube, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ahmed-alawey-b42934227',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ahmedyasseralawey',
      icon: Github,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@SecuraCore',
      icon: Youtube,
    },
    {
      name: 'Email',
      url: 'mailto:ahmedyasseralawey@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            Let's connect and discuss how I can help secure and optimize your IT infrastructure.
          </p>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-all duration-300"
              >
                <link.icon className="h-8 w-8 text-gray-600 hover:text-blue-600" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;