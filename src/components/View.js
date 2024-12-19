
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getEventsById, tablefetch } from '../Api/api';
import { useParams } from 'react-router-dom';


function View() {
  const [events, setEvents] = useState([]); // State to store events data
  const {id}=useParams();

  // Fetch data from backend on component mount
  useEffect(() => {
    getEventsById(id)
      .then((response) => setEvents([response.data]))
      .catch((error) => console.error('Error fetching events:', error));
  }, [id]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Events</h1>
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-item mb-4 p-3 border rounded bg-light">
            <h3>{index + 1}. {event.title}</h3>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default View;