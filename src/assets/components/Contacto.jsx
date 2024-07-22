import React from 'react'
import { Facebook, Github, Instagram, Linkedin,} from 'react-bootstrap-icons'
import Aos from 'aos'
import { useMediaQuery } from 'react-responsive';

const Contacto = () => {

  Aos.init({ duration: 1300 })
  const mobile = useMediaQuery({ maxWidth: 500 });

  return (
    <div className='inicioOtras'>
      <h1 data-aos="fade-left">Contactame</h1>
      <section className='secContacto'>
      <ul className='ullogos ullogos-dos'>
        <li ><a data-aos="fade-up" className='linkRedes' target='blank' href="https://www.facebook.com/profile.php?id=100005021296118"><Facebook className='redes-dos'/>Facebook</a></li>
        <li ><a data-aos="fade-up" className='linkRedes' target='blank' href="https://www.instagram.com/quiroscristian_/"><Instagram className='redes-dos'/>Instagram</a></li>
        <li ><a data-aos="fade-up" className='linkRedes' target='blank' href="https://www.linkedin.com/in/cristian-quiros-91a06926b/"><Linkedin className='redes-dos'/>Linkedin</a></li>
        <li ><a data-aos="fade-up" className='linkRedes' target='blank' href="https://github.com/Quiros-Cristian"><Github className='redes-dos'/>Github</a></li>
      </ul>
      </section>
    </div>
  )
}

export default Contacto