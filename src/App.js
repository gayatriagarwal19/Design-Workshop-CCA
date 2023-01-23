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

function App() {

  const [show, setShow] = useState(false);

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
      <button className='position-absolute end-0 me-4' onClick={handleShow}><img src={hamburger_btn} /></button>

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
          <h1 textAlign="center" align="center">Design Workshop</h1>
          <h3 className='my-4'> Learn Adobe Illustrator from scratch in two days</h3>
        </div>
        <div>
          <Button className='px-5 py-3 mt-4 mx-2' size="md" variant="outline-info">Learn More</Button>{' '}
          <Button className='px-5 py-3 mt-4 mx-2' size="md" variant="info">Register</Button>{' '}
        </div>
      </div>
    </div>
    <div className='container pb-5'>
      <div className='description'>
        <h2 className='pb-3'>Description</h2>
        <p className='descTxt pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa reprehenderit veritatis repudiandae, praesentium quae autem nihil non suscipit voluptatum explicabo, quasi officia at. Numquam nisi aspernatur quas libero ducimus?</p>
      </div>
      <div className='details'>
        <div className='day'>
            <p className='descTxt pe-5'>Day1: </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa reprehenderit veritatis repudiandae, praesentium quae autem nihil non suscipit voluptatum explicabo, quasi officia at. Numquam nisi aspernatur quas libero ducimus?</p>
        </div>
        <div className='day'>
            <p className='descTxt pe-5'>Day2: </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa reprehenderit veritatis repudiandae, praesentium quae autem nihil non suscipit voluptatum explicabo, quasi officia at. Numquam nisi aspernatur quas libero ducimus?</p>
        </div>
      </div>
      <div className='description py-5'>
        <h2 className='pb-3'>What’s in for you</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa reprehenderit veritatis repudiandae, praesentium quae autem nihil non suscipit voluptatum explicabo, quasi officia at. Numquam nisi aspernatur quas libero ducimus?</p>
      </div>
      <Row className='gx-5'>
        <Col sm={4}>
        <Card className='card' >
          <Card.Img variant="top" className='certificate' src= {certificate} style={{ width: '50%' }}/>
          <Card.Body>
            <Card.Title align='center'>Certificate</Card.Title>
            <Card.Text align='center'>
              of participation for all the 
              participants
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={4}>
        <Card className='card'>
          <Card.Img className='wdctCorner' variant="top" src={wdctCorner} />
          <Card.Body>
            <Card.Title align='center'>Top Entries</Card.Title>
            <Card.Text align='center'>
            will be featured in 
            WDCT corner.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={4}>
        <Card className='card'>
          <Card.Img variant="top" className='interview' src={interview} style={{ width: '80%' }}/>
          <Card.Body>
            <Card.Title align='center'>Top Performers</Card.Title>
            <Card.Text align='center'>
            will get an advantage in
            auditions
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <div className='description pt-5 pb-5'>
        <h2>Mentor</h2>
      </div>
      <Row className='mentor'>
        <Col sm={5} className='mentor1'>
          <Row>
          <Col sm={5}>
            <img className='mentorImg' src={sayan}/>
          </Col>
          <Col sm={7} className='mentorTxt'>
            <h3 className='pt-2 pb-2' >Sayan Majumder</h3>
            <h4 className='pb-2'>Head, WDCT,CCA</h4>
            <h3 className='mentorLinks'><i class="fa-brands fa-behance pe-2"></i> <i class="fa-brands fa-linkedin-in"></i> </h3>
          </Col>
          </Row>
        </Col>
        <Col sm={7} className='mentor2'>
          <p className='pt-2'>
          Every firm has stories to tell—stories that will not only engage, inform, surprise, delight, and impact their audience, but that will also deliver on measurable goals. And I am the conduit between the firm and consumer.
          </p>
          <p>
            I help clients find the subject and medium that best fits their unique identity, and then I produce high-quality content that meets their objectives.
          </p>
        </Col>
      </Row>
      <div className='description pt-5 pb-5'>
        <h2>Coordinators</h2>
      </div>
      <Row>
        <Col sm={3}>
        <Card className='coordinatorCard pb-2' >
          <Card.Img variant="top" className='coordinatorImg' src={somwrik}/>
          <Card.Body>
            <Card.Title align='center' className='coordinatorName'>Somwrik Dubey</Card.Title>
            <Card.Text align='center'>
            Senior member<br/>
            WDCT,CCA
            </Card.Text>
            <Card.Title align='center'><h3><i class="fa-brands fa-linkedin-in pe-2"></i> <i class="fa-brands fa-behance"></i></h3></Card.Title>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={3}>
        <Card className='coordinatorCard pb-2' >
          <Card.Img variant="top" className='coordinatorImg' src={swarnalim} />
          <Card.Body>
            <Card.Title align='center' className='coordinatorName'>Swarnalim Sonowal</Card.Title>
            <Card.Text align='center'>
            Senior member<br/>
            WDCT,CCA
            </Card.Text>
            <Card.Title align='center'><h3><i class="fa-brands fa-linkedin-in pe-2"></i> <i class="fa-brands fa-behance"></i></h3></Card.Title>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={3}>
        <Card className='coordinatorCard pb-2' >
          <Card.Img variant="top" className='coordinatorImg' src={neeladri} />
          <Card.Body>
            <Card.Title align='center' className='coordinatorName'>Neeldari Dhar</Card.Title>
            <Card.Text align='center'>
            Senior member<br/>
            WDCT,CCA
            </Card.Text>
            <Card.Title align='center'><h3><i class="fa-brands fa-linkedin-in pe-2"></i> <i class="fa-brands fa-behance"></i></h3></Card.Title>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={3}>
        <Card className='coordinatorCard pb-2' >
          <Card.Img variant="top" className='coordinatorImg' src={saikat} />
          <Card.Body>
            <Card.Title align='center' className='coordinatorName'>Saikat Sarkar</Card.Title>
            <Card.Text align='center'>
            Senior member<br/>
            WDCT,CCA
            </Card.Text>
            <Card.Title align='center'><h3><i class="fa-brands fa-linkedin-in pe-2"></i> <i class="fa-brands fa-behance"></i></h3></Card.Title>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </div>
    <div className="footer footer-text position-relative bottom-0">
    <p>Made with 💓 by Web Design & Creative Team, CCA.</p>
    </div>

      {/* <Register />   */}
     

    </>
  );
}

export default App;
