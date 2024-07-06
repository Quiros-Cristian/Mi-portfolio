import React from 'react'
import { Facebook, Github, Instagram, Linkedin,} from 'react-bootstrap-icons'

const Contacto = () => {
  return (
    <div className='contacto'>
      <h1>Contactame</h1>
      <section className='secContacto'>
      <ul className='ullogos ullogos-dos'>
        <li ><a className='linkRedes' href=""><Facebook className='redes-dos'/>Facebook</a></li>
        <li ><a className='linkRedes' href=""><Instagram className='redes-dos'/>Instagram</a></li>
        <li ><a className='linkRedes' href=""><Linkedin className='redes-dos'/>Linkedin</a></li>
        <li ><a className='linkRedes' href=""><Github className='redes-dos'/>Github</a></li>
      </ul>
      </section>
    </div>
  )
}

export default Contacto