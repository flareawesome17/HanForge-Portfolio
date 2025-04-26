"use client";

import {
  Facebook,
  Github,
  Linkedin,
  ArrowUpCircle,
} from 'lucide-react';
import {useEffect, useState} from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#1C1B1B] text-[#ccc] py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HanForge. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 my-4">
          <a href="https://www.facebook.com/erniesaavedra.villaroya" target="_blank" rel="noopener noreferrer"
             className="hover:text-[#66FCF1]">
            <Facebook className="h-6 w-6"/>
          </a>
          <a href="https://www.linkedin.com/in/ernie-saavedra-jr-55a758284/" target="_blank"
             rel="noopener noreferrer" className="hover:text-[#66FCF1]">
            <Linkedin className="h-6 w-6"/>
          </a>
          <a href="https://github.com/flareawesome17" target="_blank" rel="noopener noreferrer"
             className="hover:text-[#66FCF1]">
            <Github className="h-6 w-6"/>
          </a>
        </div>
        <p className="text-xs">Built with passion by HanForge 🔥</p>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-[#45A29E] text-black p-2 rounded-full hover:bg-[#66FCF1] transition-colors duration-300"
          >
            <ArrowUpCircle className="h-6 w-6"/>
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
