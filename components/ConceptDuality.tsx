/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const ConceptDuality: React.FC = () => {
  return (
    <section className="relative z-10 py-12 bg-[#f3eadc]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        
        {/* Container Interactivo */}
        <div className="relative w-full h-[60vh] md:h-[70vh] group cursor-pointer overflow-hidden border border-[#c23b22] rounded-sm shadow-2xl bg-[#1c1c1c]">
          
          {/* ESTADO 1: APARECER (Lo aburrido/Técnico) */}
          <div className="absolute inset-0 bg-[#f3eadc] flex flex-col items-center justify-center text-center p-8 transition-transform duration-700 group-hover:scale-95">
            {/* Background: Ruido/Estática (Metáfora de ser uno más en el índice) */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url("https://media.giphy.com/media/26tP41kb6ncnpYyru/giphy.gif")`, // Reliable Static Noise GIF
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%) contrast(150%)'
              }}
            />
            
            <div className="relative z-10 mix-blend-darken">
              <h2 className="text-5xl md:text-8xl font-heading font-black text-[#1c1c1c] tracking-tighter mb-4 opacity-30 group-hover:opacity-10 transition-opacity duration-500">
                APARECER
              </h2>
              <p className="font-mono text-[#1c1c1c]/60 text-sm md:text-lg tracking-[0.2em] uppercase">
                Índices, crawlers y posiciones.
              </p>
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#1c1c1c]/40 text-[10px] font-mono tracking-widest animate-pulse">
              [ HOVER TO EXECUTE STRATEGY ]
            </div>
          </div>

          {/* ESTADO 2: SER ELEGIDO (El Éxito/La Magia) */}
          {/* Utilizamos clipPath para crear el efecto de cortina que se abre desde el centro */}
          <motion.div
            className="absolute inset-0 bg-[#c23b22] flex flex-col items-center justify-center text-center p-8 overflow-hidden"
            initial={{ clipPath: "inset(50% 0 50% 0)" }} // Empieza cerrado horizontalmente (como un ojo cerrado)
            whileHover={{ clipPath: "inset(0% 0 0% 0)" }} // Se abre completo
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Curva Bezier suave
          >
            {/* Background: Velocidad/Luz (Metáfora de tráfico y conversión) */}
            <div className="absolute inset-0 opacity-50 mix-blend-multiply">
               <img 
                 src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                 alt="Speed lights red cybersecurity" 
                 className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                 onError={(e) => {
                   // Fallback si la imagen falla
                   e.currentTarget.style.display = 'none';
                 }}
               />
               {/* Fallback gradient in case image loads slow */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#c23b22] to-black -z-10"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-6xl md:text-9xl font-heading font-black text-[#f3eadc] tracking-tighter mb-6 drop-shadow-lg">
                SER ELEGIDO
              </h2>
              <div className="inline-block bg-[#f3eadc] text-[#c23b22] px-6 py-2 font-bold tracking-[0.2em] uppercase text-sm md:text-base shadow-xl">
                Confianza, autoridad y ventas
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center">
          <p className="text-sm md:text-xl font-medium text-[#1c1c1c]/80 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <span>El SEO no va de buscadores.</span>
            <span className="hidden md:inline w-12 h-[1px] bg-[#c23b22]"></span>
            <span className="font-bold text-[#c23b22]">Va de que te encuentren.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ConceptDuality;