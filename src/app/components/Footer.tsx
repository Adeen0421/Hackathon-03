import React from 'react'
import '../style/footer.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='Footer1'>
      <p>Webecy-All Right Reserved</p>
      <div className='so1'><a className='so'> <FaFacebook /></a>
      <a className='so'><FaSquareInstagram /></a>
      <a className='so'><FaTwitter /></a></div>
    </div>
  )
}

export default Footer
