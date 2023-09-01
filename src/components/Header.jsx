import React from 'react'
import './header.css'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';

const Header = () => {

    var navLinks = document.getElementById("navLinks");
    function showmenu() {
      navLinks.style.right = "0";
    }
    function hidemenu() {
      navLinks.style.right = "-200px";
    }

  return (
    <section class="header">
      
    <nav>
      <a style={{fontSize:"3vmax", fontWeight:"400"}} href="https://www.ducatindia.com/" target="_blank">Geeks <span style={{color:"#f16522"}}>Invention</span></a>
      <div className="nav-links" id="navLinks">
        <i class="fa-solid fa-xmark" onClick={hidemenu}></i>
        <ul>
          <li><Link to={'/home'}>HOME</Link></li>
          <li><Link to={'/work'}>WORKS</Link></li>
          <li><Link to={'/#'}>TECHNOLOGIES</Link></li>
          <li><Link to={'/#'}>SERVICE</Link></li>
          <li><Link to={'/#'}>COMPANY</Link></li>
          <li><Link to={'/#'}>CONTACT</Link></li>
        </ul>
      </div>
      <i class="fa-solid fa-bars" onClick={showmenu}></i>
    </nav>
    <div className="text-box">
        <h1>  <Typewriter
            words={["EMBRACE THE FUTURE"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          /></h1>
      <p>
        WELCOME TO THE AGE OF ACTIONS
      </p>
  
    </div>
  </section>
  )
}

export default Header
