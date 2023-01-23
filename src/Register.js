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
    <div className='learn container pb-5'>
    <div className='description'>
        <h2 className='pb-3'>Register Yourself</h2>
        <p className='descTxt pb-3'>The workshop is free to attend and is available only for students of NIT Durgapur.</p>
      </div>
      
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control style={{backgroundColor:"#F5F5F5"}} type="text" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control style={{backgroundColor:"#F5F5F5"}} type="text" placeholder="Enter last name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control style={{backgroundColor:"#F5F5F5"}} type="email" placeholder="Enter email address" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control style={{backgroundColor:"#F5F5F5"}} type="tel" placeholder="Enter phone number" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Department</Form.Label>
          <Form.Select style={{backgroundColor:"#F5F5F5"}} defaultValue="Choose...">
            <option>Select department</option>
            <option>Computer Science and Engineering</option>
            <option>Electronics and Communication Engineering</option>
            <option>Electrical Engineering</option>
            <option>Chemical Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
            <option>Metallurgical and Materials Engineering</option>
            <option>Biotechnology</option>
            <option>Integrated Chemistry</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Year of Study</Form.Label>
          <Form.Select style={{backgroundColor:"#F5F5F5"}} defaultValue="Choose...">
            <option>Select year of study</option>
            <option>1st Year</option>
            <option>2nd Year</option>
          </Form.Select>
        </Form.Group>
      </Row>

      

      <Button className='regBtn mt-3' variant="primary" type="submit">
        Submit
      </Button>

      
    </Form>
    </div>
        </>
    )
}

export default Register;