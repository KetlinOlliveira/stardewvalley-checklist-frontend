import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#8c502a] font-['Open Sans',sans-serif] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] md:min-h-[100vh] bg-[#0f172a] bg-[url('/assets/images/bg-centro-comunitario.png')] bg-cover bg-no-repeat bg-bottom flex flex-col items-center pt-10">
        
        {/* Nav Bar Responsiva */}
        <header className="absolute top-0 w-full flex justify-center gap-4 sm:gap-8 md:gap-16 bg-[#0b103e7f] p-3 md:p-3 z-10 font-['Nunito',sans-serif]">
          <Link to="/" className="text-[#F9EC88] no-underline text-sm sm:text-lg md:text-2xl font-bold uppercase drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] transition-colors hover:text-[#F9EC88]">HOME</Link>
          <Link to="/guia" className="text-white no-underline text-sm sm:text-lg md:text-2xl font-bold uppercase drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] transition-colors hover:text-[#F9EC88]">IR AO GUIA</Link>
          <Link to="/sobre" className="text-white no-underline text-sm sm:text-lg md:text-2xl font-bold uppercase drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] transition-colors hover:text-[#F9EC88]">SOBRE</Link>
        </header>

        {/* Logo */}
        <img src="/assets/images/logo-stardew.png" alt="Logo" className="w-[90%] max-w-[6   00px] md:max-w-[600px] mt-16 md:mt-10 [image-rendering:pixelated] drop-shadow-[0px_8px_5px_rgba(0,0,0,0.6)] z-[5]" />
        
      </section>

      

      {/* 2. CONTEÚDO */}
      <section className="bg-[#f8e487] border-b-8 border-[#5a3216] py-10 md:py-16 px-4 md:px-5 flex flex-col items-center text-center w-full">
        <div className="max-w-[1000px] text-[#563500]">
          {/* Título: 3xl no celular, 5rem no PC */}
          <h1 className="text-3xl sm:text-4xl md:text-[4rem] text-[#406AAF]  mb-6 md:mb-10 tracking-[2px] leading-tight md:leading-none">
            <strong>Guia Centro Comunitário</strong>
          </h1>
          {/* Texto: base no celular, 1.8rem no PC */}
          <p className="text-base sm:text-lg md:text-[1.7rem] leading-[1.6] md:leading-[1.8] drop-shadow-[1px_1px_0px_#3e1f0b] mb-10 md:mb-12 tracking-[1px]">
            Bem-vindo! Este projeto foi criado para facilitar a vida dos jogadores na hora de completar o objetivo principal de Stardew Valley.  <br className="hidden md:block"/><br className="hidden md:block"/>
             <br></br>🌱 <strong>Interaja</strong> com os conjuntos de cada sala.<br></br>
             🔍​<strong>Descubra</strong> onde encontrar cada Item.<br></br>
             ✅​<strong>Conclua</strong> todos os conjuntos marcando o checkbox.<br></br>
             ❤️​<strong>Receba</strong> o amor dos junimos ao completar!<br></br>
             Utilize nosso guia interativo para acompanhar o seu progresso!
          </p>
        </div>

        <div className="w-full flex flex-col items-center mt-12">
  
        {/* linha em onda */}
        <hr className="linha-onda max-w-[800px]" />

        <h2 className="text-2xl md:text-5xl text-[#406AAF] drop-shadow-[2px_2px_0px_#d5820591] mb-6 tracking-wide text-center">
            O Centro Comunitário Restaurado
        </h2>

        {/* Imagem do Centro Comunitário */}
        <div className="relative group overflow-hidden pxborder-4 border-[#5a3216] shadow-[8px_8px_0_rgba(0,0,0,0.4)] transition-transform hover:scale-[1.02]">
            <img 
            src="/assets/images/centro-concluido.jpg" 
            alt="Centro Comunitário Concluído" 
            className="w-full max-w-[1000px] h-auto object-cover [image-rendering:pixelated]"></img>
        </div>

     <p className="mt-8 md:mt-12 text-base sm:text-lg md:text-[1.4rem] text-[#563500] leading-[1.6] md:leading-[1.8] drop-shadow-[1px_1px_0px_#3e1f0b] mb-8 md:mb-12 tracking-[1px] max-w-[900px] text-center px-4">
  Para ativar os Conjuntos do Centro Comunitário, você deve acionar uma cena de corte com Lewis. Entre na Vila Pelicanos a partir da tela da parada de ônibus em um dia ensolarado na Primavera 5 em diante ou entre 08:00 e 11:50.
</p>
        

         {/* Botões: w-[110px] no celular, w-[180px] no PC */}
       <div className="flex justify-center gap-4 md:gap-8 flex-wrap mt-8 md:mt-12">
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

        {/* Linha em onda */}
        <hr className="linha-onda max-w-[800px]" />
        </div>
          <div className="w-full max-w-[1300px] mt-10 md:mt-5 px-4 md:px-0">
          <img 
            src="/assets/images/banner-eu.png" 
            alt="Banner Ketlin - Esse projeto foi feito com muito amor!" 
            className="w-full h-auto [image-rendering:pixelated] drop-shadow-[6px_6px_0px_rgba(0,0,0,0.3)]"
          />
        </div>
      
      </section>

      {/* 3. RODAPÉ */}
      <Footer />    

    </div>
  );
}