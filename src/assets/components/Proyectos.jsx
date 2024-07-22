import React from 'react'
import { ArrowDownSquare, ArrowLeftSquare, ArrowRightSquare, ArrowUpSquare } from 'react-bootstrap-icons'
import lucila from '../img/imgpages/nuevalucilatejidos.png'
import tlou from '../img/imgpages/thelastofus.png'
import indumentaria from '../img/imgpages/indumentariaunisex.png'
import Aos from 'aos'
import { useMediaQuery } from 'react-responsive'

const Proyectos = () => {

  Aos.init({ duration: 1300 })

  const mobile = useMediaQuery({ maxWidth: 500 });

  return (
    <div className='proyectos'>
        <section className="sitios">
        <h2 data-aos="fade-up" data-aos-duration="2300">Mis sitios</h2>
        <div className="divSitios">
          <a href="https://quiros-cristian.github.io/53930-proyecto-final/" data-aos="fade-left" data-aos-duration="2300" target="blank"><img data-aos="fade-left" data-aos-duration="2300" className="indumentaria" src={indumentaria} />
            {mobile ? (
              <ArrowUpSquare />
            ) : (
              <ArrowLeftSquare />
            )} Click para visitar</a>
          <a href="https://lucilatejidos.netlify.app/" data-aos="fade-right" data-aos-duration="2300" target="blank">Click para visitar 
          {mobile ? (
            <ArrowDownSquare />
          ) : (
            <ArrowRightSquare />
          )}<img data-aos="fade-right" data-aos-duration="2300" className="tejidos" src={lucila} /></a>
          <a href="https://fansthelastofus.netlify.app/" data-aos="fade-left" data-aos-duration="2300" target="blank"><img data-aos="fade-left" data-aos-duration="2300" className="tlou" src={tlou} />
            {mobile ? (
              <ArrowUpSquare />
            ) : (
              <ArrowLeftSquare />
            )} Click para visitar</a>
        </div>
      </section>
    </div>
  )
}

export default Proyectos