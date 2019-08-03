import React, { Component } from 'react';
import { FaBars } from '../../../node_modules/react-icons/fa';
import Button from '../../../node_modules/react-spatial/components/Button';

import './Navbar.scss'

class Navbar extends Component{
  constructor(props){
    super(props)
    this.activeTab = undefined;
    this.renderNavbarItems = this.renderNavbarItems.bind(this);
    this.state = {
      activeTab: undefined,
      navMenuOpen: false,
    };
    this.tabClickHandler = this.tabClickHandler.bind(this)
  }

  tabClickHandler(selected) {
    this.setState({ activeTab: selected });
  };

  toggleExpandMenu() {
    const { navMenuOpen } = this.state;
    this.setState({navMenuOpen: !navMenuOpen});
  }

  renderNavbarItems(){
    const items = ['Home', 'About Me', 'Projects', 'Experience', 'My Github']
    const { activeTab } = this.state;
    return (
      items.map((item, index) => {
        return (
          <Button
            key={index}
            title={item}
            active={index===activeTab}
            className={`navbar-item ${index===activeTab ? ' active' : ''}`}
            onClick={(item) => {
              this.setState({navMenuOpen: false});
              this.tabClickHandler(index)
            }}>
            {item}
          </Button>
        )
      })
    )
  }

  render(){
    const { navMenuOpen } = this.state;
    return (
      <div className='navbar'>
        <Button title={'Expand'} className="menu-btn" tabIndex={-1} onClick={() => this.toggleExpandMenu()}>
          <FaBars size={20}/ >
        </Button>
        <div className={`nav-items ${navMenuOpen ? '' : 'hidden'}`}>
          {this.renderNavbarItems()}
        </div>
      </div>
    )
  }

}

export default Navbar;
