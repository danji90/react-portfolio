import React, { Component } from 'react';
import { FaBars } from '../../../node_modules/react-icons/fa'
import Button from '../../../node_modules/react-spatial/components/Button';

import './Navbar.scss'

class Navbar extends Component{
  constructor(props){
    super(props)
    this.activeTab = undefined;
    this.renderNavbarItems = this.renderNavbarItems.bind(this);
    this.state = { activeTab: undefined };
    this.tabClickHandler = this.tabClickHandler.bind(this)
  }

  tabClickHandler(selected) {
    this.setState({ activeTab: selected });
  };

  renderNavbarItems(){
    const items = ['Home', 'About Me', 'Projects', 'Experience', 'My Github']
    return (
      items.map((item, index) => {
        return (
          <Button
            title={item}
            active={index===this.state.activeTab}
            tabIndex={index}
            className={`navbar-item ${index===this.state.activeTab ? ' active' : ''}`}
            onClick={(item) => this.tabClickHandler(index)}>{item}
          </Button>
        )
      })
    )
  }

  render(){
    return (
      <div className='navbar'>
        <div className='nav-items'>
          {this.renderNavbarItems()}
        </div>
        <Button title={'Expand'} className="hamburger" tabIndex={-1} onClick={() => alert('expand')}>
          <FaBars/ >
        </Button>
      </div>
    )
  }

}

export default Navbar;
