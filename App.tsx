/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Cpu, Search, Linkedin, ExternalLink, Mail, MapPin, Award } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import CustomCursor from './components/CustomCursor';
import AIChat from './components/AIChat';
import ScrambleText from './components/ScrambleText';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen text-[#1c1c1c] selection:bg-[#c23b22] selection:text-[#f3eadc] cursor-auto md:cursor-none overflow-x-hidden bg-[#f3eadc]">
      <CustomCursor />
      <FluidBackground />
      <AIChat />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-8 bg-[#f3eadc]/80 backdrop-blur-md border-b border-[#c23b22]/10 transition-all duration-300">
        <div className="font-heading text-xl md:text-2xl font-black tracking-tighter text-[#1c1c1c] cursor-default z-50 flex items-center gap-2 group">
          JORGE FERRIS<span className="text-[#c23b22] text-3xl group-hover:text-[#00f0ff] transition-colors">.</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-xs font-bold tracking-[0.2em] uppercase">
          {['Metodología', 'Resultados', 'Sobre mí', 'Contacto'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('í', 'i'))}
              className="hover:text-[#c23b22] transition-colors text-[#1c1c1c] cursor-pointer bg-transparent border-none"
              data-hover="true"
            >
              {item}
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => scrollToSection('contacto')}
          className="hidden md:flex items-center gap-2 border border-[#c23b22] px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#c23b22] hover:text-[#f3eadc] hover:border-[#c23b22] transition-all duration-300 text-[#c23b22] cursor-pointer bg-transparent rounded-sm group"
          data-hover="true"
        >
          <span className="w-2 h-2 bg-[#c23b22] rounded-full group-hover:bg-[#f3eadc]"></span>
          Disponible
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#1c1c1c] z-50 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#f3eadc] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Metodología', 'Resultados', 'Sobre mí', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('í', 'i'))}
                className="text-3xl font-heading font-bold text-[#1c1c1c] hover:text-[#c23b22] transition-colors uppercase bg-transparent border-none"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - GIGANTE & CREATIVO */}
      <header className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4">
        <motion.div 
          style={{ y, opacity }}
          className="z-10 text-center flex flex-col items-center w-full max-w-7xl"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-4 text-[10px] md:text-sm font-mono text-[#c23b22] tracking-[0.3em] uppercase mb-12 border border-[#c23b22] px-4 py-2 rounded-full bg-transparent hover:bg-[#c23b22] hover:text-[#f3eadc] transition-colors duration-300"
            data-hover="true"
          >
            <span>Consultor SEO</span>
            <span className="text-[#1c1c1c]/20">|</span>
            <span>Experto en IA</span>
          </motion.div>

          {/* CONCEPTUAL HERO TYPOGRAPHY */}
          <div className="relative w-full flex flex-col justify-center items-center gap-2 md:gap-4 select-none">
            
            {/* The "Average" Choice - Crossed Out */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-4xl md:text-7xl font-heading font-bold text-[#1c1c1c]/30 tracking-tight uppercase">
                NO COMPITAS
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '110%' }}
                transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 md:h-2 bg-[#1c1c1c]/40 rotate-[-2deg]"
              />
            </motion.div>

            {/* The "Result" Choice - Scrambled/Engineered */}
            <div className="relative group cursor-default mt-2 md:mt-4" data-hover="true">
              <h1 className="text-[18vw] md:text-[16vw] leading-[0.85] font-black font-heading tracking-tighter text-[#c23b22] z-10 flex items-center justify-center">
                 <ScrambleText text="DOMINA" scrambleSpeed={40} />
              </h1>
              
              {/* Optional Decoration: Brackets or Code Syntax */}
              <div className="absolute -top-4 -left-4 md:top-0 md:left-0 text-[#c23b22] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-sm md:text-xl">
                {'<init>'}
              </div>
              <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 text-[#c23b22] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-sm md:text-xl">
                {'</exec>'}
              </div>
            </div>

          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 text-lg md:text-2xl font-light max-w-3xl mx-auto text-[#1c1c1c] leading-relaxed text-center px-6"
          >
            El algoritmo no escucha a quien más grita, sino a quien <span className="text-[#c23b22] font-bold border-b-2 border-[#c23b22]">mejor habla su idioma</span>.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            onClick={() => scrollToSection('contacto')}
            className="mt-12 border-2 border-[#c23b22] bg-transparent hover:bg-[#1c1c1c] hover:border-[#1c1c1c] text-[#c23b22] hover:text-[#00f0ff] px-12 py-5 text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 rounded-sm shadow-[4px_4px_0px_0px_rgba(194,59,34,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,240,255,1)]"
            data-hover="true"
          >
            Auditoría Estratégica
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#1c1c1c]">Scroll</span>
          <div className="w-[1px] h-12 bg-[#c23b22]" />
        </motion.div>
      </header>

      {/* METODOLOGÍA - "INGENIERÍA DIGITAL" */}
      <section id="metodologia" className="relative z-10 py-24 md:py-32 bg-[#f3eadc]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="mb-20">
             <h2 className="text-4xl md:text-7xl font-heading font-bold uppercase leading-[0.9] text-[#1c1c1c]">
              Ingeniería <br/> 
              <span className="text-[#c23b22]">Digital</span>
            </h2>
            <div className="w-24 h-2 bg-[#c23b22] mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* SEO PILLAR */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative p-8 md:p-12 min-h-[400px] md:min-h-[500px] bg-transparent border border-[#c23b22] flex flex-col justify-between overflow-hidden hover:bg-[#1c1c1c] hover:border-[#1c1c1c] transition-all duration-500 shadow-xl hover:shadow-[10px_10px_0px_0px_rgba(0,240,255,0.2)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Search className="w-32 h-32 md:w-48 md:h-48 text-[#c23b22] group-hover:text-[#00f0ff]" strokeWidth={1} />
              </div>
              
              <div className="relative z-10 group-hover:text-[#f3eadc] transition-colors duration-300">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 border border-[#c23b22] text-[#c23b22] rounded-full group-hover:border-[#00f0ff] group-hover:text-[#00f0ff] transition-colors duration-300">
                     <Search className="w-6 h-6" />
                   </div>
                   <span className="text-xs font-mono tracking-widest text-[#c23b22] group-hover:text-[#00f0ff] transition-colors duration-300">PILAR 01</span>
                 </div>
                 <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-none text-[#1c1c1c] group-hover:text-[#f3eadc] transition-colors duration-300">SEO<br/>AVANZADO</h3>
                 <p className="text-[#1c1c1c]/80 text-lg leading-relaxed max-w-md group-hover:text-gray-400 transition-colors duration-300">
                   Más allá de las keywords. Estrategia técnica, limpieza de código y arquitectura de contenidos semántica que enamora a los algoritmos de Google.
                 </p>
              </div>
            </motion.div>

            {/* AI PILLAR */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative p-8 md:p-12 min-h-[400px] md:min-h-[500px] bg-transparent border border-[#c23b22] flex flex-col justify-between overflow-hidden hover:bg-[#1c1c1c] hover:border-[#1c1c1c] transition-all duration-500 shadow-xl hover:shadow-[10px_10px_0px_0px_rgba(0,240,255,0.2)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Cpu className="w-32 h-32 md:w-48 md:h-48 text-[#c23b22] group-hover:text-[#00f0ff]" strokeWidth={1} />
              </div>
              
              <div className="relative z-10 group-hover:text-[#f3eadc] transition-colors duration-300">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 border border-[#c23b22] text-[#c23b22] rounded-full group-hover:border-[#00f0ff] group-hover:text-[#00f0ff] transition-colors duration-300">
                     <Cpu className="w-6 h-6" />
                   </div>
                   <span className="text-xs font-mono tracking-widest text-[#c23b22] group-hover:text-[#00f0ff] transition-colors duration-300">PILAR 02</span>
                 </div>
                 <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-none text-[#1c1c1c] group-hover:text-[#f3eadc] transition-colors duration-300">INTELIGENCIA<br/>ARTIFICIAL</h3>
                 <p className="text-[#1c1c1c]/80 text-lg leading-relaxed max-w-md group-hover:text-gray-400 transition-colors duration-300">
                   Optimización de procesos y análisis de datos masivos. Implemento soluciones con IA para conseguir en horas lo que antes costaba días.
                 </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 flex justify-center">
             <button
               onClick={() => scrollToSection('contacto')}
               className="inline-flex items-center gap-3 border-2 border-[#c23b22] bg-transparent hover:bg-[#1c1c1c] hover:border-[#1c1c1c] text-[#c23b22] hover:text-[#00f0ff] px-10 py-4 text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 rounded-sm shadow-[4px_4px_0px_0px_rgba(194,59,34,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,240,255,1)]"
               data-hover="true"
             >
               Iniciar Proyecto <ArrowUpRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA - DATA DRIVEN */}
      <section id="resultados" className="relative z-10 py-24 md:py-32 border-t border-[#c23b22]/20 bg-[#f3eadc]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <h2 className="text-4xl md:text-7xl font-heading font-bold uppercase leading-[0.9] text-[#1c1c1c]">
              Resultados<br/> 
              <span className="text-[#c23b22]">No Promesas</span>
            </h2>
            <p className="font-mono text-[#1c1c1c]/60 text-sm max-w-sm text-right md:text-left">
              DATOS REALES EXTRAÍDOS DE PROYECTOS RECIENTES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                label: 'Autoridad', 
                value: 'TOP 1', 
                desc: "Dominio de keywords transaccionales (Money Keywords) en sectores altamente competidos."
              },
              { 
                label: 'Posicionamiento', 
                value: '+80%', 
                desc: "De posts posicionados en primera página mediante re-ingeniería de contenido semántico."
              },
              { 
                label: 'Estrategia 360º', 
                value: 'SCALING', 
                desc: "Implementación técnica en infraestructuras complejas y e-commerce con miles de URLs."
              }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 border border-[#c23b22]/20 hover:border-[#1c1c1c] hover:bg-[#1c1c1c] transition-all duration-300 group relative overflow-hidden shadow-lg shadow-[#c23b22]/5"
              >
                 <div className="flex justify-between items-start mb-8">
                   <span className="font-mono text-xs uppercase tracking-widest text-[#c23b22] opacity-60 group-hover:text-[#00f0ff] transition-colors">{metric.label}</span>
                   <Award className="w-6 h-6 text-[#1c1c1c]/20 group-hover:text-[#00f0ff] transition-colors" />
                 </div>
                 
                 <div className="text-4xl md:text-5xl font-heading font-bold text-[#c23b22] mb-6 group-hover:text-[#f3eadc] transition-colors">
                   {metric.value}
                 </div>
                 
                 <p className="text-[#1c1c1c]/80 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                   {metric.desc}
                 </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="relative z-10 py-24 md:py-32 bg-[#f3eadc] border-t border-[#c23b22]/20">
         <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[#c23b22] p-2 bg-white rotate-2 shadow-2xl shadow-black/5 hover:rotate-0 transition-all duration-500 hover:border-[#00f0ff]">
                <div className="w-full h-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D22AQEVxb6X4WTgKw/feedshare-shrink_800/B4DZdEcyrYHwAg-/0/1749200093543?e=2147483647&v=beta&t=hIKhTNbtNIv6YP5rToWXXTKFJb77s3HC4ih5DzC-0Z4" 
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop"; 
                    }}
                    alt="Jorge Ferris" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-[#c23b22]/10 mix-blend-multiply group-hover:bg-transparent transition-all" />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
               <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase mb-8 leading-tight text-[#1c1c1c]">
                 Estrategia de <br/> <span className="text-[#c23b22] decoration-[#c23b22] underline decoration-4 underline-offset-8">Negocio</span> y Tecnología
               </h2>
               
               <div className="space-y-6 text-lg text-[#1c1c1c]/80 font-medium leading-relaxed">
                 <p>
                   Entiendo los negocios porque construyo negocios. Mi formación en <strong className="text-[#c23b22]">ESIC Valencia</strong> me aportó la base estratégica del Marketing, pero mi trayectoria profesional liderando proyectos me ha enseñado que, al final del día, lo único que importa es la rentabilidad.
                 </p>
                 <p>
                   Me alejo de la figura del consultor teórico. Soy un <strong className="text-[#c23b22]">Partner Estratégico</strong> que combina visión corporativa con ejecución técnica agresiva. Utilizo la Inteligencia Artificial no como una simple herramienta, sino como una ventaja competitiva desleal para escalar resultados donde otros solo ven código.
                 </p>
               </div>

               <div className="mt-12 flex flex-wrap gap-4">
                 {['Business Partner', 'ESIC Alumni', 'AI Certified', 'Growth Lead'].map((tag) => (
                   <span key={tag} className="px-4 py-2 border border-[#c23b22] rounded-full text-xs font-mono uppercase tracking-wider text-[#c23b22] hover:bg-[#1c1c1c] hover:text-[#00f0ff] hover:border-[#1c1c1c] transition-colors cursor-default font-bold">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="relative z-10 py-24 md:py-32 bg-[#f3eadc] text-[#c23b22] border-t border-[#c23b22]">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <h2 className="text-4xl md:text-8xl font-heading font-black uppercase mb-8 leading-[0.9]">
            ¿Hablamos de<br/><span className="text-[#1c1c1c]">Rentabilidad?</span>
          </h2>
          <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-12 text-[#1c1c1c]/70">
            Los proyectos grandes no esperan. Agenda una auditoría inicial y veamos si encajamos.
          </p>
          
          <a 
            href="mailto:jorgeferris123@gmail.com"
            className="inline-flex items-center gap-4 bg-[#c23b22] text-[#f3eadc] px-12 py-6 text-sm md:text-base font-bold tracking-[0.2em] uppercase hover:bg-[#1c1c1c] hover:text-[#00f0ff] transition-colors duration-300 shadow-xl shadow-[#c23b22]/20 hover:shadow-[#00f0ff]/20"
            data-hover="true"
          >
            Iniciar Proyecto <ArrowUpRight />
          </a>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#c23b22]/20 pt-12 text-[#1c1c1c]">
            <div className="flex flex-col items-center gap-2 group cursor-pointer" data-hover="true">
              <a href="mailto:jorgeferris123@gmail.com" aria-label="Enviar email">
                <Mail className="w-6 h-6 text-[#c23b22] group-hover:text-[#00f0ff] transition-colors" />
              </a>
              <span className="font-bold">EMAIL</span>
              <a href="mailto:jorgeferris123@gmail.com" className="hover:text-[#c23b22] transition-colors">jorgeferris123@gmail.com</a>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer" data-hover="true">
              <MapPin className="w-6 h-6 text-[#c23b22] group-hover:text-[#00f0ff] transition-colors" />
              <span className="font-bold">UBICACIÓN</span>
              <span>Valencia, España</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer" data-hover="true">
              <a href="https://www.linkedin.com/in/jorge-ferris-pellicer" target="_blank" rel="noopener noreferrer" aria-label="Ver perfil de LinkedIn">
                <Linkedin className="w-6 h-6 text-[#c23b22] group-hover:text-[#00f0ff] transition-colors" />
              </a>
              <span className="font-bold">LINKEDIN</span>
              <a href="https://www.linkedin.com/in/jorge-ferris-pellicer" target="_blank" rel="noopener noreferrer" className="hover:text-[#c23b22] transition-colors underline decoration-1 underline-offset-4">
                Conectar
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-8 bg-[#f3eadc] border-t border-[#c23b22]/20 text-center">
        <p className="text-xs font-mono text-[#1c1c1c]/50 uppercase tracking-widest">
          © {new Date().getFullYear()} Jorge Ferris. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;