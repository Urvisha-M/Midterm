import React from 'react';
import Link from 'next/link';

const ProjectsSection = () => {
  return (
    <section className="projects_section" id="projects">
      <div className="projects-header">
        <h2>Projects</h2>
      </div>
      <div className="projects-cards">
        <div className="project-card">
          <img className="image" src="images/portfolio.webp" alt="Placeholder image" />
          <div className="info">
            <h2>Portfolio Website Development</h2>
            <p>Designed and developed a responsive portfolio website</p>
            <Link href="/Projects">
              <div className="blue-button">READ MORE</div>
            </Link>
          </div>
        </div>

        <div className="project-card">
          <img className="image" src="images/python.webp" alt="placeholder image" />
          <div className="info">
            <h2>Ping Pong Game</h2>
            <p>Implemented collision detection and scoring system </p>
            <Link href="/Projects">
              <div className="blue-button">READ MORE</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;