import React, { Component } from 'react';
import { connect } from "react-redux";
import { FaBars } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import Button from '@geops/react-ui/components/Button';
import { setMenuOpen, setActiveSection, setXpOpen } from '../../model/actions';

import './Navbar.scss'
import DropDown from '../DropDown/DropDown';

class Navbar extends Component{
  constructor(props){
    super(props);
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
      dispatchSetActiveSection(section);
      dispatchSetXpOpen(!xpOpen);
      return;
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

  renderXpTab(tabItems, item, index) {
    const { activeSection, xpOpen } = this.props;
    return (
      <div key={item.id} className={`navbar-item-experience ${xpOpen ? ' open' : ''}`}>
        <Button
            key={item.id}
            title={item.name}
            active={item.nav===activeSection.nav}
            className={`experience-button ${item.nav===activeSection.nav ? ' active' : ''}`}
            onClick={() => {
              this.tabClickHandler(index, tabItems[index]);
            }}>
            {item.name}
            {xpOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </Button>
          <DropDown />
      </div>
    )
  }
  
  renderNavbarItems(tabItems){
    const { activeSection } = this.props;   
    return (
      tabItems.map((item, index) => {
        if (item.id === 'experience') {
          return this.renderXpTab(tabItems, item, index)
        }
        return (
          <Button
            key={item.id}
            title={item.name}
            active={item.nav===activeSection.nav}
            className={`navbar-item  ${item.nav===activeSection.nav ? ' active' : ''}`}
            onClick={() => {
              this.tabClickHandler(index, tabItems[index]);
            }}>
            {item.name}
          </Button>
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
