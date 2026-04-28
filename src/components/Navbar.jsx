import React from 'react';

export default function Navbar({ onTutorial, onArvore, onHome, titulo }) {
  return (
    <>
      {/* TÍTULO (Centro)  */}
      <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-[#f4d29c] px-4 md:px-8 py-2 md:py-3 border-4 border-[#5c2f18] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] z-20">
        <h1 className="text-[#5c2f18] text-[10px] sm:text-sm md:text-xl font-bold uppercase tracking-tighter text-center whitespace-nowrap font-['Press_Start_2P',monospace]">
          Sala {titulo}
        </h1>
      </div>

      {/* Botão COMO USAR (Esquerda) */}
      <div className="absolute -top-12 md:-top-14 left-2 md:left-6 z-30">
        <button onClick={onTutorial} className="flex items-center justify-center gap-2 bg-[#5c2f18] text-[#f4d29c] border-4 border-[#311005] px-4 py-2 font-['Press_Start_2P',monospace] text-[10px] md:text-sm hover:bg-[#7b4324] shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-all active:translate-y-1">
          <span className="text-sm md:text-xl">❓</span> 
          <span className="hidden md:inline">Como Usar</span>
        </button>
      </div>

      {/* Botões ÁRVORE e HOME (Direita) */}
      <div className="absolute -top-12 md:-top-14 right-2 md:right-6 z-30 flex gap-2 md:gap-4">
        <button onClick={onArvore} className="flex items-center justify-center gap-2 bg-[#5c2f18] text-[#f4d29c] border-4 border-[#311005] px-3 py-2 md:px-4 font-['Press_Start_2P',monospace] text-[10px] md:text-sm hover:bg-[#7b4324] shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-all active:translate-y-1">
          <span className="text-sm md:text-xl">🌳</span> 
          <span className="hidden md:inline">Árvore</span>
        </button>
        <button onClick={onHome} className="flex items-center justify-center gap-2 bg-[#5c2f18] text-[#f4d29c] border-4 border-[#311005] px-3 py-2 md:px-4 font-['Press_Start_2P',monospace] text-[10px] md:text-sm hover:bg-[#7b4324] shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-all active:translate-y-1">
          <span className="text-sm md:text-xl">🏠</span> 
          <span className="hidden md:inline">Home</span>
        </button>
      </div>
    </>
  );
}