import React , {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import InstagramIcon from '@material-ui/icons/Instagram';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import "./RateusComp.css"

function RateusComp() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <div>
        <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active href="/rateus" >Contact Us</Breadcrumb.Item>
            </Breadcrumb>
        <div className="contacttt">
        <div className="contactt">
            <h4>Contact Info</h4>
            <h5>Address:</h5>
            <p>SASTRA DEEMED UNIVERSITY</p>
            <span>Thirumalaisamudram,</span>
            <span> Thanjavur,</span>
            <span>TamilNadu,</span>
            <span>India</span>
          </div>
          <div className="contactt">
            <h5>Contact Us </h5>
            <div>
              <div className="personall">
                        <PhoneIcon color="primary" />
                        <h6>95005769</h6>
              </div>
              <div className="personall">
                   <EmailIcon color="secondary" />
                  <h6>we5plusu@gmail.com</h6>
              </div>
              <div className="personall">
                  <InstagramIcon style={{color : "#C13584"}}/>
                  <h6>shyam._.sundar</h6>
              </div>
              <div className="personall">
                  <LinkedInIcon color="primary" />
                  <h6 style={{marginBottom : "40px"}}>Shyam Sundar B</h6>
              </div>
            </div>
          </div>
          </div>
          <div className="rateform">
          <Form noValidate validated={validated} className="formss" onSubmit={handleSubmit}>
              <h3>Rate Us</h3>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            <Form.Group className="terms">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
        <br/>
        <br/>
      </div>
    );
  }

export default RateusComp;
