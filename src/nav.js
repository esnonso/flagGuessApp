import React, { Component } from 'react';
import './nav.css'

  
  class Navbar extends Component {
    render() {
        var navStyle = {
            width: "100%",
            height: "200px",
            backgroundImage:"url('globe.jpg')",
          };
      return (
        <div style={ navStyle } className="nav">
          <h1>Guess the Flag</h1>
        </div>
      );
    }
  }

  export default Navbar