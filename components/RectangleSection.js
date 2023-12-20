import React from 'react';
import { FaMobileAlt, FaChartLine, FaDesktop, FaLaptopCode } from 'react-icons/fa';

const RectangleSection = () => {
  return (
    <section className="rectangle-section">
      <div className="rectangle-box">
        <div className="rectangle-text">
          <p>DATA ANALYST</p>
        </div>
        <div className="rectangle-icons">
          <FaMobileAlt size={60} color="#000000" style={{ margin: '20 60px' }} />
          <FaChartLine size={60} color="#000000" style={{ margin: '20 60px' }} />
          <FaDesktop size={60} color="#000000" style={{ margin: '20 60px' }} />
          <FaLaptopCode size={60} color="#000000" style={{ margin: '20 60px' }} />
        </div>
      </div>
    </section>
  );
};

export default RectangleSection;