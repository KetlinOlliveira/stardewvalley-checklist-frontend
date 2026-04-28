import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#3e1f0b] py-3 md:py-6 px-3 flex flex-col items-center gap-4 w-full z-50">
      
      {/* Links Principais */}
      <div className="flex justify-center gap-6 md:gap-12 flex-wrap">
        <a href="https://portifolio-ket.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#d2a679] text-base md:text-2xl font-bold transition-colors hover:text-[#F9EC88] no-underline font-['Open Sans',sans-serif]">
          Portfólio
        </a>
        <a href="https://github.com/KetlinOlliveira" target="_blank" rel="noopener noreferrer" className="text-[#d2a679] text-base md:text-2xl font-bold transition-colors hover:text-[#F9EC88] no-underline font-['Open Sans',sans-serif]">
          GitHub
        </a>
        <Link to="/sobre" className="text-[#d2a679] text-base md:text-2xl font-bold transition-colors hover:text-[#F9EC88] no-underline font-['Open Sans',sans-serif]">
          Sobre
        </Link>
      </div>

      {/* Linha de Direitos Reservados */}
      <div className="mt-2 text-[#d2a679] text-xs md:text-sm font-['Nunito',sans-serif] text-center opacity-80">
        <p>&copy; 2026 Ketlin Oliveira. Todos os direitos reservados.</p>
      </div>

    </footer>
  );
}