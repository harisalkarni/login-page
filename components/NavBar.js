import React from 'react'
import navbar from '../styles/navbar.module.css'

function NavBar() {
    return (
        <div>
           <div>
  <header className={navbar.header}>
    <a className={navbar.logo} href="/"><img src="images/logo.svg" alt="logo" /></a>
    <nav>
      <ul className={navbar.nav__links}>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
    <a className={navbar.cta} href="#">Contact</a>
    <p className="">Menu</p>
  </header>
  <div id="mobile__menu" className={navbar.overlay}>
    <a className={navbar.close}>×</a>
    <div className={navbar.overlay__content}>
      <a href="#">Services</a>
      <a href="#">Projects</a>
      <a href="#">About</a>
    </div>
  </div>
</div>

        </div>
    )
}

export default NavBar
