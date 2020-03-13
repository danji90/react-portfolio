import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../node_modules/@geops/react-ui/components/Button';
import { setActiveSection, setXpOpen } from '../../model/actions';
import './DropDown.scss';

function DropDown(props) {
  const xpOpen = useSelector(state => state.xpOpen)
  const sections = useSelector(state => state.sections)
  const dispatch = useDispatch()
  
  return xpOpen ? (
    <div className="dropdown-container">
      <div className="dropdown-menu-item">
        <Button
          key={0}
          title="Life Map"
          onClick={() => {
            dispatch(setActiveSection(sections.find(section => section.id === 'lifeMap')));
            dispatch(setXpOpen(false));
          }}>
          Life Map
        </Button>
      </div>
    </div>
  ) : null
}

export default DropDown;