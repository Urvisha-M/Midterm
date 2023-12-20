import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <div className="logo">PORTFOLIO</div>
      </Link>
      <nav className="menu">
        <Link href="/">
          <div className="menu-item">Home</div>
        </Link>
        <Link href="/About">
          <div className="menu-item">About Me</div>
        </Link>
        <Link href="/Projects">
          <div className="menu-item">Projects</div>
        </Link>
        <Link href="/">
          <div className="menu-item">Contact</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;