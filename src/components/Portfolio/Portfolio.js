import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import BasicInfo from '../BasicInfo/BasicInfo';

import './Portfolio.scss';

class Portfolio extends Component {
  render () {
    return (
      <>
      <header>
        <Navbar />
      </header>
      <Home/>
      <div className="columns">
        <div className="column-primary">
          <AboutMe/>
        </div>
        <div className="column-secondary">
          <BasicInfo />
        </div>
      </div>
      </>
    )
  }
}

export default Portfolio;
