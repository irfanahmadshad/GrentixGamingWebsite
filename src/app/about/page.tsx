import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
