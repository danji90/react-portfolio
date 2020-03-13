import React, { Component, createRef } from 'react';
import { connect } from "react-redux";
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import BasicInfo from '../BasicInfo/BasicInfo';
import Education from '../Education/Education';
import LifeMap from '../LifeMap/LifeMap';
import Projects from '../Projects/Projects';
import { setMenuOpen, setXpOpen } from '../../model/actions';

import './Portfolio.scss';

class Portfolio extends Component {
  constructor() {
    super();
    this.pageRef = createRef()
    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu(event) {
    const { dispatchSetMenuOpen, dispatchSetXpOpen } = this.props;
      dispatchSetMenuOpen(false);
      dispatchSetXpOpen(false);
  }

  componentDidUpdate(prevProps) {
    const { activeSection } = this.props;
    console.log(activeSection);
    const anchor = document.querySelector(`#${activeSection.id}`)
    if (anchor  && (prevProps.activeSection !== activeSection)) {
      anchor.scrollIntoView({ behavior: 'smooth', inline: 'end' })
    }
  }

  render () {
    const { sections } = this.props;    
    return (
      <>
        <header>
          <Navbar tabItems={sections.filter(section => section.tab)} />
        </header>
        <div onClick={this.closeMenu}>
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
              <div className="column-secondary">
                <Education section={sections.find(section => section.id === 'basic')}/>
              </div>
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
  menuOpen: state.menuOpen,
});

const mapDispatchToProps = {
  dispatchSetMenuOpen: setMenuOpen,
  dispatchSetXpOpen: setXpOpen,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portfolio);
