
import React from 'react';
import { Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center py-6 md:py-10">
      <div className="flex items-center justify-center gap-2 mb-2">
        <h1 className="text-3xl md:text-4xl font-mono font-bold tracking-tight">
          Verse of the Volt
        </h1>
        <Zap className="text-yellow-400" size={28} />
      </div>
      <p className="text-volt-navy/80 max-w-2xl mx-auto text-sm md:text-base">
        Engineering meets poetry—spark your creativity in circuits and sonnets.
      </p>
    </header>
  );
};

export default Header;
