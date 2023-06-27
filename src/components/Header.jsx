import React from "react"
import './Header.css'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
        <h1>
            mateobraselli
        </h1>
        <ul>
        <Link to='/'>
            <li>Home</li>
        </Link>
        <Link to='/barcelona'>
            <li>BARCELONA</li>
        </Link>
        <Link to='/morocco'>
            <li>MOROCCO</li>
        </Link>
        <Link to='srilanka'>
            <li>SRI LANKA</li>
        </Link>
        <Link to='cphopen2023'>
            <li>CPH OPEN 2023</li>
        </Link>
        <Link to='comissioned'>
            <li>Comissioned</li>
        </Link>
        <Link to='about'>
            <li>About</li>
        </Link>
        <Link to='contact'>
            <li>Contact</li>
        </Link>
        </ul>
    </header>
  )
};

export default Header;
