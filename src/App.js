import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cca from './assets/images/ccalogo1.png';
import wdct from './assets/images/wdct1.png';
import wdctCorner from './assets/images/WDCTCorner.png';
import interview from './assets/images/undraw_interview.png';
import certificate from './assets/images/Certificate.png';
import sayan from './assets/images/SAYAN_MAJUMDER.png';
import somwrik from './assets/images/SOMWRIK_DUBEY.png';
import swarnalim from './assets/images/swarnalim_sonowal.png';
import saikat from './assets/images/SAIKAT_SARKAR.png';
import neeladri from './assets/images/NEELADRI_DHAR.png';
import hamburger_btn from './assets/images/hamburger_btn.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';



import Register from "./Register";
import LearnMore from './components/learnMore';

function App() {

  const [show, setShow] = useState(false);
  const [showLearn, setShowLearn] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div id='home'>

    <Navbar collapseOnSelect   variant="dark"  className="navbar">
      <Navbar.Brand href="#home" className='navbar-brand'>
      <img className='cca-logo' variant="top" src={cca} />
      <img className='wdct-logo' variant="top" src={wdct} />
      </Navbar.Brand>
      <button className='ham position-absolute end-0 me-4' onClick={handleShow}><i class="fa-solid fa-bars"></i></button>

      <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fs-2'><img src={wdct} />Design Workshop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='navDrop ps-2 fs-5'>
            <ul>
              <li>Details</li>
              <hr/>
              <li>Details</li>
              <hr/>
              <li>Details</li>
              <hr/>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>


      <div className='hero'>
        <div className='heroText'>
          <h1 textAlign="center" align="center" className='fw-bold'>Design Workshop</h1>
          <h3 className='my-4'> Learn Adobe Illustrator from scratch in two days</h3>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <Button onClick={()=> setShowLearn(true)} className='hBtn btn-md  px-5 py-3 mt-4 mx-2'  variant="outline-info">Learn More</Button>{' '}
          <Button onClick={()=> setShowLearn(false)} className='hBtn  btn-md  px-5 py-3 mt-4 mx-2'  variant="outline-info">Register</Button>{' '}
        </div>
      </div>
    </div>
    {
      showLearn ?
      <LearnMore/>
      :
     <Register />  
    }

    <div className="footer footer-text d-flex justify-content-center align-items-center position-relative bottom-0">
    <p className='mb-0 py-3' >Made with 💓 by Web Design & Creative Team, CCA.</p>
    </div>

     

    </>
  );
}

export default App;
