import React, { Component } from 'react';
import SectionOneLeft from './SectionOneLeft.js';
import SectionOneRight from './SectionOneRight.js'
class SectionOne extends Component {
    render () {

        return (
            <div className="SectionOne">
            <h1>First Section</h1>    
            <SectionOneLeft></SectionOneLeft>   
            <SectionOneRight></SectionOneRight>         {/* <img src=" https://fillmurray.com/g/200/300"/> */}
            </div>
        )
    }
}

export default SectionOne;