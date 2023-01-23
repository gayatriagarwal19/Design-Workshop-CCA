import './App.css';
import React from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Register(){
    return (
        <>
    <div className='container'>
      <div className='register'>
        <h2>Register Yourself</h2>
        <p>The workshop is free to attend and is available only for students of NIT Durgapur.</p>
      </div>
      
      <Row className="g-2 form-box">
      <Col md className='left-form-box'>
        <FloatingLabel controlId="floatingInputGrid" label="First Name" > 
          <Form.Control type="text" placeholder="Enter first name" />
        </FloatingLabel>
      </Col>
      <Col md>
      <FloatingLabel controlId="floatingInputGrid" label="Last Name">
          <Form.Control type="text" placeholder="Enter last name" />
        </FloatingLabel>
      </Col>
    </Row>

      <Row className="g-2 form-box">
      <Col md className='left-form-box'>
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="Enter email" />
        </FloatingLabel>
      </Col>
      <Col md>
      <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
          <Form.Control type="tel" placeholder="Enter phone number" />
        </FloatingLabel>
      </Col>
    </Row>

    <Row className="g-2 form-box">
      <Col md className='left-form-box'>
        <FloatingLabel controlId="floatingInputGrid" label="Department">
          <Form.Control type="text" placeholder="Enter department" />
        </FloatingLabel>
      </Col>
      <Col md>
      <FloatingLabel controlId="floatingInputGrid" label="Year of Study">
          <Form.Control type="text" placeholder="Enter year of study" />
        </FloatingLabel>
      </Col>
    </Row>

    <Row className="g-2">
      <Col md>
        <Button variant="dark" type="submit" size="lg" className='form-button'>
          Submit
        </Button>
      </Col>
    </Row>
    </div>
        </>
    )
}

export default Register;