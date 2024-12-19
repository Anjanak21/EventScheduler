
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import EventForm from './components/EventForm';
import Event from './components/Event';
import Sidebar from './components/Sideebar';
import Table from './components/Table';
import View from './components/View';
import SessionTable from './components/SessionTable';
import Viewsession from './components/viewsession';
import Onlysession from './components/Onlysession';
import EditEvent from './components/Edit';
import Managesession from './components/Managesession';
import OptimizedEvents from './components/Optimized';
import EditSession from './components/Editsession';
// import Delete from './components/Delete';




function App() {
  return (
    <div>
      <Container fluid>
        {/* Top Row for Event */}
        <Row>
          <Col>
            <Event />
          </Col>
        </Row>
        
        {/* Main Row for Sidebar and Form */}
        <Row>
          {/* Sidebar */}
          <Col md={3} className="bg-light">
            <Sidebar />
          </Col>
          

          
          <Col md={6} className="bg-light"> 
                  

                        {/* Form and Routes */}
         <Container fluid>
          <Col md={8}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<EventForm />} />
                {/* <Route path="/" element={<SessionForm />} /> */}
                <Route path="/session/:id" element={<SessionTable />}/>
                <Route path="/table" element={<Table />} />
                <Route path="/events/:id" element={<View/>} />
                <Route path="/viewsession" element={<Viewsession/>} />
                <Route path="/onlysession" element={<Onlysession/>}/>
                <Route path="/editevent/:id" element={<EditEvent/>}/>
                <Route  path="/managesession/:id" element={<Managesession/>}/>
                <Route path="/optimized" element={<OptimizedEvents/>}/>
                <Route path ="/Editsession/:id" element={<EditSession/>}/>
                

              </Routes>
            </BrowserRouter>
          </Col>
          </Container>
           </Col>
            
         
        
        </Row>
      </Container>
    </div>
  );
}

export default App;
