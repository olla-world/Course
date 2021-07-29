import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/navbar.style.css'

const NavLink = ({ href, text, type, imgSrc }) => (
  <div>
    <Link to={href} className="link">
      {type==='brand' && imgSrc?
        <img 
          className="logo logo--image"
          src={imgSrc} 
          alt="brand logo"
        /> 
        :<div className="logo--text"> {text}</div>
      }
    </Link>
  </div>
);

const NavBar = ({ links }) => (
  <div className="navbar">
    <div className="wrap wrap--navbar">{
      links.map(({ href, text, type, imgSrc }, i) => (
        <NavLink 
          key={i} 
          href={href} 
          text={text} 
          type={type}
          imgSrc={imgSrc}/>
      ))
    }</div>
  </div>
);

export default NavBar;