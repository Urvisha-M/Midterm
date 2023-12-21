import React from 'react';
import Header from '../components/Header';
import ProjectPart from '../components/ProjectPart';
import PingPongPart from '../components/PingPongPart';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div>
      <Header />
      <main>
        <ProjectPart />
        <PingPongPart />
        <Footer />
      </main>
    </div>
  )
}

export default Projects;