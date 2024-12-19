import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Page3 = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here, you can add logic to handle the form data (e.g., sending it to a server).
  };

  return (
    <Container className="mt-5">
      <h2>Create Speaker</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter event title" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="description" className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Enter event description" 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="date" className="mt-3">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="location" className="mt-3">
          <Form.Label>Location</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter event location" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Page3;