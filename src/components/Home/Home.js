import React from 'react';
// import PropTypes from 'prop-types';
import Button from '../../../node_modules/react-spatial/components/Button';
import { FaLinkedinIn } from '../../../node_modules/react-icons/fa';
import { FaGithubAlt } from '../../../node_modules/react-icons/fa';
import { FaFilePdf } from '../../../node_modules/react-icons/fa';
import { FaPaperPlane } from '../../../node_modules/react-icons/fa';

import './Home.scss'
import portrait from '../../assets/images/daniel1.jpg'

function Home() {
  return (
    <div className="home-container">
      <div className="portrait-container">
        <img src={portrait} alt='error'></img>
      </div>
      <div className="general">
        <h1>Daniel Marsh-Hunn</h1>
        <h2>GI Researcher & Spatial Web Developer</h2>
        <div className="links-container">
          <div><a title="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-marsh-hunn-44097959/"><FaLinkedinIn size={25}/></a></div>
          <div><a title="Github" target="_blank" rel="noopener noreferrer" href="https://github.com/danji90"><FaGithubAlt size={25}/></a></div>
          <div><a title="Download CV" href="../../assets/images/MarshHunnDaniel_EuroCV.pdf" download><FaFilePdf size={25}/></a></div>
        </div>
      </div>
      <a href="mailto:danji_ma90@hotmail.com" className='mail-link'><Button title="Write e-mail" className="contact-button" ><FaPaperPlane size={20}/><strong>CONTACT ME</strong></Button></a>
    </div>
  )
}

export default Home;
