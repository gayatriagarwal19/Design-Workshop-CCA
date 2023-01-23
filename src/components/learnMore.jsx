import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';
import certificate from '../assets/images/Certificate.png';
import neeladri from '../assets/images/NEELADRI_DHAR.png';
import saikat from '../assets/images/SAIKAT_SARKAR.png';
import sayan from '../assets/images/SAYAN_MAJUMDER.png';
import somwrik from '../assets/images/SOMWRIK_DUBEY.png';
import swarnalim from '../assets/images/swarnalim_sonowal.png';
import interview from '../assets/images/undraw_interview.png';
import wdctCorner from '../assets/images/WDCTCorner.png';




function LearnMore() {

  return (
    <>
    <div className='learn container pb-5'>
      <div className='description'>
        <h2 className='pb-3'>Description</h2>
        <p className='descTxt pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa reprehenderit veritatis repudiandae, praesentium quae autem nihil non suscipit voluptatum explicabo, quasi officia at. Numquam nisi aspernatur quas libero ducimus?</p>
      </div>
      <div className='details'>
        <div className='day'>
            <p className='descTxtday pe-5'>Day1: </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa reprehenderit veritatis repudiandae, praesentium quae autem nihil non suscipit voluptatum explicabo, quasi officia at. Numquam nisi aspernatur quas libero ducimus?</p>
        </div>
        <div className='day'>
            <p className='descTxtday pe-5'>Day2: </p>
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
      <div className='my-5' >

      </div>
    </div>
    </>
  );
}

export default LearnMore;
