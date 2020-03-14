/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
// import PropTypes from 'prop-types';

import image from '../../assets/images/daniel1.jpg'

import './Projects.scss'
import { useSelector } from 'react-redux';

const renderProject = projectData => {
  return (
    <div className="project">
      <div className="project-column-image">
        {projectData.images.map(image => {
          const imageLink = image.imageUrl;
          return (
            <a href={projectData.webLink} target="_blank">
              <img src={image.imageUrl} alt="not found" ></img>
            </a>
          )
        })}
        
      </div>
      <div className="project-column-info">
        <h3>{projectData.name}</h3>
        <p>{projectData.description}</p>
        <div className="project-tools">
          <strong>Tooles used: </strong>
          {
            projectData.tools.map(tool => {
              return <a href={tool.webLink} target="_blank">{`${tool.name}, `}</a>
            })
          }
        </div>
        <a href={projectData.webLink} target="_blank">Find out more</a>
      </div>
    </div>
  )
}

function Projects(props) {
  const projects = useSelector(state => state.projects)
  return (
    <div className="projects container" id={props.section.id}>
      <h2>Projects</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      {projects.map(project => renderProject(project))}
    </div>
  )
}

export default Projects;
