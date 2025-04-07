
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PoemGenerator from '@/components/PoemGenerator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 pb-10">
      <Header />
      
      <main className="flex-grow w-full max-w-4xl mx-auto py-6">
        <PoemGenerator />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
