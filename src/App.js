// src/App.js
import React, { useEffect } from 'react';
import AOS from 'aos';                // Importa AOS
import 'aos/dist/aos.css';           // Importa el CSS de AOS
import './App.css';                  // Estilos generales de App
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services'; // Contiene ambas secciones de servicios
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Inicializa AOS una vez que el componente se monta
  useEffect(() => {
    AOS.init({
      duration: 800,       // Duración general de animaciones (más rápida)
      offset: 120,         // Empieza la animación un poco más tarde al scrollear
      once: true,          // La animación ocurre solo una vez
      easing: 'ease-out-cubic', // Una curva de easing suave pero notable
      // disable: 'mobile' // Opcional: Deshabilitar en móviles si hay problemas de rendimiento
    });
    // Re-calcula las posiciones de AOS si algo cambia dinámicamente (ej. carga de imágenes)
    window.addEventListener('load', AOS.refresh);
    return () => {
        window.removeEventListener('load', AOS.refresh);
    }
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar

  return (
    <div className="App">
      <Header />
      <main> {/* Envuelve las secciones principales */}
        <Hero />
        <Services /> {/* Renderiza las secciones de Capacitación y Desarrollo */}
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;