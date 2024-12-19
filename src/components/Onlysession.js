// import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import { fetchSessions, fetchEvents } from '../Api/api'; // Assume these APIs exist
import { useEffect, useState } from 'react';

function Onlysession() {
  const [sessions, setSessions] = useState([]);
  const [events, setEvents] = useState({});
 // Store events in an object for quick lookup

 useEffect(() => {
  fetchEvents()
    .then((response) => {
      const eventsById = {};
      response.data.forEach((event) => {
        eventsById[event._id] = event; // Map events by their ID
      });
      console.log('Fetched Events:', eventsById);
      setEvents(eventsById);

      fetchSessions()
        .then((response) => {
          console.log('Fetched Sessions:', response.data);
          setSessions(response.data);
        })
        .catch((error) => console.error('Error fetching sessions:', error));
    })
    .catch((error) => console.error('Error fetching events:', error));
}, []);



  // const styles = {
  //   container: {
  //     padding: '20px',
  //     textAlign: 'left', // Align the content to the left
  //   },
  //   card: {
  //     marginBottom: '20px',
  //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  //   },
  //   cardHeader: {
  //     backgroundColor: '#0000ff',
  //     color: 'white',
  //     fontWeight: 'bold',
  //     borderRadius: '10px 10px 0 0',
  //   },
  //   cardBody: {
  //     fontSize: '16px',
  //     lineHeight: '1.5',
  //   },
  //   button: {
  //     marginRight: '10px',
  //     borderRadius: '5px',
  //     padding: '10px 15px',
  //     backgroundColor: 'primary',
  //     color: 'white',
  //     textDecoration: 'none',
  //   },
    
  // };
  

  return (
    <div>
      <h2 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Sessions</h2>
      {sessions.map((session) => {
        const event = events[session.event_id]; 
        // Find the corresponding event by ID
        
        
        return (
          <Card key={session._id} style={{
            marginBottom: '20px',
            border: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            transition: 'transform 0.2s',
          }}>
            <Card.Header style={{
                backgroundColor: '#007bff',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 15px',
                borderRadius: '10px 10px 0 0',
              }} >{event ? event._id:'Event not found'}</Card.Header>
            <Card.Body>
              <Card.Title>{session.title}</Card.Title>
              <Card.Text>
                {/* <strong>Description:</strong> {session.description || 'No description'} */}
                <br />
                <strong>Event:</strong> {event ? event._id : 'Unknown Event'}
                <br />
                <strong>Start time:</strong> {session.start_time}
                <br />
                <strong>End time:</strong> {session.end_time}
                <br />
                <strong>Created at:</strong> {session.created_at|| 'No location'}
                <br />
                <strong>Updated at:</strong> {session.updated_at|| 'No location'}
                <br />
                <strong>Speakers Name:</strong>{session.speakers_name ||'no name'}
                {/* <strong>location:</strong>{event.location} */}
              </Card.Text>
              
              </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Onlysession;
       
