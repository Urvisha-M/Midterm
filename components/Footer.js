import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaAddressCard, FaCopyright, FaCopy, FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="column" id="contact">
        <p>PORTFOLIO</p>
      </div>
      <div className="column" id="Index.js">
        <h3>Portfolio</h3>
        <Link href="/">
          <div className="footer-link"><FaHome size={20} color="#00536D" /> Home</div>
        </Link>
        <Link href="/About">
          <div className="footer-link"><FaUser size={20} color="#00536D" /> About Me</div>
        </Link>
        <Link href="/Projects">
          <div className="footer-link"><FaAddressCard size={20} color="#00536D" /> Projects</div>
        </Link>
        <Link href="#contact">
          <div className="footer-link"><FaAddressCard size={20} color="#00536D" /> Contact</div>
        </Link>
      </div>
      <div className="column">
        <h3>Privacy Policy</h3>
        <Link href="#">
          <div className="footer-link"><FaCopyright size={20} color="#00536D" /> Copyrights</div>
        </Link>
        <Link href="#">
          <div className="footer-link"><FaCopy size={20} color="#00536D" /> Terms of Service</div>
        </Link>
      </div>
      <div className="column">
        <h3>Contact</h3>
        <Link href="#">
          <div className="footer-link"><FaEnvelope size={20} color="#00536D" /> Email</div>
        </Link>
        <Link href="https://www.linkedin.com/in/urvisha-mevdawala-967783220/">
          <div className="footer-link"><FaLinkedin size={20} color="#00536D" /> LinkedIn</div>
        </Link>
        <Link href="#">
          <div className="footer-link"><FaTwitter size={20} color="#00536D" /> Twitter</div>
        </Link>
        <Link href="https://github.com/Urvisha-M">
          <div className="footer-link"><FaGithub size={20} color="#00536D" /> Github</div>
        </Link>
      </div>
      <div className="column">
        <div className="get-in-touch-form">
          <p className="get-in-touch-text">Get In Touch</p>
          <div className="email-box">
            <input type="email" placeholder="Email Address" required />
            <div className="submit-box">
              <div className="submit-box">
                <input type="submit" value="SUBMIT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;