import './Assests/CSS/icons.css'
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

const BottomNav = () => {
    return (
        <div className='navbar'>

            <div className="items_scroll">
                <a href='#'><BsFillMegaphoneFill className='icons' /></a>
                <a href='#'><FaBlogger className='icons' /></a>
                <a href='#'><FaWpforms className='icons' /></a>
                <a href='#'><FaLink className='icons' /></a>
                <a href='#'><FaAward className='icons' /></a>
                <a href='#'><BsFillPeopleFill className='icons' /></a>
                <a href='#'><FaHandshake className='icons' /></a>
                <a href='#'><FaPhoneSquareAlt className='icons' /></a>
            </div>
            <a href='#'><FaSmileBeam className='icons' /></a>
        </div>
    )
}

export default BottomNav