// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">TechSkills</div>
        <nav>
          <ul>
            {/* Enlaces que apuntan a los IDs de las secciones */}
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#capacitacion">Capacitación</a></li>
            <li><a href="#desarrollo">Desarrollo</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;