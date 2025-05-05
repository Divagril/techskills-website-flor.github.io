// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    // ID para la navegación
    <section id="inicio" className="hero-section">
      <div className="hero-overlay"></div> {/* Capa de superposición */}
      <div className="hero-content">
        {/* Animaciones más dinámicas */}
        <h1 data-aos="zoom-in-down" data-aos-duration="1000">
          Bienvenido a TechSkills
        </h1>
        <p data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1000">
          Impulsando tu futuro tecnológico con capacitación experta y soluciones de software innovadoras.
        </p>
        <a
          href="#capacitacion" // Lleva a la primera sección de servicios
          className="cta-button"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="700"
        >
          Descubre Nuestros Servicios
        </a>
      </div>
    </section>
  );
}

export default Hero;