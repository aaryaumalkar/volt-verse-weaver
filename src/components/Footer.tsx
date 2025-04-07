
import React from 'react';
import { Code, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 mt-10 text-center text-volt-navy/70">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span>Powered by rhymes, resistors,</span>
        <Heart size={14} className="text-pink-400" />
        <span>and a little imagination</span>
        <Sparkles size={14} className="text-yellow-400" />
      </div>
      <div className="mt-2 flex items-center justify-center gap-1 text-xs">
        <Code size={12} />
        <span>© {new Date().getFullYear()} Verse of the Volt</span>
      </div>
    </footer>
  );
};

export default Footer;
