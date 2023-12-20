import React from 'react';
import { FaGithub, FaCode, FaFigma } from 'react-icons/fa';

const ProjectPart = () => {
  return (
    <section className="project-section">
      <h2 className="project-title">Portfolio Website Development</h2>
      <div className="project-details">
        <div className="project-text">
          <p>Designed and developed a responsive portfolio website to showcase skills, projects, and experiences. It features a dynamic landing page that engages visitors, an about me page providing insight into my background, and a comprehensive project page for quick access to my work. The responsive design ensures viewing on various devices.</p>
        </div>
        <div className="project-image">
          <img src="images/portfolio.webp" alt="Project Image" />
          <div className="blue-stroke"></div>
        </div>
      </div>
      <div className="project-links">
        <div onClick={() => window.open("https://github.com/NJIT-WIS/midterm-portfolio-Urvisha-M", "_blank")} className="icon-link"><FaGithub size={30} /></div>
        <div onClick={() => window.open("https://github.com/NJIT-WIS/midterm-portfolio-Urvisha-M/issues", "_blank")} className="icon-link"><FaCode size={30} /></div>
        <div onClick={() => window.open("https://www.figma.com/file/108agGvapUcvQInFgX79OP/Portfolio-Website-Draft-(Copy)?type=design&node-id=739%3A2&mode=design&t=yW4bjwhU8p1KTrs0-1", "_blank")} className="icon-link"><FaFigma size={30} /></div>
      </div>
    </section>
  );
};

export default ProjectPart;