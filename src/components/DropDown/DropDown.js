import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@geops/react-ui/components/Button';
import {
  setActiveSection,
  setXpOpen,
  setMenuOpen,
} from '../../model/actions';
import './DropDown.scss';

function DropDown(props) {
  const xpOpen = useSelector(state => state.xpOpen)
  const sections = useSelector(state => state.sections)
  const dispatch = useDispatch()
  
  return xpOpen ? (
    <>
      <Button
        key="lifeMap"
        title="Life Map"
        className={`dropdown-menu-item`}
        onClick={() => {
          dispatch(setActiveSection(sections.find(section => section.id === 'lifeMap')));
          dispatch(setXpOpen(false));
          dispatch(setMenuOpen(false));
        }}>
        Life Map
      </Button>
      <Button
        key="education"
        title="Education"
        className={`dropdown-menu-item`}
        onClick={() => {
          dispatch(setActiveSection(sections.find(section => section.id === 'education')));
          dispatch(setXpOpen(false));
          dispatch(setMenuOpen(false));
        }}>
        Education
      </Button>
    </> 
  ) : null;
}

export default DropDown;