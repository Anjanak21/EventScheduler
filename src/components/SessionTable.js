import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { createSession } from '../Api/api';
import { useParams } from 'react-router-dom';

const SessionForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    start_time: '',
    end_time: '',
    speakers_name: '',
    event_id: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      start_time: new Date(`1970-01-01T${formData.start_time}:00Z`).toISOString(),
      end_time: new Date(`1970-01-01T${formData.end_time}:00Z`).toISOString(),
    };

    try {
      await createSession(formattedData); // Send to backend
      alert('Session created successfully!');
      setFormData({ ...formData, title: '', start_time: '', end_time: '', speakers_name: '' });
    } catch (error) {
      console.error('Error creating session:', error);
      alert(error.response?.data?.message || 'Failed to create session. Please try again.');
    }
  };

  return (
    <Container className="mt-3" style={{ float: 'left' }}>
      <h2>Create Session</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mt-3">
          <Form.Label>Session Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter session title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="start_time" className="mt-3">
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="end_time" className="mt-3">
          <Form.Label>End Time</Form.Label>
          <Form.Control
            type="time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="speakers_name" className="mt-3">
          <Form.Label>Speakers Name</Form.Label>
          <Form.Control
            type="text"
            name="speakers_name"
            value={formData.speakers_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Save
        </Button>

        <Button
          variant="secondary"
          type="button"
          className="mt-4"
          style={{ marginLeft: '10px' }}
          onClick={() => setFormData({ ...formData, title: '', start_time: '', end_time: '', speakers_name: '' })}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default SessionForm;
