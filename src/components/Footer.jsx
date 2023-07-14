import React from "react"
import './Footer.css'
import instaLogo from "../assets/instalogo.svg"
import twitterLogo from "../assets/twitterlogo.svg"

const Footer = () => {
  return (
    <footer>
        <a href="https://www.instagram.com/bbrasa/" target="_blank"><img className="logo" src ={instaLogo} alt="instagram logo"/></a>
        <a style={{color:'black'}} href="mailto:m.braselli@gmail.com">m.braselli@gmail.com</a>
  </footer>
  )
};

export default Footer;
