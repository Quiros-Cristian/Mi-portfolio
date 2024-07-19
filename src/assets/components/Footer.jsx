import React from 'react'
import { Facebook, Github, Instagram, Linkedin,  } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <ul className='ullogos'>
            <li ><a href="https://www.facebook.com/profile.php?id=100005021296118&locale=es_LA" target='blank'><Facebook className='redes'/></a></li>
            <li ><a href="https://www.instagram.com/quiroscristian_/" target='blank'><Instagram className='redes'/></a></li>
            <li ><a href="https://www.linkedin.com/in/cristian-quiros-91a06926b/" target='blank'><Linkedin className='redes'/></a></li>
            <li ><a href="https://github.com/Quiros-Cristian" target='blank'><Github className='redes'/></a></li>
        </ul>
        <h4 className='derechos'>Todos los derechos reservados <strong>@CrisCoder</strong>.</h4>
        <h5 className='derechos'>Made by <strong>Quiros Cristian</strong>.</h5>
    </div>
    </>
  )
}

export default Footer