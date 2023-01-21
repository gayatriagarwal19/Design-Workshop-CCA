import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import hero from './assets/images/hero.jpg';
import human from './assets/images/human.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <>
    <Navbar className='nav' collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Details</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <div className='hero'>
        <img src={hero} style={ { width: '100%'} }/>
      </div>
    </div>
    <div className='cards'>
      <h2 className='cardHeading' align="center">TIMELINE</h2>
      <Row>
        <Col sm={3}></Col>
        <Col align="center" sm={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col align="center" sm={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={3}></Col>
      </Row>
    </div>
    <div className='register'>
      <Row>
        <Col sm={6} className= 'Regimage'> <img src={human} /> </Col>
        <Col sm={6}>
        <Form className='p-5'>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Phone Number " />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>College Name</Form.Label>
            <InputGroup className="mb-3">
            <Form.Control aria-label="Text input with dropdown button" placeholder="College Name" />

            <DropdownButton
              variant="outline-secondary"
              title=""
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">NIT Durgapur</Dropdown.Item>
            </DropdownButton>
            </InputGroup>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Department</Form.Label>
              <Form.Control placeholder="Department"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Year</Form.Label>
              <Form.Select defaultValue="!st Year">
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
      </Row>
    </div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <h4>Footer</h4>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default App;
