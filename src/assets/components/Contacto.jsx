import React from 'react'
import { Facebook, Github, Instagram, Linkedin,} from 'react-bootstrap-icons'

const Contacto = () => {
  return (
    <div className='contacto'>
      <h1>Contactame</h1>
      <section className='secContacto'>
      <ul className='ullogos ullogos-dos'>
        <li ><a className='linkRedes' target='blank' href="https://www.facebook.com/profile.php?id=100005021296118"><Facebook className='redes-dos'/>Facebook</a></li>
        <li ><a className='linkRedes' target='blank' href="https://www.instagram.com/quiroscristian_/"><Instagram className='redes-dos'/>Instagram</a></li>
        <li ><a className='linkRedes' target='blank' href="https://www.linkedin.com/in/cristian-quiros-91a06926b/"><Linkedin className='redes-dos'/>Linkedin</a></li>
        <li ><a className='linkRedes' target='blank' href="https://github.com/Quiros-Cristian"><Github className='redes-dos'/>Github</a></li>
      </ul>
      </section>
    </div>
  )
}

export default Contacto