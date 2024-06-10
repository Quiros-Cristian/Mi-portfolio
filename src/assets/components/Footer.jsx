import React from 'react'
import { Facebook, Github, Instagram, Linkedin,  } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <ul className='ullogos'>
            <li className='redes'><a href="https://www.facebook.com/profile.php?id=100005021296118&locale=es_LA" target='blank'><Facebook /></a></li>
            <li className='redes'><a href="https://www.instagram.com/quiroscristian_/" target='blank'><Instagram /></a></li>
            <li className='redes'><a href="https://www.linkedin.com/in/cristian-quiros-91a06926b/" target='blank'><Linkedin /></a></li>
            <li className='redes'><a href="https://github.com/Quiros-Cristian" target='blank'><Github /></a></li>
        </ul>
    </div>
    </>
  )
}

export default Footer