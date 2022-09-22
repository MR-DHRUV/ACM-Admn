import React from 'react'
import { BsFillMegaphoneFill } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import './Assests/CSS/sidebar.css'

const Sidebar = () => {
  return (

    <div className='sidebar'>
      <h3 className='logoNav'> <img src="https://usict.acm.org/assets/images/acm-logo.svg" alt="" width={70} height={70} /> Acm Admin</h3>
      {/* <hr {width: 60%;margin-left: auto;margin-right: auto;}> */}
      <a href='#' className='navLinkss'><FaSmileBeam className='icons' />  </a>
      <a href='#' className='navLinks'><BsFillMegaphoneFill className='icons' />announcements</a>
      <a href='#' className='navLinks'><FaBlogger className='icons' />Blogs</a>
      <a href='#' className='navLinks'><FaWpforms className='icons' />Forms</a>
      <a href='#' className='navLinks'><FaLink className='icons' />Links</a>
      <a href='#' className='navLinks'><FaAward className='icons' />Certificates</a>
      <a href='#' className='navLinks'><BsFillPeopleFill className='icons' />Team</a>
      <a href='#' className='navLinks'><FaHandshake className='icons' />Join Us</a>
      <a href='#' className='navLinks'><FaPhoneSquareAlt className='icons' />Contact Us</a>

    </div>
  )
}

export default Sidebar