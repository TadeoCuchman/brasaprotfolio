import React from "react"
import './Footer.css'
import instaLogo from "../assets/instalogo.svg"
import twitterLogo from "../assets/twitterlogo.svg"

const Footer = () => {
  return (
    <footer>
        <div><img className="logo" src ={instaLogo} alt="instagram logo"/></div>
        <div>m.braselli@gmail.com</div>
  </footer>
  )
};

export default Footer;
