import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Hello, I'm Ahmed Alawey
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 animate-fade-in-delay-1">
            A Networking and Cybersecurity Specialist
          </p>
          <p className="text-lg text-gray-300 mb-12 animate-fade-in-delay-2">
            Empowering Secure and Efficient IT Solutions
          </p>
          <a
            href="#certifications"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-3"
          >
            View My Certifications
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Animated circuit lines */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M 10 10 L 190 10 L 190 190 L 10 190 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-400 animate-circuit"
          />
          <path
            d="M 40 40 L 160 40 L 160 160 L 40 160 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-300 animate-circuit-delay-1"
          />
          <path
            d="M 70 70 L 130 70 L 130 130 L 70 130 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-200 animate-circuit-delay-2"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;