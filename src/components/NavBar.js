import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
      <span className='nav-logo'>Valhalla Adventure</span>
      <nav>
        <ul>
          <li><a href='./home'>Home</a></li>
          <li><a href='./remeras'>Indumentaria</a></li>
          <li><a href='./camperas'>Guia de talles</a></li>
          <li><a href='./contacto'>Contacto</a></li>
        </ul>  
      </nav>
    </div>
      
  )
}

export default NavBar