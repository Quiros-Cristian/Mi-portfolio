import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/"><h1 className='logo'>DrisxCoder.</h1></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">Inicio</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre mi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Proyectos</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/contacto'>Contactame</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar