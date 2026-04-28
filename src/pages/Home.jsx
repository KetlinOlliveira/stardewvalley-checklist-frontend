import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#8c502a] font-['StardewValley',sans-serif] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
      {/* Trocamos o bg-[length...] pelo bg-cover e adicionamos um fundo azul marinho de segurança bg-[#0f172a] */}
      <section className="relative w-full min-h-[90vh] md:min-h-[100vh] bg-[#0f172a] bg-[url('/assets/images/bg-centro-comunitario.png')] bg-cover bg-no-repeat bg-bottom flex flex-col items-center pt-10">
        
        {/* Nav Bar Responsiva */}
        <header className="absolute top-0 w-full flex justify-center gap-4 sm:gap-8 md:gap-16 bg-[#0b103e7f] p-3 md:p-5 z-10 font-['Nunito']">
          <Link to="/" className="text-[#F9EC88] no-underline text-sm sm:text-lg md:text-2xl font-bold uppercase drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] transition-colors hover:text-[#F9EC88]">HOME</Link>
          <Link to="/guia" className="text-white no-underline text-sm sm:text-lg md:text-2xl font-bold uppercase drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] transition-colors hover:text-[#F9EC88]">IR AO GUIA</Link>
          <Link to="/sobre" className="text-white no-underline text-sm sm:text-lg md:text-2xl font-bold uppercase drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] transition-colors hover:text-[#F9EC88]">SOBRE</Link>
        </header>

        {/* Logo */}
        <img src="/assets/images/logo-stardew.png" alt="Logo" className="w-[90%] max-w-[400px] md:max-w-[600px] mt-16 md:mt-10 [image-rendering:pixelated] drop-shadow-[0px_8px_5px_rgba(0,0,0,0.6)] z-[5]" />
        
      </section>

      {/* 2. CONTEÚDO */}
      <section className="bg-[#f8e487] border-b-8 border-[#5a3216] py-10 md:py-16 px-4 md:px-5 flex flex-col items-center text-center w-full">
        <div className="max-w-[1000px] text-[#563500]">
          {/* Título: 3xl no celular, 5rem no PC */}
          <h1 className="text-3xl sm:text-4xl md:text-[5rem] text-[#482d00] drop-shadow-[3px_3px_0px_#d5820591] mb-6 md:mb-10 tracking-[2px] leading-tight md:leading-none">
            Guia Centro Comunitário
          </h1>
          {/* Texto: base no celular, 1.8rem no PC */}
          <p className="text-base sm:text-lg md:text-[1.8rem] leading-[1.6] md:leading-[1.8] drop-shadow-[1px_1px_0px_#3e1f0b] mb-10 md:mb-12 tracking-[1px]">
            Bem-vindo! Este projeto foi criado para facilitar a vida dos jogadores na hora de completar o objetivo principal de Stardew Valley. <br className="hidden md:block"/><br className="hidden md:block"/>
            Use nosso guia interativo para acompanhar o seu progresso!
          </p>
        </div>

        {/* Botões: w-[110px] no celular, w-[180px] no PC */}
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          <Link to="/guia" className="group block transition-transform duration-200 hover:-translate-y-2 hover:scale-105">
            <img src="/assets/images/botoes/guia-btn.png" alt="Guia" className="w-[110px] sm:w-[140px] md:w-[180px] h-auto [image-rendering:pixelated] group-hover:brightness-110 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]" />
          </Link>
          <a href="https://github.com/KetlinOlliveira" target="_blank" rel="noopener noreferrer" className="group block transition-transform duration-200 hover:-translate-y-2 hover:scale-105">
            <img src="/assets/images/botoes/github-btn.png" alt="Github" className="w-[110px] sm:w-[140px] md:w-[180px] h-auto [image-rendering:pixelated] group-hover:brightness-110 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]" />
          </a>
          <Link to="/sobre" className="group block transition-transform duration-200 hover:-translate-y-2 hover:scale-105">
            <img src="/assets/images/botoes/sobre-btn.png" alt="Sobre" className="w-[110px] sm:w-[140px] md:w-[180px] h-auto [image-rendering:pixelated] group-hover:brightness-110 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]" />
          </Link>
        </div>
      </section>

      {/* 3. RODAPÉ */}
      <footer className="bg-[#3e1f0b] py-6 md:py-8 px-4 flex justify-center gap-6 md:gap-12 flex-wrap">
        <a href="https://portifolio-ket.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#d2a679] text-base md:text-2xl font-bold transition-colors hover:text-[#F9EC88] no-underline">Portfólio</a>
        <a href="https://github.com/KetlinOlliveira" target="_blank" rel="noopener noreferrer" className="text-[#d2a679] text-base md:text-2xl font-bold transition-colors hover:text-[#F9EC88] no-underline">GitHub</a>
        <Link to="/sobre" className="text-[#d2a679] text-base md:text-2xl font-bold transition-colors hover:text-[#F9EC88] no-underline">Sobre</Link>
      </footer>

    </div>
  );
}