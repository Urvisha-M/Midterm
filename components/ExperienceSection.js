import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-content">
        <img src="images/bag.webp" alt="Job Image" />
        <div className="experience-details">
          <div className="experience-item">
            <h2 className="section-title">Experience</h2>
            <div className="year-box">2020-2022</div>
            <h3>Cashier</h3>
            <p>Ensured each customer received outstanding service by providing a friendly environment. Interacted with co-workers, manager, and customers to provide better services.</p>
          </div>
          <div className="experience-item">
            <div className="year-box">2018-2019</div>
            <h3>Associate</h3>
            <p>Greeting and assisting customers with orders while ensuring satisfaction and managing cash registers. Resolving all customer complaints quickly for customer satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;