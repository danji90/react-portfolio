/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import PropTypes from 'prop-types';

import './Projects.scss'
import { useSelector } from 'react-redux';

const images = require.context('../../assets/images/', true);

const renderLatestProject = (projectData, projectsCount) => {
  console.log(projectData);
  return (
    <>
      <div key="latest" className="project-latest">
        <h3>{projectData.name}</h3>
        <h4 className="project-facility">{projectData.facility}</h4>
        <div className="project-latest-image">
          <a href={projectData.webLink} target="_blank">
            <img src={projectData.images[0].url} alt="not found" ></img>
          </a>
        </div>
        {renderProject(projectData, null, projectsCount)}
      </div>
    </>
  )
};

const renderProject = (projectData, index, projectsCount) => {
  return (
    <>
      <div key={projectData.id} className="project">
        <div className="project-column-image">
          {projectData.images.filter(image => !image.latest).map(image => {
            return (
              <a key={image.name} href={projectData.webLink} target="_blank">
                <img src={image.url} alt="not found" ></img>
              </a>
            )
          })}
          
        </div>
        <div className="project-column-info">
          {projectData.latest ? null : (
            <>
              <h3>{projectData.name}</h3>
              <h4 className="project-facility">{projectData.facility}</h4>
            </>
          )}
          <p>{projectData.description}</p>
          <div className="project-tools">
            <strong>Tools used: </strong>
            {
              projectData.tools.map((tool, index) => {
                return (
                  <span key={tool.name}>
                    {tool.webLink ? (
                    <a key={index} href={tool.webLink} target="_blank">
                      {`${tool.name}`}
                    </a>
                    ) : <span>{`${tool.name}`}</span>}
                    {`${(index + 1) === projectData.tools.length ? '' : ', '}`}
                  </span>
                )
              })
            }
          </div>
          <a className="more-link" href={projectData.webLink} target="_blank"><FaExternalLinkAlt />Find out more</a>
        </div>
      </div>
      {(index + 1) !== projectsCount ? <hr className="divider"></hr> : null}
    </>
  )
};

function Projects(props) {
  const projects = useSelector(state => state.projects)
  return (
    <div className="projects container" id={props.section.id}>
      <h2>Projects</h2>
      {renderLatestProject(projects.find(project => project.latest), projects.length)}
      {
        projects.filter(project => !project.latest)
          .map((project, index) => renderProject(project, index, projects.filter(project => !project.latest).length))
      }
    </div>
  );
};

export default Projects;
