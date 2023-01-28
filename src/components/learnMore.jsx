import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import certificate from "../assets/images/Certificate.png";
import neeladri from "../assets/images/NEELADRI_DHAR.png";
import saikat from "../assets/images/SAIKAT_SARKAR.png";
import sayan from "../assets/images/SAYAN_MAJUMDER.png";
import somwrik from "../assets/images/SOMWRIK_DUBEY.png";
import swarnalim from "../assets/images/swarnalim_sonowal.png";
import interview from "../assets/images/undraw_interview.png";
import wdctCorner from "../assets/images/WDCTCorner.png";

function LearnMore() {
  const coordinators = [
    {
      name: "Somwrik Dubey",
      img: somwrik,
    },
	{
	  name: "Swarnalim Sonowal",
	  img: swarnalim,
	},
    {
      name: "Neeladri Dhar",
      img: neeladri,
    },
    {
      name: "Saikat Sarkar",
      img: saikat,
    },
  ];
  return (
    <>
      <div className="learn container pb-5">
        <div id="desc" className="description">
          <h2 className="pb-3">Description</h2>
          <p className="descTxt pb-3">
            This Design Workshop organised by Web, Design and Creative Team, CCA
            brings to you 2 days full of learning and fun. Learn basics, tools
            and special features of Adobe Illustrator and After Effects.
          </p>
        </div>
        <div className="details">
          <div className="day">
            <p className="descTxtday pe-5">Day1: </p>
            <p>
              Learn Basic Tools, effects and special features. Create characters
              of your own and a simple background.
            </p>
          </div>
          <div className="day">
            <p className="descTxtday pe-5">Day2: </p>
            <p>Learn how to animate a simple character in After Effects.</p>
          </div>
        </div>
        <div className="description py-5">
          <h2 className="pb-3">What’s in for you</h2>
          <p>
            Apart from learning the basics of design theory, you get to know
            more about WDCT, CCA. Every participant will be awarded with a
            certificate, the work of the best performers will be featured in
            WDCT Corner and the performers would stand an advantage in the
            auditions!
          </p>
        </div>
        <Row className="gx-5">
          <Col sm={4}>
            <Card className="card">
              <Card.Img
                variant="top"
                className="certificate"
                src={certificate}
                style={{ width: "50%" }}
              />
              <Card.Body>
                <Card.Title align="center">Certificate</Card.Title>
                <Card.Text align="center">
                  of participation for all the participants
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="card">
              <Card.Img className="wdctCorner" variant="top" src={wdctCorner} />
              <Card.Body>
                <Card.Title align="center">Top Entries</Card.Title>
                <Card.Text align="center">
                  will be featured in WDCT corner.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="card">
              <Card.Img
                variant="top"
                className="interview"
                src={interview}
                style={{ width: "80%" }}
              />
              <Card.Body>
                <Card.Title align="center">Top Performers</Card.Title>
                <Card.Text align="center">
                  will get an advantage in auditions
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div id="mentor" className="description pt-5 pb-5">
          <h2>Mentor</h2>
        </div>
        <Row className="mentor">
          <Col sm={5} md={6} className="mentor1">
            <Row>
              <Col sm={5} md={6}>
                <img className="mentorImg" src={sayan} />
              </Col>
              <Col md={6} className="mentorTxt">
                <h3 className="pt-2 pb-2">Sayan Majumder</h3>
                <h4 className="pb-2">Head, WDCT,CCA</h4>
                <h3 className="mentorLinks">
                  <i class="fa-brands me-1 fa-linkedin"></i>{" "}
                  <i class="fa-brands ms-1 fa-behance"></i>{" "}
                </h3>
              </Col>
            </Row>
          </Col>
          <Col sm={7} md={6} className="mentor2">
            <p className="pt-2">
              Every firm has stories to tell—stories that will not only engage,
              inform, surprise, delight, and impact their audience, but that
              will also deliver on measurable goals. And I am the conduit
              between the firm and consumer.
            </p>
            <p>
              I help clients find the subject and medium that best fits their
              unique identity, and then I produce high-quality content that
              meets their objectives.
            </p>
          </Col>
        </Row>
        <div id="coordinator" className="description pt-5 pb-5">
          <h2>Coordinators</h2>
        </div>
        <Row>
          {coordinators.map((coordinator) => {
            return (
              <Col sm={3}>
                <Card className="coordinatorCard pb-2">
                  <Card.Img
                    variant="top"
                    className="coordinatorImg"
                    src={coordinator?.img}
                  />
                  <Card.Body>
                    <Card.Title align="center" className="coordinatorName">
                      {coordinator?.name}
                    </Card.Title>
                    <Card.Text align="center">
                      Senior member
                      <br />
                      WDCT,CCA
                    </Card.Text>
                    <Card.Title align="center">
                      <h4>
                        <a href="" class="fa-brands mx-1 fa-linkedin" target="_blank" rel="noopener noreferrer" />{" "}
                        <a href="" class="fa-brands mx-1 fa-behance" target="_blank" rel="noopener noreferrer" />
                      </h4>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <div className="my-5"></div>
      </div>
    </>
  );
}

export default LearnMore;
