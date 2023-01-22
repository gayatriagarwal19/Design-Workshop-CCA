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


function App() {
  return (
    <>
    <div id='home'>
      <div className='hero'>
        <div className='heroText'>
          <h1 textAlign="center" align="center">Design Workshop</h1>
          <h3 className='my-4'> Learn Adobe Illustrator from scratch in two days</h3>
        </div>
        <div>
          <Button className='px-5 py-3 mt-4 mx-2' size="md" variant="outline-info">Learn More</Button>{' '}
          <Button className='px-5 py-3 mt-4 mx-2' size="md" variant="outline-info">Register</Button>{' '}
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='description'>
        <h2>Description</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa reprehenderit veritatis repudiandae, praesentium quae autem nihil non suscipit voluptatum explicabo, quasi officia at. Numquam nisi aspernatur quas libero ducimus?</p>
      </div>
      <div className='details'>
        <div className='day'>
            <p>Day1: </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa reprehenderit veritatis repudiandae, praesentium quae autem nihil non suscipit voluptatum explicabo, quasi officia at. Numquam nisi aspernatur quas libero ducimus?</p>
        </div>
        <div className='day'>
            <p>Day2: </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa reprehenderit veritatis repudiandae, praesentium quae autem nihil non suscipit voluptatum explicabo, quasi officia at. Numquam nisi aspernatur quas libero ducimus?</p>
        </div>
      </div>
      <div className='description'>
        <h2>What’s in for you</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa reprehenderit veritatis repudiandae, praesentium quae autem nihil non suscipit voluptatum explicabo, quasi officia at. Numquam nisi aspernatur quas libero ducimus?</p>
      </div>
      <Row>
        <Col sm={4}>
        <Card className='card' style={{ width: '18rem' }}>
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
        <Card className='card' style={{ width: '18rem' }}>
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
        <Card className='card' style={{ width: '18rem' }}>
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
      <div className='description'>
        <h2>Mentor</h2>
      </div>
      <div className='mentor'>
        <div>
          <div>
            <img></img>
          </div>
          <div>
            <h3>Sayan Majumder</h3>
            <h4>Head, WDCT,CCA</h4>
            <h3>Be In</h3>
          </div>
        </div>
        <div>
          <p>
          Every firm has stories to tell—stories that will not only engage, inform, surprise, delight, and impact their audience, but that will also deliver on measurable goals. And I am the conduit between the firm and consumer.
          </p>
          <p>
            I help clients find the subject and medium that best fits their unique identity, and then I produce high-quality content that meets their objectives.
          </p>
        </div>
      </div>
      <div className='description'>
        <h2>Coordinators</h2>
      </div>
      <Row>
        <Col sm={3}>
        <Card className='coordinatorCard' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title align='center'>Somwrik Dubey</Card.Title>
            <Card.Text align='center'>
            Senior member
            WDCT,CCA
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={3}>
        <Card className='coordinatorCard' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title align='center'>Swarnalim Sonowal</Card.Title>
            <Card.Text align='center'>
            Senior member
            WDCT,CCA
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={3}>
        <Card className='coordinatorCard' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title align='center'>Neeldari Dhar</Card.Title>
            <Card.Text align='center'>
            Senior member
            WDCT,CCA
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={3}>
        <Card className='coordinatorCard' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title align='center'>Saikat Sarkar</Card.Title>
            <Card.Text align='center'>
            Senior member
            WDCT,CCA
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default App;
