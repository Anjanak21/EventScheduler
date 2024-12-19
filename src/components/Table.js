// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Col, Container, Row, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import '../App.css';
// import { fetchEvents, tablefetch } from '../Api/api';




// function App() {
//   const [events, setEvents] = useState([]);

//   // Fetch data from the API
//   useEffect(() => {
//    tablefetch()
//       .then((response) => response.json())
//       .then((data) => setEvents(data))
//       .catch((error) => console.error('Error fetching events:', error));
//   }, []);

//   return (
//     <div>
//       <Container fluid>
//         {/* Main Row for Sidebar and Content */}
//         <Row>
//           {/* Sidebar */}
//           {/* <Col md={3} className="bg-light">
//             <Sidebar />
//           </Col> */}

//           {/* Content Section */}
//           <Col md={9}>
//             <BrowserRouter>
//               <Routes>
//                 {/* Main Route */}
//                 <Route
//                   path="/"
//                   element={
//                     <>
//                       {/* Table for MongoDB Data */}
//                       <Table striped bordered hover>
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>Name</th>
//                             <th>Date</th>
//                             <th>Description</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {events.map((event, index) => (
//                             <tr key={event._id}>
//                               <td>{index + 1}</td>
//                               <td>{event.name}</td>
//                               <td>{new Date(event.date).toLocaleDateString()}</td>
//                               <td>{event.description}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </Table>
//                     </>
//                   }
//                 />
//               </Routes>
//             </BrowserRouter>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteEventById, tablefetch } from '../Api/api';
import { Table, Button, Container } from 'react-bootstrap';
import EditEvent from './Edit';

function EventTable() {
  const [events, setEvents] = useState([]); // State to store events data

  // Fetch data from backend on component mount
  useEffect(() => {
    tablefetch()
    
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);


  const handleDelete=(id)=>{
    deleteEventById(id)
    .then(()=>{
      setEvents((prevEvents)=>prevEvents.filter((event)=>event._id!==id));
    })
    
     
  }
 

  return (
    <Container className="mt-8">
      <h1 className="text-center mb-4 text-primary" style={{
          fontSize: '2rem',
          fontWeight: 'bold',
        }}>Events</h1>
      <Table striped
        bordered
        // hover
        // responsive
        className="shadow-sm"
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
      <thead style={{
            backgroundColor: '#007bff',
            color: 'black',
            textAlign: 'center',
          }}>
          <tr >
            <th style={{backgroundColor:'#007afe'}}>#</th>
            <th style={{backgroundColor:'#007afe'}}>Title</th>
            {/* <th>Description</th> */}
            <th style={{backgroundColor:'#007afe'}}>Date</th>
            <th style={{backgroundColor:'#007afe'}}>Location</th>
            <th  style={{ width: "50%",backgroundColor:'#007afe'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{event.title}</td>
              {/* <td>{event.description}</td> */}
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{event.location}</td>
              <td>
              <div style={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center',
                  }}>
                <Button variant="primary" size="sm" style={{
                      padding: '5px 10px',
                      fontSize: '0.9rem',
                    }}>
                  <a href={`/events/${event._id}`} style={{
                        color: 'white',
                        textDecoration: 'none',
                      }}>View</a>
                </Button>
                <Button variant="danger" size="sm" className="me-2" onClick={()=>handleDelete(event._id)}>
                  <a href="" style={{
                      padding: '5px 10px',
                      color:'white',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                    }}>Delete</a>
                </Button>
                <Button variant="warning" size="sm">
                  <a href={`/editEvent/${event._id}`} style={{
                      padding: '5px 10px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      color: 'white',
                    }}>Edit</a>
                </Button>
                </div>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default EventTable;
