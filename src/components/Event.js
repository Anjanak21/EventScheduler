import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ListGroup, Card } from 'react-bootstrap'; // Importing ListGroup and Card from react-bootstrap
import axios from 'axios'; // Import axios to make HTTP requests

function Event() {
  const [events, setEvents] = useState([]); // State to store events data

  // Fetch events from the backend when the component mounts
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:3400/api/events'); // Replace with your backend URL
//         setEvents(response.data); // Set the events data
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents(); // Call fetchEvents function
//   }, []); // Empty dependency array means it runs only once when the component mounts

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" style={{ paddingLeft: '0px', paddingRight: '20px' }}>
        <Container fluid>
          <Navbar.Brand href="#home" style={{ marginLeft: '30px', fontWeight: 'bold', fontSize: '1.25rem' }}>
            Event Scheduler
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto" style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Nav.Link href="#home" style={{ margin: '0 15px', fontSize: '1rem', color: 'white' }}>Home</Nav.Link>
              <Nav.Link href="/table" style={{ margin: '0 15px', fontSize: '1rem', color: 'white' }}>Events</Nav.Link>
              <Nav.Link href="/onlysession" style={{ margin: '0 15px', fontSize: '1rem', color: 'white' }}>Sessions</Nav.Link>
              <Nav.Link href="#speakers" style={{ margin: '0 15px', fontSize: '1rem', color: 'white' }}>Speakers</Nav.Link>
              <Nav.Link href="#schedule" style={{ margin: '0 15px', fontSize: '1rem', color: 'white' }}>Schedule</Nav.Link>
              <Nav.Link href="#logout" style={{ margin: '0 15px', fontSize: '1rem', color: 'white' }}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Display fetched events */}
      
    </div>
  );
}

export default Event;
