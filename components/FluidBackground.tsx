/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f3eadc]">
      
      {/* Subtle Warm Gradient Spot for depth (Top Left) */}
      <div 
        className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-white opacity-40 blur-[100px]"
      />

      {/* Subtle Warm Gradient Spot for depth (Bottom Right) */}
      <div 
        className="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-[#e8dac5] opacity-30 blur-[100px]"
      />

      {/* Static Grain Overlay for Industrial Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply pointer-events-none"></div>
      
    </div>
  );
};

export default FluidBackground;