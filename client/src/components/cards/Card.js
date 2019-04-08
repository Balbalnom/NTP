import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';


export class Card extends Component {
  render() {
    const { pic, addr, price, bedrms, bathrms } = this.props.card;
    return (
      <div className="card">
        <div className="row">
          <div className="imgCol">
            <div className="imageWrapper">
              <img src={pic} alt="apartment" />
            </div>
          </div>

          <div className="infoCol">
            <div className="contentInfo">
              <p><b>Address:</b> {addr}</p>
              <p><b>Bedrooms:</b> {bedrms}</p>
              <p><b>Bathrooms:</b> {bathrms}</p>
            </div>           
          </div>
        </div>
        
        <div className="row">
          <div className="priceCol">
            <div className="contentPrice">
              <p><b>Price:</b> ${price} per month</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// PropTypes
Card.propTypes = {
  card: PropTypes.object.isRequired,
}


export default Card
