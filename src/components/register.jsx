import React, { useEffect, useState } from "react";
import "../App.css";

import axios from "axios";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

const SITE_KEY = "6LdILjEkAAAAAPsRVRKAOJITqkGipk7wWFULkDVr";

function Register() {
  const [fullName, setFullName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [department, setDepartment] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resType, setResType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const [formVisible, setFormVisible] = useState(true);
  const submitForm = (event) => {
    console.log("submit form");
    event.preventDefault();
    //console.log(user);
    setIsLoading(true);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
      setIsOpen(true);
      setError("Enter a valid Email");
      setIsLoading(false);
      return;
    }
    if (contactNum.length !== 10) {
      setIsOpen(true);
      setError("Mobile Number should be of 10 digits");
      setIsLoading(false);
      return;
    }

    if (
      fullName.length === 0 ||
      roll.length === 0 ||
      email.length === 0 ||
      year.length === 0 ||
      contactNum.length === 0 ||
      department.length === 0 ||
      year.length === 0
    ) {
      setIsOpen(true);
      setError("All fields are required");
      setIsLoading(false);
      return;
    }

    if (department === "Select department") {
      setIsOpen(true);
      setError("Select a department");
      setIsLoading(false);
      return;
    }

    sendData("token");
    // window.grecaptcha.ready(() => {
    //   window.grecaptcha
    //     .execute(SITE_KEY, { action: "submit" })
    //     .then((token) => {
    //       console.log("Token", token);
    //     });
    // });
  };

  const modalBody = () => {
    if (isLoading) {
      <p textAlign="center" align="center">
        <h3 textAlign="center" align="center" className="fw-normal">
          Submitting Registration ...
        </h3>
        <Spinner animation="grow" className="mt-3" />
      </p>;
    } else {
      if (resType === "success") {
        return (
          <>
            <h1 textAlign="center" align="center" className="fw-bold">
              Congratulations!
            </h1>
            <p className="modal_right_p">
              We have successfully received your registration for two day
              Graphic and Motion Design Workshop 2023. we will contact you very
              soon.
              <br />
              <br />
              Join the WhatsApp group if you haven't, through the link below for
              further updates and information regarding the auditions.
              <br />
              <a
                href="https://chat.whatsapp.com/LqazKksSuPB6BDo0YqJon6"
                target="blank"
                style={{
                  textDecoration: "underline",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Join WhatsApp Group
              </a>
              <br />
            </p>
          </>
        );
      } else if (resType === "exists") {
        return (
          <>
            <h1 className="gradient__text">Already Submitted !</h1>
            <p className="modal_right_p">
              You have already registered for two day Graphic and Motion Design
              Workshop 2023 account or mobile number. We will contact you very
              soon.
              <br />
              <br />
              Join the WhatsApp group if you haven't, through the link below for
              further updates and information regarding the auditions.
              <br />
              <a
                href="https://chat.whatsapp.com/LqazKksSuPB6BDo0YqJon6"
                target="blank"
                style={{
                  textDecoration: "underline",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Join WhatsApp Group
              </a>
              <br />
            </p>
          </>
        );
      } else {
        if (error === "") {
          return (
            <>
              <h1 textAlign="center" align="center" className="fw-bold">
                Could Not Register !
              </h1>
              <h5
                style={{ textAlign: "center", fontWeight: 600 }}
                className="my-4"
              >
                Please try again after some time.
                <br />
              </h5>
            </>
          );
        } else {
          return (
            <>
              <h1 textAlign="center" align="center" className="fw-bold">
                Could Not Register !
              </h1>
              <h5
                style={{ textAlign: "center", fontWeight: 600 }}
                className="my-4"
              >
                {error}
                <br />
              </h5>
            </>
          );
        }
      }
    }
  };
  const sendData = (token) => {
    // let formData = new FormData();
    console.log("token sendData", token);
    // formData.entr
    setIsLoading(true);

    let formData = {
      email: email,
      name: fullName,
      year: year,
      roll_no: roll,
      contact_number: contactNum,
      department: department,
      "g-recaptcha-response": token,
    };

    console.log("form Data", formData);
    // return

    var config = {
      method: "post",
      // url: "https://ccaaudition.ccanitd.in/api/auditions",
      url: "https://ccaaudition.ccanitd.in/api/registrionscc244b9737c2b6ef26bd0f7827653c9d27c10b7c",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios(config)
      .then(function (response) {
        if (response.status == 201) {
          setResType("success");
        } else {
          let r = response.data;
          console.log("response of api call", r);
          if (r?.email || r?.contact_number) {
            setResType("exists");
          } else {
            setResType("error");
          }
        }
        setIsLoading(false);
        setIsOpen(true);
      })
      .catch(function (error) {
        setResType("error");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document?.body?.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        //console.log("Script loaded!");
      }
    );
  }, []);

  return (
    <>
      <div className="learn container pb-5">
        <div className="description">
          <h2 className="pb-3">Register Yourself</h2>
          <p className="descTxt pb-3">
            The workshop is free to attend and is available only for students of
            NIT Durgapur.
          </p>
        </div>

        <Form onSubmit={(e) => submitForm(e)}>
          <Row className="mb-1">
            <Form.Group
              className="col-12 col-md-6 col-lg-6 my-2"
              controlId="formGridEmail"
            >
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(text) => {
                  setFullName(text.target.value);
                }}
                value={fullName}
                placeholder="Enter full name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="col-12 col-md-6 col-lg-6 my-2"
              controlId="formGridPassword"
            >
              <Form.Label>Roll No</Form.Label>
              <Form.Control
                type="text"
                onChange={(text) => {
                  setRoll(text.target.value);
                }}
                value={roll}
                placeholder="Enter Roll No"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid roll no.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-1">
            <Form.Group
              className="col-12 col-md-6 col-lg-6 my-2"
              controlId="formGridEmail"
            >
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                onChange={(text) => {
                  setEmail(text.target.value);
                }}
                value={email}
                placeholder="Enter email address"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="col-12 col-md-6 col-lg-6 my-2"
              controlId="formGridPassword"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                onChange={(text) => {
                  setContactNum(text.target.value);
                }}
                value={contactNum}
                placeholder="Enter phone number"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-1">
            <Form.Group
              className="col-12 col-md-6 col-lg-6 my-2"
              controlId="formGridEmail"
            >
              <Form.Label>Department</Form.Label>
              <Form.Select
                onChange={(text) => {
                  setDepartment(text.target.value);
                }}
                value={department}
                required
              >
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
              <Form.Control.Feedback type="invalid">
                Please select a valid Department.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="col-12 col-md-6 col-lg-6 my-2"
              controlId="formGridPassword"
            >
              <Form.Label>Year of Study</Form.Label>
              <Form.Select
                onChange={(text) => {
                  setYear(text.target.value);
                }}
                value={year}
                required
              >
                <option>Select year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a valid year.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mx-1 mb-1">
            {isLoading ? (
              <Button
                className="col-12 col-md-2 col-lg-2  regBtn mt-3"
                variant="primary"
                // type="submit"
              >
                <Spinner animation="grow" size="sm" />
              </Button>
            ) : (
              <Button
                className="col-12 col-md-2 col-lg-2 regBtn mt-3"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            )}
          </Row>
        </Form>
      </div>
      <Modal
        show={isOpen}
        onHide={() => {
          setIsOpen(false);
          setResType("");
          setError("");
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>{modalBody()}</Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => setIsOpen(false)}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;

const modalClose = {
  position: "absolute",
  top: "-7%",
  right: "-6%",
  color: "#81afdd",
  margin: "10px",
  fontSize: "30px",
  cursor: "pointer",
};
