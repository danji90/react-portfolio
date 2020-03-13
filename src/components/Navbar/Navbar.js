import React, { Component } from 'react';
import { connect } from "react-redux";
import { FaBars } from '../../../node_modules/react-icons/fa';
import Button from '../../../node_modules/@geops/react-ui/components/Button';
import { setMenuOpen, setActiveSection, setXpOpen } from '../../model/actions';

import './Navbar.scss'

class Navbar extends Component{
  constructor(props){
    super(props)
    this.renderNavbarItems = this.renderNavbarItems.bind(this);
    this.state = {
      navMenuOpen: false,
    };
    this.tabClickHandler = this.tabClickHandler.bind(this);
  }

  tabClickHandler(tabIndex, section) {
    const { 
      dispatchSetActiveSection,
      dispatchSetMenuOpen,
      dispatchSetXpOpen,
      xpOpen,
    } = this.props;
    if (section.id === 'experience') {
      dispatchSetXpOpen(!xpOpen);
    } else {
      dispatchSetXpOpen(false);
    }
    dispatchSetActiveSection(section);
    dispatchSetMenuOpen(false);
  };

  toggleExpandMenu() {
    const { dispatchSetMenuOpen, menuOpen } = this.props;
    dispatchSetMenuOpen(!menuOpen)
  };

  renderNavbarItems(tabItems){
    const { activeSection } = this.props;   
    return (
      tabItems.map((item, index) => {
        
        return (
          <>
            <Button
              key={index}
              title={item.name}
              active={item.nav===activeSection.nav}
              className={`navbar-item ${item.nav===activeSection.nav ? ' active' : ''}`}
              onClick={() => {
                this.tabClickHandler(index, tabItems[index]);
              }}>
              {item.name}
            </Button>
          </>
        )
      })
    )
  }

  render(props){
    const { tabItems, menuOpen } = this.props;
    return (
      <div className='navbar'>
        <Button title={'Expand'} className="menu-btn" tabIndex={-1} onClick={() => this.toggleExpandMenu()}>
          <FaBars size={20} />
        </Button>
        <div className={`nav-items ${menuOpen ? '' : 'hidden'}`}>
          {this.renderNavbarItems(tabItems)}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  menuOpen: state.menuOpen,
  activeSection: state.activeSection,
  xpOpen: state.xpOpen,
});

const mapDispatchToProps = {
  dispatchSetMenuOpen: setMenuOpen,
  dispatchSetActiveSection: setActiveSection,
  dispatchSetXpOpen: setXpOpen,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
