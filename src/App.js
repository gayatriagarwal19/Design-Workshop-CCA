import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css';
import cca from './assets/images/ccalogo1.png';
import wdct from './assets/images/wdct1.png';



import LearnMore from './components/learnMore';
import Register from "./components/register";

function App() {

  const [show, setShow] = useState(false);
  const [showLearn, setShowLearn] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const scrollToElement = (id) => {
    const section = document?.querySelector(`#${id}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <>
      <div id='home'>

        <Navbar collapseOnSelect variant="dark" className="navbar">
          <Navbar.Brand href="#home" className='navbar-brand'>
            <img className='cca-logo' variant="top" src={cca} />
            <img className='wdct-logo' variant="top" src={wdct} />
          </Navbar.Brand>
          <button className='ham position-absolute end-0 me-4' onClick={handleShow}><i class="fa-solid fa-bars"></i></button>

          <Offcanvas placement='end' show={show} onHide={handleClose}>
            <Offcanvas.Header className='border-bottom' closeButton>
              <Offcanvas.Title className='fs-4'><img src={wdct} />Design Workshop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className='navDrop px-2 py-3 fs-5'>
                <ul>
                  <li>
                    <a href="https://www.ccanitd.in/" className='offa fw-semibold text-dark' target="_blank" rel="noopener noreferrer">Our Website</a>
                  </li>
                  <hr />
                  <li>
                    <span className='fw-semibold'>Social Media</span>
                    <br />
                    <div className='mt-4' />
                    <a href='https://www.facebook.com/ccanitd.in' target="_blank" rel="noopener noreferrer" className='offa fs-3 mx-2 fa-brands fa-facebook'></a>
                    <a href='https://www.instagram.com/cca.nitd/' target="_blank" rel="noopener noreferrer" className='offa fs-3 mx-2 fa-brands fa-instagram'></a>
                    <a href='https://www.linkedin.com/company/center-for-cognitive-activities-nit-durgapur' target="_blank" rel="noopener noreferrer" className='offa fs-3 mx-2 fa-brands fa-linkedin'></a>
                    <a href='https://www.youtube.com/@centreforcognitiveactivite7922' target="_blank" rel="noopener noreferrer" className='offa fs-3 mx-2 fa-brands fa-youtube'></a>
                  </li>
                  <hr />
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
            <Button onClick={() => setShowLearn(true)} className={showLearn ? 'hRBtn px-5 py-3 mt-4 mx-2' : 'hBtn px-5 py-3 mt-4 mx-2'} variant="outline-info">Learn More</Button>{' '}
            <Button onClick={() => setShowLearn(false)} className={!showLearn ? 'hRBtn px-5 py-3 mt-4 mx-2' : 'hBtn px-5 py-3 mt-4 mx-2'} variant="outline-info">Register</Button>{' '}
          </div>
        </div>
      </div>
      {
        showLearn ?
          <LearnMore />
          :
          <Register />
      }


      <div className="footer footer-text d-flex justify-content-center align-items-center position-relative bottom-0">
        <p className='mb-0 py-3' >Made with <i class="heart fa-solid fa-heart"></i> by Web Design & Creative Team, CCA.</p>
      </div>



    </>
  );
}

export default App;
