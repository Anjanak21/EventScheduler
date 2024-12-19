import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchEvents } from '../Api/api';

function Viewsession() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then((response) => {
        console.log(response);
        
        setEvents(response.data)
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
  //   button: {
  //     marginRight: '10px',
  //     borderRadius: '5px',
  //     padding: '10px 15px',
  //     backgroundColor: 'primary', // Set button color to white
  //     color: 'white', // Set text color to black
  //     textDecoration: 'none', // Remove text decoration from the link
  //   },
  // };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
    }}>
      <h2 style={{
          marginBottom: '20px',
          fontWeight: 'bold',
          fontSize: '28px',
          textAlign: 'center',
          color: '#333',
        }}>Events</h2>
      {events.map((event) => (
        <Card key={event._id} style={{
          marginBottom: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          border: 'none',
          overflow: 'hidden',
        }}>
          <Card.Header >{event.title}</Card.Header>
          <Card.Body style={{
              padding: '15px',
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#333',
            }}>
            <Card.Title style={{ marginBottom: '15px', fontSize: '20px' }}>{event.title}</Card.Title>
            <Card.Text>
              <strong>Description:</strong> {event.description}
              <br />
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
              <br />
              <strong>Location:</strong> {event.location}
            </Card.Text>
            <Button variant="primary" style={{
                marginRight: '10px',
                padding: '10px 20px',
                borderRadius: '5px',
                backgroundColor: '#007bff',
                borderColor: '#007bff',
              }} >
              <a href={`/session/${event._id}`} style={{
                  color: 'white',
                  textDecoration: 'none',
                }}>Create Session</a>
            </Button>
            <Button variant="danger" 
            style={{
                padding: '10px 20px',
                borderRadius: '5px',
                backgroundColor: '#dc3545',
                borderColor: '#dc3545',
                
                color: 'white',
              }}> <a href={`/managesession/${event._id}`} style={{
                color: 'white',
                textDecoration: 'none',}}>
              Manage session </a>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Viewsession;