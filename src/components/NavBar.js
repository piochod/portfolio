import React, { useState } from 'react'
import {Link} from 'react-scroll'
import './NavBar.css'

const NavBar = () => {

  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <nav>
        <div className='menu' onClick={() =>{
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a className="logo">Piotr Chodkowski</a>
        <ul className={menuOpen ? "open": ""}>
            

            <li><Link to="home" smooth={true} offset={-76} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={-76} duration={500}>About</Link></li>
           <li> <Link to="contact" smooth={true} offset={-76} duration={500}>Contact</Link></li>
            
            
        </ul>
    </nav>
  )
}

export default NavBar
