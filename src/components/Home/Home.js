import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import Button from '@geops/react-ui/components/Button';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

import './Home.scss'
import portrait from '../../assets/images/daniel1.jpg'

function Home(props) {
  const section = useSelector(state => state.sections).find(section => section.id === 'home');
  return (
    <div className="home container" id={section.id}>
      <div className="portrait-container">
        <img src={portrait} alt='error'></img>
      </div>
      <div className="general">
        <h1>Daniel Marsh-Hunn</h1>
        <h2>GI Researcher & Spatial Web Developer</h2>
        <div className="links-container">
          <div>
            <a title="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-marsh-hunn-44097959/">
              <FaLinkedinIn size={25}/>
            </a>
          </div>
          <div>
            <a title="Github" target="_blank" rel="noopener noreferrer" href="https://github.com/danji90">
              <FaGithubAlt size={25}/>
            </a>
          </div>
          <div>
            <a title="Download CV" href="../../assets/images/MarshHunnDaniel_EuroCV.pdf" download>
              <FaFilePdf size={25}/>
            </a>
          </div>
        </div>
      </div>
      <a href="mailto:danji_ma90@hotmail.com" className='mail-link'>
        <Button title="Write e-mail" className="contact-button" onClick={()=>{}}>
          <FaPaperPlane size={20}/><strong>CONTACT ME</strong>
        </Button>
      </a>
    </div>
  )
}

export default Home;
