import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"
import RLogo from './Pictures/RLogo.jpg'

const Navig = ()=>{
  return(
    <div className="Navbar">
    <ul className="Navul">
      <li id="royalid">Royal Concepts <img src={RLogo} alt="logo"/></li>
      <li ><Link className="act" to='/'>Home</Link>
      
      </li>
      <li></li>
      <li id="useless" className="act"><Link to='/ContactUs'>ContactUs</Link></li>
      <li></li>
    </ul>
  </div> )
}

export default Navig;