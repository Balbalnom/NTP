import React, { Component } from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap';



class Footer extends Component {
  
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="bottom" >
      <Navbar.Brand href="#home">Zephyr</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar" />
      <Navbar.Collapse  id="basic-navbar" />
    </Navbar>
    
    );
  }
}

export default Footer;
