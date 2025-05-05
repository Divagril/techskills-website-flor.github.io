// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    // ID para la navegación
    <section id="nosotros" className="about-section">
      {/* Animaciones de entrada */}
      <h2 data-aos="flip-up" data-aos-duration="900">
        Sobre TechSkills
      </h2>
      <p data-aos="zoom-in" data-aos-delay="100" data-aos-duration="900">
        En TechSkills, creemos en el poder transformador de la tecnología.
        Nuestra misión es doble: capacitar a la próxima generación de talentos tecnológicos
        y ofrecer soluciones de software robustas y a medida para empresas que buscan innovar.
      </p>
      <p data-aos="zoom-in" data-aos-delay="250" data-aos-duration="900">
        Combinamos experiencia pedagógica con excelencia técnica para crear un ecosistema
        donde el aprendizaje y el desarrollo van de la mano, preparando a los estudiantes
        para los desafíos reales del sector y ayudando a las empresas a alcanzar sus metas digitales.
      </p>
      {/* Puedes añadir una imagen o icono aquí con animación */}
      {/* <img src="your-image.svg" alt="TechSkills Concept" data-aos="fade-up" data-aos-delay="400"/> */}
    </section>
  );
}

export default About;