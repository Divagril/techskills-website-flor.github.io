// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>© {currentYear} TechSkills. Todos los derechos reservados.</p>
      <p>
        <a href="#privacidad">Política de Privacidad</a> | <a href="#terminos">Términos de Servicio</a>
        {/* Enlaces placeholder, necesitarías crear esas secciones o páginas */}
      </p>
    </footer>
  );
}

export default Footer;