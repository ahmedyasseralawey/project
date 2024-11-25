import React from 'react';
import { BookOpen } from 'lucide-react';

const Courses = () => {
  const courses = [
    'Aruba ACSA', 'Azure AZ-900', 'CCNA', 'CCNP Enterprise (ENARSI)',
    'CCNP Enterprise (ENCOR)', 'CCNP SISE', 'CCNP SVPN', 'CCNP Security (SCOR)',
    'CEH', 'CISSP', 'Cisco ACI', 'Cisco FTD-SNCF', 'CompTIA A+',
    'CompTIA Network+', 'CompTIA Security+', 'F5 LTM', 'FTTx',
    'Fortinet NSE 4', 'Fortinet NSE 5', 'Fortinet NSE 6', 'Fortinet NSE 7',
    'HCIA Datacom', 'HCIP Datacom', 'ITILv4', 'MCSA', 'Palo Alto PCNSE',
    'Python', 'RHCSA', 'Sophos'
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Professional Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 hover:bg-blue-50 cursor-pointer"
            >
              <BookOpen className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-800">{course}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;