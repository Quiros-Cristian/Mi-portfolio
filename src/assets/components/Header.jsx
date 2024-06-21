import React from 'react'
import Navbar from './Navbar'


const Header = (props) => {



  return (
    <header className='header'>
      {/* <h1 className='logo'>DrisxCoder.</h1>
        <Navbar /> */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><h1 className='logo'>DrisxCoder.</h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre mi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Proyectos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='#'>Contactame</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header