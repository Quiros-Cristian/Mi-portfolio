import React from 'react'

const Proyectos = () => {
  return (
    <div className='Proyectos'>
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
    </div>
  )
}

export default Proyectos