import React from 'react';

const EducationSection = () => {
  return (
    <section className="education-section">
      <div className="education-content">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <div className="year-box">2023-2024</div>
          <h4>M.S. in Business & Information System | New Jersey Institute of Technology</h4>
        </div>
        <div className="education-item">
          <div className="year-box">2021-2023</div>
          <h4>B.S. in Business Analytics & Information Technology | Rutgers University</h4>
        </div>
        <div className="education-item">
          <div className="year-box">2019-2021</div>
          <h4>A.S. in Business Information System | Middlesex County College</h4>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;