import React, { Component } from 'react';
import './Filters.css';
const axios = require('axios');


class Filters extends Component {
  searchBar(event) {
    var input = document.getElementById("myInput").value;
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();

      // Make a request for a user with a given ID
      axios.get('http://localhost:5000/search', {
        params: {
          input: input
        }
      })
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (err) {
          // handle error
          // if (err.response) {
          //   const custom_error = new Error(err.response.statusText || 'Internal server error');
          //   custom_error.status = err.response.status || 500;
          //   custom_error.description = err.response.data ? err.response.data.message : null;
          //   console.log(custom_error);
          //   throw custom_error;
          // };
          console.log(err);
        })
        .then(function () {
          // always executed
        });
    }    
  }
  render() {
    return (
      <div>
        <div className="filters">
          <div style={{padding: '2.5em'}}/>
          <input 
            className="ui segment"
            type="text" 
            id="myInput" 
            onKeyUp={(e) => this.searchBar(e)}
            placeholder="Search for apartments.." 
            title="Type in a name" />
          <select id="rooms" onchange="roomfilter()" className="ui fluid dropdown">
            <option>Beds & Baths</option>
            <option>1 Bedroom, 1 Bathroom</option>
            <option>2 Bedrooms, 1 Bathroom</option>
            <option>2 Bedrooms, 2 Bathrooms</option>
            <option>3 Bedrooms, 2 Bathrooms</option>
            <option>3 Bedrooms, 3 Bathrooms</option>
            <option>More than 3 Bedrooms/Bathrooms</option>
          </select>
          <select id = "price" onchange = "pricefilter()" className="ui fluid dropdown">
            <option>Max Rent</option>
            <option>$500</option>
            <option>$700</option>
            <option>$900</option>
            <option>$1100</option>
            <option>$1300</option>
            <option>Any price</option>
          </select>
        </div>
      </div>
    );

  }
}

export default Filters;