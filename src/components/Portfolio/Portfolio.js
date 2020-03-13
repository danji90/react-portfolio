import React, { Component } from 'react';
import { connect } from "react-redux";
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import BasicInfo from '../BasicInfo/BasicInfo';
import DropDown from '../DropDown/DropDown';
import LifeMap from '../LifeMap/LifeMap';
import Projects from '../Projects/Projects';

import './Portfolio.scss';

class Portfolio extends Component {
  componentDidUpdate() {
    const { activeSection } = this.props;
    console.log(activeSection);
    const anchor = document.querySelector(`#${activeSection.id}`)
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', inline: 'start' })
    }
  }
  render () {
    const { sections } = this.props;
    console.log(sections);
    
    return (
      <>
      <header>
        <Navbar tabItems={sections.filter(section => section.tab)} />
        <DropDown />
      </header>
      <Home section={sections.find(section => section.id === 'home')}/>
      <div className="app-content">
        <div className="columns">
          <div className="column-primary">
            <AboutMe section={sections.find(section => section.id === 'about')}/>
          </div>
          <div className="column-secondary">
            <BasicInfo section={sections.find(section => section.id === 'basic')}/>
          </div>
        </div>
        <div className="map-section">
          <LifeMap section={sections.find(section => section.id === 'lifeMap')} />
        </div>
        <div className="columns">
          <div className="column-primary">
            <Projects section={sections.find(section => section.id === 'projects')}/>
          </div>
        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  sections: state.sections,
  activeSection: state.activeSection,
});


export default connect(
  mapStateToProps,
)(Portfolio);
