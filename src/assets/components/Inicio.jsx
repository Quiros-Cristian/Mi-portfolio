import React, { useState } from "react";
import logo from '../img/logo/logo.png';
import lucila from '../img/imgpages/pagina-lucila-tejidos.png'
import tlou from '../img/imgpages/thelastofus.png'
import indumentaria from '../img/imgpages/indumentariaunisex.png'
import Aos from 'aos'
import { ArrowLeftSquare, ArrowRightSquare } from "react-bootstrap-icons";

const Inicio = () => {

  Aos.init({duration: 1300})
 
  return (
    <div className="inicio">
      <div className="contenedor-titulo">
      <h2 data-aos="fade-right" className="titulo-principal">
        Hola, Soy Cristian Quiros! Desarrollador Web Front-End.{" "}
      </h2>
      <img data-aos="fade-left" className="imgLogo" src={logo}/> 
      </div>
      <p data-aos="fade-up" className="parrafo-experiencia">
        Tengo experiencia desarrollando sitios institucionales con tecnologias como <strong>JavaScript, Html5, Css, Sass, Git, GitHub,</strong> actualmente me
        estoy capacitando en <strong>React js</strong>.
      </p>
      <section className="sitios">
        <h2 data-aos="fade-up" data-aos-duration="2300">Mis sitios</h2>
        <div className="divSitios">
          <a href="https://quiros-cristian.github.io/53930-proyecto-final/" data-aos="fade-left" data-aos-duration="2300" target="blank"><img data-aos="fade-left" data-aos-duration="2300" className="indumentaria" src={indumentaria}/><ArrowLeftSquare /> Click para visitar</a>
          <a href="https://lucilatejidos.netlify.app/" data-aos="fade-right" data-aos-duration="2300" target="blank">Click para visitar <ArrowRightSquare /><img data-aos="fade-right" data-aos-duration="2300" className="tejidos" src={lucila}/></a>
          <a href="https://fansthelastofus.netlify.app/" data-aos="fade-left" data-aos-duration="2300" target="blank"><img data-aos="fade-left" data-aos-duration="2300" className="tlou" src={tlou}/><ArrowLeftSquare /> Click para visitar</a>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
