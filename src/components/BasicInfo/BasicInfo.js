import React from 'react';
import { FaBirthdayCake } from '../../../node_modules/react-icons/fa';
import { FaHome } from '../../../node_modules/react-icons/fa';
import { FaPhone } from '../../../node_modules/react-icons/fa';
import { MdEmail } from '../../../node_modules/react-icons/md';

import './BasicInfo.scss'

function BasicInfo() {
  return (
    <ul className="basic-info-container">
      <li><FaBirthdayCake title='Date of birth'/><span>13.09.1990</span></li>
      <li><FaHome title='Home'/><span>Peter-Thumb-Straße 16 <br/> 79100 Freiburg im Breisgau <br/> Germany</span></li>
      <li><FaPhone /><span>+49 163 664 3351 <br/> +39 320 010 3173</span></li>
      <li><MdEmail /><span>danji_ma90@hotmail.com</span></li>
    </ul>
  )
}

export default BasicInfo;
