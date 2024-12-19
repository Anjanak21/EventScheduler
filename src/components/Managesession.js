// import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchsessionByEventId,deleteSession} from '../Api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Managesession() {
    const{id}=useParams()
    // console.log(id);
    
  
  const [session,setSession]=useState([]);

//   useEffect(() => {
//     fetchEvents()
//       .then((response) => {
//         // console.log(response);
        
//         setEvents(response.data)
//     })
//       .catch((error) => console.error('Error fetching events:', error));
//   }, []);
// useEffect(() => {
//     fetchsessionByEventId()
//       .then((response) => {
//         setSession(response.data);
//         console.log(response.data);
        
//       })
//       .catch((error) => console.error("Error fetching events:", error));
//   }, []); // Dependency array
useEffect(() => {
    fetchsessionByEventId(id)
      .then((response) => setSession(response.data))
      .catch((error)=>{console.error('error fetching sessions:',error)});
},[id]);
        
const handleDelete = (id) => {
    deleteSession(id)
      .then(() => {
        setSession((prevSessions) => prevSessions.filter((event) => event._id !== id));
      })
      .catch((err) => console.error('Error deleting event:', err));
};
  

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
        }}>Session</h2>
      {session.map((session) => (
        <Card key={session._id} style={{
          marginBottom: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          border: 'none',
          overflow: 'hidden',
        }}>
          <Card.Header >{session.title}</Card.Header>
          <Card.Body style={{
              padding: '15px',
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#333',
            }}>
            <Card.Title style={{ marginBottom: '15px', fontSize: '20px' }}>{session.title}</Card.Title>
            <Card.Text>
              <strong>Start Time:</strong> {session.start_time}
              <br />
              <strong>End_Time:</strong> {session.end_time}
              <br />
              <strong>created_at:</strong> {new Date(session.created_at).toLocaleDateString()}
              <br />
              <strong>Speaker:</strong> {session.speakers_name}
              <br />
            </Card.Text>
            <Button variant="primary" style={{
                marginRight: '10px',
                padding: '10px 20px',
                borderRadius: '5px',
                backgroundColor: '#007bff',
                borderColor: '#007bff',
              }} >
              <a href={`/Editsession/${session._id}`} style={{
                  color: 'white',
                  textDecoration: 'none',
                }}>Edit</a>
            </Button>
            <Button variant="danger" onClick={()=>handleDelete(session._id)} style={{
                padding: '10px 20px',
                borderRadius: '5px',
                backgroundColor: '#dc3545',
                borderColor: '#dc3545',
                color: 'white',
              }}>
             Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Managesession;