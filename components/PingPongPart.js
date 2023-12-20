import React from 'react';
import { FaCode } from 'react-icons/fa';

const PingPongPart = () => {
  return (
    <section className="project-section">
      <h2 className="section-title">Ping Pong Game</h2>
      <div className="project-details">
        <div className="project-text">
          <p>Created a classic ping pong game using the turtle library in Python. Implemented collision detection and scoring system. A two-player game with player A on the left and player B on the right. Both players only move up and down by pressing key 'q' and 'a' for player A, and key 'Up' and 'Down' for player B. Each time a player touches the ball, one point is added to their total score, which is displayed at the top of the game screen. When the ball crosses the borders of the board, the game restarts.</p>
        </div>
        <div className="project-image">
          <img src="images/python.webp" alt="Project Image 2" />
          <div className="blue-stroke"></div>
        </div>
      </div>
      <div className="project-links">
        <div onClick={() => window.open("https://drive.google.com/file/d/1sVRoiuBpeGJJH5cO0b3x4ElP3bpXmwrc/view?usp=share_link", "_blank")} className="icon-link"><FaCode size={30} /></div>
      </div>
    </section>
  );
};

export default PingPongPart;