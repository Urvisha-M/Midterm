import React from 'react';
import Link from 'next/link';

const ContentAbout = () => {
  return (
    <section className="content-img" id="about-me">
      <div className="content-left">
        <img src="images/self.webp" alt="about me" />
      </div>
      <div className="content-right">
        <h1>About Me</h1>
        <p>Hi, my name is Urvisha Mevdawala. I recently graduated with a Bachelor of Science in Business Analytics and Information Technology from Rutgers University. I am a full-time student currently pursuing a master's degree in Business and Information Systems. I have refined my communication and teamwork competencies through prior roles and my involvement in campus organizations. I am a diligent and committed individual, driven by a strong desire for continuous learning and professional growth.</p>
      </div>
    </section>
  );
};

export default ContentAbout;