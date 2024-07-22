import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><h1 className='logo'>CrisCoder.</h1></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to="/informacion">Informacion</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to="/proyectos">Proyectos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to='/contacto'>Contactame</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar