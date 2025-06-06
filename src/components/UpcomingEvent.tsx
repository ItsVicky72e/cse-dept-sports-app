import React, { useState } from 'react';
import NavBar from './NavBar';
import "../styles.css"; 

export default function UpcomingEvent() {
  const [activeEvent, setActiveEvent] = useState('');

  const events: Record<string, { description: string; contact: string }> = {
    "MLRIT Football": {
      description: "The MLRIT Football Tournament is an inter-college event featuring top teams competing for the championship title. Open for both undergraduate and postgraduate students.",
      contact: "Rohit Sharma - 9876543210"
    },
    "VBIT Cricket": {
      description: "The VBIT Cricket Cup is a T-20 format tournament that brings together the best cricketing talent from various colleges. Limited team slots available!",
      contact: "Arjun Reddy - 9123456789"
    },
    "CVSR Football": {
      description: "CVSR College is organizing a thrilling football tournament where teams will battle it out for glory. Great platform to showcase your football skills!",
      contact: "Sandeep Kumar - 8987654321"
    },
    "GITAM Basketball": {
      description: "GITAM University is hosting an inter-college basketball tournament with exciting rewards for the winning team. Get ready to dunk!",
      contact: "Vikram Singh - 8569741230"
    },
    "HITAM Cricket": {
      description: "The HITAM Cricket Championship is a knock-out style tournament. Open registration for college teams. Come and compete!",
      contact: "Pranav Joshi - 9345678901"
    }
  };

  return (
    <div>
      <NavBar />
      <h2 className="heading">Upcoming Sports Events</h2>
      <ul className="event-list">
        {Object.keys(events).map((event) => (
          <li key={event} onClick={() => setActiveEvent(event)} className="event-item">
            {event}
          </li>
        ))}
      </ul>

      {activeEvent in events && (
        <div className="event-details">
          <h3>{activeEvent}</h3>
          <p><strong>About:</strong> {events[activeEvent].description}</p>
          <p><strong>Contact:</strong> {events[activeEvent].contact}</p>
        </div>
      )}
    </div>
  );
}