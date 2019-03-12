import React, { Component } from 'react';

import Header from './Header.js';
import './Header.css';
import Nav from './Nav.js';
import './Nav.css';
import SectionOne from './SectionOne.js';
import './SectionOne.css';
import SectionTwo from './SectionTwo.js';
import './SectionTwo.css';
import 'react-flexbox-grid';
import 'reactstrap';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
        <Nav></Nav>
          <Header></Header>
          <SectionOne></SectionOne>
          <SectionTwo></SectionTwo>
          <Footer></Footer>
        </div>

      </div> //App
    )
  }
}

export default App;
