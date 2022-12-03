import React from 'react'
import { CartWidget } from '../index'
import './NavBar.css'
import logo from '../../assets/navbar/logo.png'
import { NavLink, Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <>
      <div className="anuncio_menu">
        <p>SHOP NOW : 3 CUOTAS SIN INTERES ₊˚♡˚₊</p>
      </div>
      <nav>
        <section className="menu_container">
          <Link to='/'>
            <span>
              <img src={logo} className="logo" alt="logo"/>
            </span>
          </Link>
          <ul className="menu_links">
            <li className="menu_item">
              <NavLink className="menu_link" to='/'>Home</NavLink>
            </li>
            <li className="menu_item menu_item--show">
              <NavLink className="menu_link" to='/category/remeras'>Remeras</NavLink>
            </li>
            <li className="menu_item menu_item--show">
              <NavLink className="menu_link" to='/category/camisas'>Camisas</NavLink>
            </li>
            <li className="menu_item">
              <NavLink className="menu_link" to='/cart'><CartWidget/></NavLink>
            </li>
          </ul>
        </section>
      </nav>
    </>
  )
}

export default NavBar