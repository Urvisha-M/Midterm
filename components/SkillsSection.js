import React from 'react';
import { FaDatabase, FaCode, FaCoffee, FaChartBar, FaFileAlt, FaCss3Alt, FaHtml5, FaRProject } from 'react-icons/fa';

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="rectangle">
        <div className="skills-list">
          <div className="horizontal-list">
            <div className="skill-item">
              <FaDatabase size={30} color="#00536D" style={{ margin: '0 10px' }} />
              SQL
            </div>
            <div className="skill-item">
              <FaCode size={30} color="#00536D" style={{ margin: '0 10px' }} />
              Python
            </div>
            <div className="skill-item">
              <FaCoffee size={30} color="#00536D" style={{ margin: '0 10px' }} />
              Java
            </div>
            <div className="skill-item">
              <FaChartBar size={30} color="#00536D" style={{ margin: '0 10px' }} />
              Data Analysis
            </div>
          </div>
          <div className="horizontal-list">
            <div className="skill-item">
              <FaFileAlt size={30} color="#00536D" style={{ margin: '0 10px' }} />
              Microsoft
            </div>
            <div className="skill-item">
              <FaCss3Alt size={30} color="#00536D" style={{ margin: '0 10px' }} />
              CSS
            </div>
            <div className="skill-item">
              <FaHtml5 size={30} color="#00536D" style={{ margin: '0 10px' }} />
              HTML
            </div>
            <div className="skill-item">
              <FaRProject size={30} color="#00536D" style={{ margin: '0 10px' }} />
              R
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;