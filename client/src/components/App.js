import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import CardList from './cards/CardList';
import Filters from './cards/Filters';
import { Container, Row, Col } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div id="body">
        <Header />
        <Container  fluid style={{ lineHeight: '0px', backgroundColor: '#777'}}>
          <Row>
            <Col sm={4}><Filters /></Col>
            <Col><CardList /></Col>
          </Row>
        </Container>
        <Footer />  
      </div>
      
    );

  }
}

export default App;
