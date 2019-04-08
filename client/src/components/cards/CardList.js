import React, { Component } from 'react';
import Card from './Card';
import './CardList.css';

export class CardList extends Component {
  state = {
    cardList: [
      // Placeholder listings for testing purposes. Delete later!
      {
        pic: 'http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg',
        id: 1,
        addr: '180 Elmira St',
        price: 300,
        bedrms: 2,
        bathrms: 1
      },
      {
        pic: 'https://rentpath-res.cloudinary.com/w_370,h_370,t_rp,e_improve,cs_tinysrgb,fl_force_strip,c_fill/e_unsharp_mask:50,q_auto/3e551a5c0debe557c97e6ed46c5eb54f',
        id: 2,
        addr: '300 Birmingham way',
        price: 1500,
        bedrms: 2,
        bathrms: 1
      },
      {
        pic: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/2293-3/the-reserve-at-eisenhower-apartments-building.jpg',
        id: 3,
        addr: '33 Franklinson st',
        price: 20000,
        bedrms: 3,
        bathrms: 2
      },
      {
        pic: 'https://dynamicmedia.zuza.com/gr/m/original_/images/771/l/93a625b1-e526-4bf1-865e-42485a41b9d3.jpg',
        id: 4,
        addr: '90 Blankstreet Road',
        price: 12345534,
        bedrms: 4,
        bathrms: 2
      },
      {
        pic: '',
        id: 5,
        addr: '90 Blankstreet Road',
        price: 12345534,
        bedrms: 4,
        bathrms: 2
      },
      {
        pic: '',
        id: 5,
        addr: '90 Blankstreet Road',
        price: 12345534,
        bedrms: 4,
        bathrms: 2
      },
      {
        pic: '',
        id: 5,
        addr: '90 Blankstreet Road',
        price: 12345534,
        bedrms: 4,
        bathrms: 2
      }
      // Placeholder listings for testing purposes. Delete later!
    ]
  }

  render() {
    return (
      <div className="cardList">
        <div style={{padding: '1.5em'}}/>
        <div className="heading">
          <h1>Apartments</h1>
        </div>
        <div className="cardBox">
          {this.state.cardList.map((card) => (
          <Card card={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList
