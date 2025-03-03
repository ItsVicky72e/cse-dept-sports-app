import React, { useState } from 'react';
import NavBar from './NavBar';
import "../disall.css";

export default function DisplayAllEvents() {
  const [activeSport, setActiveSport] = useState('');

  const handleClick = (sport: React.SetStateAction<string>) => {
    setActiveSport(sport);
  };

  return (
    <div>
      <NavBar />

      <div className="intro-heading">
        <h4 className="h4">
          <b>
            <i>
              Welcome to the Sports App of the CSE Department. Sports are a good addition along with studies that will maintain the students' fitness.
              Our Department participates in various sports among which includes - Football, Cricket, Basketball, and many more.
              Visit the sports below to see all events and winners! Happy Sporting!!
            </i>
          </b>
        </h4>
      </div>

      <div className="d-flex justify-content-top button-container">
        <button onClick={() => handleClick('football')} className="btn sport_btn">Football</button>
        <button onClick={() => handleClick('cricket')} className="btn sport_btn">Cricket</button>
        <button onClick={() => handleClick('basketball')} className="btn sport_btn">Basketball</button>
      </div>

      {activeSport === 'football' && (
        <div className="sport-content">
          <img src="https://static.footballcounter.com/wp-content/uploads/2024/08/26022220/SUBROTO-U-15-QF-2-e1724599361848-872x520.jpeg" alt="Football Tournament" />
          <p><strong>A State Level FOOTBALL tournament was held during the college fest. Sportsmanship is acknowledged and highly supported in this college.</strong></p>
        </div>
      )}

      {activeSport === 'cricket' && (
        <div className="sport-content">
          <img src="https://images.mid-day.com/images/images/2014/sep/C_M.jpg" alt="Cricket Tournament" />
          <p><strong>A thrilling CRICKET tournament took place, showcasing exceptional talent and team spirit.</strong></p>
        </div>
      )}

      {activeSport === 'basketball' && (
        <div className="sport-content">
          <img src="https://static01.nyt.com/images/2019/10/06/magazine/06mag-indiannba/06mag-indiannba-videoSixteenByNineJumbo1600.jpg" alt="Basketball Tournament" />
          <p><strong>The BASKETBALL tournament was an electrifying event with incredible performances by teams.</strong></p>
        </div>
      )}
    </div>
  );
}