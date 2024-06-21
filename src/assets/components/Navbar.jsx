import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className='ulnavegacion'>
            <li className='nav-item'><Link to="/">Inicio</Link></li>
            <li className='nav-item'><Link to="#">Quien Soy</Link></li>
            <li className='nav-item'><Link to="#">Proyectos</Link></li>
            <li className='nav-item'><Link to="/contacto">Contactame</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar