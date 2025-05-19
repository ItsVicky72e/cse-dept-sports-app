import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

export default function SearchEvent() {
  const [eventName, setEventName] = useState('');
  const [eventData, setEventData] = useState<any>(null);

  const searchItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("item--->" + eventName);
    axios
      .get(`http://localhost:8080/cse/dept/sports/search?eventName=${eventName}`)
      .then((res: any) => {
        console.log("res--->", res.data);
        setEventData(res.data); // Save data to state
      })
      .catch(err => {
        console.error("Error fetching event data:", err);
      });
  };

  const getEventName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <div>
        <form onSubmit={searchItem}>
          <input type="text" onChange={getEventName} />
          <input type="submit" />
        </form>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Event Name</th>
              <th scope="col">Event Date</th>
              <th scope="col">Sport Name</th>
              <th scope="col">Sport Type</th>
            </tr>
          </thead>
          <tbody>
            {eventData ? (
              <tr>
                <td>{eventData.eventName}</td>
                <td>{eventData.eventDate}</td>
                <td>{eventData.sportName}</td>
                <td>{eventData.sportType}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center' }}>
                  No event data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
