import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, Modal, Col} from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';

class Header extends Component {
  
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top" >
      
      <Navbar.Brand href="#home">Zephyr</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link onClick={this.handleShow}>Login</Nav.Link>
          <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <div class="ui placeholder segment">
            <div class="ui two column very relaxed stackable grid">
                <div class="column">
                <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik
                  initialValues={{ email: 'email', password: 'password' }}
                  validate={values => {
                    let errors = {};
                    if (!values.email) {
                      errors.email = 'Required';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Invalid email address';
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <Col>
                        <Form.Group controlId="validationFormik01">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isValid={touched.email && !errors.email}
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Group controlId="validationFormik02">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isValid={touched.password && !errors.password}
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Button type="submit">Submit form</Button>
                  </Form>
                  )}
                </Formik>
                </Modal.Body>
                </div>
                <div class="column">
                <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Formik
                  initialValues={{ 
                    firstName: '',
                    lastName: '',
                    email: '',
                    confirm: '', 
                    password: '' }}
                  validate={values => {
                    let errors = {};
                    if (!values.email) {
                      errors.email = 'Required';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Invalid email address';
                    } else if (values.confirm !== values.password){
                      errors.password = 'Passwords do not match';
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      axios.post('http://localhost:5000/register', {
                        email: values.email,
                        password: values.password,
                        firstName: values.firstName,
                        lastName: values.lastName
                      })
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <Col>
                      <Form.Group controlId="validationFormik03">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      <Col>
                      <Form.Group controlId="validationFormik04">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          isValid={touched.lastName && !errors.lastName}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      </Form.Row>
                    <Form.Row>
                      <Col>
                      <Form.Group controlId="validationFormik05">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isValid={touched.email && !errors.email}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                      <Form.Group controlId="validationFormik06">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isValid={touched.password && !errors.password}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                    <Col>
                      <Form.Group controlId="validationFormik07">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirm"
                          value={values.confirm}
                          onChange={handleChange}
                          isValid={touched.confirm && !errors.confirm}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                    </Form.Row>
                    <Button type="submit">Submit form</Button>
                  </Form>
                  )}
                </Formik>
                </Modal.Body>
                </div>
            </div>
            <div class="ui vertical divider">
                Or
            </div>
            </div>
            
            </Modal>
          </Nav>
          
          
      </Navbar.Collapse>
      </Navbar>
    
    );
  }
}

export default Header;
