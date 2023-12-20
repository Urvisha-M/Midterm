import React from 'react';
import HeroSection from '../components/HeroSection';
import ContentImages from '../components/ContentImages';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ContentImages />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;