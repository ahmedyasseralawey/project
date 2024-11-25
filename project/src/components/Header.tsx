import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { searchQuery, setSearchQuery, clearHighlights } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const performSearch = useCallback((query: string) => {
    clearHighlights();

    if (!query.trim()) return;

    const searchRegex = new RegExp(query.trim(), 'gi');
    const sections = document.querySelectorAll('section');
    let firstMatch: Element | null = null;

    sections.forEach(section => {
      const textNodes = Array.from(section.querySelectorAll('h1, h2, h3, p, li, span'))
        .filter(el => !el.closest('.search-highlight')); // Avoid re-searching highlighted elements

      let hasMatch = false;

      textNodes.forEach(element => {
        const originalText = element.textContent || '';
        if (searchRegex.test(originalText)) {
          hasMatch = true;
          const highlightedText = originalText.replace(
            searchRegex,
            match => `<mark class="search-highlight bg-yellow-200 px-1 rounded">${match}</mark>`
          );
          element.innerHTML = highlightedText;
        }
      });

      if (hasMatch) {
        section.classList.add('search-match');
        if (!firstMatch) firstMatch = section;
      }
    });

    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [clearHighlights]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, performSearch]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#courses', label: 'Courses' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Ahmed Alawey
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInput}
                className="pl-10 pr-4 py-1.5 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-48 transition-all duration-300 focus:w-64"
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white shadow-lg rounded-b-lg">
            <div className="relative mb-4 px-4">
              <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInput}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;