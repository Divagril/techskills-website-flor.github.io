// src/components/Services.js
import React from 'react';
import './Services.css'; // Asegúrate de importar el CSS

function Services() {
  return (
    // Usamos fragmento <> para agrupar sin añadir un div extra
    <>
      {/* Sección de Capacitación - ID para navegación */}
      <section id="capacitacion" className="service-section capacitacion-section">
        <div className="section-container"> {/* Contenedor para limitar ancho */}
          <h2 data-aos="zoom-in-right" data-aos-duration="900">
            Capacitación Tecnológica
          </h2>
          <div className="service-content">
            <div className="service-icon-wrapper" data-aos="zoom-in" data-aos-delay="150">
              <div className="service-icon pulse-animation">🎓</div>
            </div>
            <p data-aos="fade-up" data-aos-delay="200">
              Preparamos a estudiantes y profesionales para triunfar en el competitivo mundo tech
              con cursos prácticos, mentorías personalizadas y proyectos reales.
            </p>
            <h3 data-aos="fade-up" data-aos-delay="250">Áreas Destacadas:</h3>
            <ul className="service-list">
              <li data-aos="slide-up" data-aos-delay="300">Desarrollo Web Full-Stack (React, Node, etc.)</li>
              <li data-aos="slide-up" data-aos-delay="350">Programación Avanzada (Python, Java)</li>
              <li data-aos="slide-up" data-aos-delay="400">Cloud & DevOps (AWS, Docker, Kubernetes)</li>
              <li data-aos="slide-up" data-aos-delay="450">Data Science & Machine Learning</li>
              <li data-aos="slide-up" data-aos-delay="500">Ciberseguridad Esencial</li>
            </ul>
            <p data-aos="fade-up" data-aos-delay="550">
              Nuestros programas están diseñados para construir un portafolio sólido y
              habilidades listas para el mercado laboral.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Desarrollo de Software - ID para navegación */}
      <section id="desarrollo" className="service-section desarrollo-section">
         <div className="section-container"> {/* Contenedor para limitar ancho */}
          <h2 data-aos="zoom-in-left" data-aos-duration="900">
            Desarrollo de Software
          </h2>
          <div className="service-content">
            <div className="service-icon-wrapper" data-aos="zoom-in" data-aos-delay="150">
              <div className="service-icon pulse-animation">💻</div>
            </div>
            <p data-aos="fade-up" data-aos-delay="200">
              Transformamos ideas innovadoras en soluciones de software robustas, escalables y
              centradas en el usuario para impulsar tu negocio.
            </p>
            <h3 data-aos="fade-up" data-aos-delay="250">Nuestros Servicios Incluyen:</h3>
            <ul className="service-list">
              <li data-aos="slide-up" data-aos-delay="300">Aplicaciones Web Progresivas (PWA)</li>
              <li data-aos="slide-up" data-aos-delay="350">Desarrollo Móvil Nativo e Híbrido</li>
              <li data-aos="slide-up" data-aos-delay="400">Plataformas E-commerce Personalizadas</li>
              <li data-aos="slide-up" data-aos-delay="450">Integración de APIs y Sistemas Legacy</li>
              <li data-aos="slide-up" data-aos-delay="500">Consultoría Estratégica de Arquitectura</li>
            </ul>
            <p data-aos="fade-up" data-aos-delay="550">
              Desde startups hasta empresas consolidadas, somos tu socio tecnológico ideal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;