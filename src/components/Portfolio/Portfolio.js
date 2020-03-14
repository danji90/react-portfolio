import React, { Component, createRef } from 'react';
import { connect } from "react-redux";
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import BasicInfo from '../BasicInfo/BasicInfo';
import Education from '../Education/Education';
import LifeMap from '../LifeMap/LifeMap';
import Projects from '../Projects/Projects';
import { setMenuOpen, setXpOpen, setActiveSection } from '../../model/actions';

import './Portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = {scrollTop: 0};
    this.closeMenu = this.closeMenu.bind(this);
    this.scrollUpdate = this.scrollUpdate.bind(this)
  }

  closeMenu() {
    const { dispatchSetMenuOpen, dispatchSetXpOpen } = this.props;
    dispatchSetMenuOpen(false);
    dispatchSetXpOpen(false);
  }

  scrollUpdate() {
    const { dispatchSetActiveSection, sections } = this.props;
    console.log(window.scrollY);
    // TODO: Implement for all tabs once all sections are ready
    if (window.scrollY === 0) {
      dispatchSetActiveSection(sections.find(section => section.id === 'home'));
    }
    
  }

  componentDidMount() {
    document.addEventListener('scroll', this.scrollUpdate)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollUpdate)
  }

  componentDidUpdate(prevProps) {
    const { activeSection } = this.props;
    console.log(activeSection);
    const anchor = document.querySelector(`#${activeSection.id}`)
    if (anchor  && (prevProps.activeSection !== activeSection)) {
      anchor.scrollIntoView({ behavior: 'smooth', inline: 'end' })
    }
  }

  render (props) {
    const { sections } = this.props;
    return (
      <>
        <header>
          <Navbar tabItems={sections.filter(section => section.tab)} />
        </header>
        <div onClick={this.closeMenu} >
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
                {/* <ScrollAwareDiv /> */}
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
  dispatchSetActiveSection: setActiveSection,
  dispatchSetMenuOpen: setMenuOpen,
  dispatchSetXpOpen: setXpOpen,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portfolio);
