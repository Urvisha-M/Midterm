import React from 'react';
import Link from 'next/link';

const ContentImages = () => {
  return (
    <section className="content-img" id="about-me">
      <div className="content-left">
        <img src="images/self.webp" alt="about me" />
      </div>
      <div className="content-right">
        <h1>About Me</h1>
        <p>Hi, my name is Urvisha Mevdawala. I recently graduated with a Bachelor of Science in Business Analytics and Information Technology from Rutgers University. I am a full-time student currently pursuing a master's degree in Business and Information Systems.</p>
        <Link href="/About">
          <div className="read-more-button">Read More</div>
        </Link>
      </div>
    </section>
  );
};

export default ContentImages;