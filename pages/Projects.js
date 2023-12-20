import React from 'react';
import Header from '../components/Header';
import ProjectPart from '../components/ProjectPart';
import PingPongPart from '../components/PingPongPart';

const Projects = () => {
  return (
    <div>
      <Header />
      <main>
        <ProjectPart />
        <PingPongPart />
      </main>
    </div>
  )
}

export default Projects;