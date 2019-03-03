import React, { Component } from 'react';
import Header from './Header.js';
import './Header.css';
// import Nav from './Nav.js';
// import './Nav.css';
import SectionOne from './SectionOne.js';
import './SectionOne.css';
import SectionOneLeft from './SectionOneLeft.js';
import './SectionOneRight.css';
import SectionOneRight from './SectionOneRight.js';
import './SectionOneRight.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <Header></Header>
          <SectionOne></SectionOne>
        </div>

      </div> //App
    );
  }
}

export default App;
