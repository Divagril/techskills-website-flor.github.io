// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  // Simulación de envío
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el envío real del formulario
    alert('¡Mensaje enviado! (Simulación) Gracias por contactar a TechSkills.');
    // Aquí iría la lógica real para enviar datos (fetch, axios a un backend o servicio)
    event.target.reset(); // Limpia el formulario después del envío simulado
  };

  return (
    // ID para la navegación
    <section id="contacto" className="contact-section">
      <h2 data-aos="flip-down" data-aos-duration="900">
        Ponte en Contacto
      </h2>
      <p data-aos="zoom-out" data-aos-delay="100" data-aos-duration="900">
        ¿Listo para impulsar tu carrera o tu proyecto? ¡Hablemos!
      </p>

      <div className="contact-container">
        {/* Info de contacto con animación */}
        <div className="contact-info" data-aos="slide-right" data-aos-delay="200" data-aos-duration="800">
          <h3>Información Directa</h3>
          <p><strong><i className="icon-mail"></i> Email:</strong> <a href="mailto:info@techskills.com">info@techskills.com</a></p>
          <p><strong><i className="icon-phone"></i> Teléfono:</strong> <a href="tel:+1234567890">+12 345 67890</a></p>
          <p><strong><i className="icon-location"></i> Ubicación:</strong> Tech Hub Central, Ciudad Digital</p>
          {/* Añadir iconos reales con una librería como FontAwesome o Feather Icons sería ideal */}
          <div className="social-icons" data-aos="fade-up" data-aos-delay="400">
            {/* <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a> */}
            <p>Síguenos en redes (próximamente)</p>
          </div>
        </div>

        {/* Formulario con animación */}
        <form className="contact-form" onSubmit={handleSubmit} data-aos="slide-left" data-aos-delay="300" data-aos-duration="800">
          <h3>Envíanos un Mensaje</h3>
          {/* Animación individual para campos */}
          <div className="form-group" data-aos="zoom-in-up" data-aos-delay="400">
            <label htmlFor="name">Nombre Completo:</label>
            <input type="text" id="name" name="name" placeholder="Tu Nombre" required />
          </div>
          <div className="form-group" data-aos="zoom-in-up" data-aos-delay="450">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" placeholder="tu@email.com" required />
          </div>
          <div className="form-group" data-aos="zoom-in-up" data-aos-delay="500">
            <label htmlFor="subject">Asunto:</label>
            <input type="text" id="subject" name="subject" placeholder="Ej: Consulta sobre curso React" />
          </div>
          <div className="form-group" data-aos="zoom-in-up" data-aos-delay="550">
            <label htmlFor="message">Tu Mensaje:</label>
            <textarea id="message" name="message" rows="6" placeholder="Escribe tu consulta aquí..." required></textarea>
          </div>
          <button type="submit" className="submit-button" data-aos="zoom-in" data-aos-delay="600">
            Enviar Mensaje Ahora
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;