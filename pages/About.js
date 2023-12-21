import React from 'react';
import Header from '../components/Header';
import ContentAbout from '../components/ContentAbout';
import RectangleSection from '../components/RectangleSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <ContentAbout />
        <RectangleSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <Footer /> 
      </main>
    </div>
  );
};

export default About;