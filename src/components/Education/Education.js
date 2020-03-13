import React from 'react';
import { useSelector } from 'react-redux';
import { FaGraduationCap } from 'react-icons/fa';

import './Education.scss'

function Education(props) {
  const educationItems = useSelector(state => state.educationItems)
  const section = useSelector(state => state.sections).find(section => section.id === 'education');
  
  return (
    <div id={section.id} className="education container">
      <h2>Education</h2>
      <div className="education-content">
        {educationItems.map((item, index) => {
          return (
            <div className="education-item" key={index}>
              <div className="education-item-header">
                <div className="education-item-icon"><FaGraduationCap size={30} /></div>
                <h3 className="education-item-title">{item.title}</h3>
              </div>
              {Object.keys(item.details).map((detail, index) => {
                return (
                  <div className="education-item-detail" key={index}>
                    {item.details[detail]}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education;
