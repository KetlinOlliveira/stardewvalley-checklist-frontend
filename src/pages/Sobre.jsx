import React from 'react';
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-[#1b3b65] p-2 md:p-10 flex justify-center items-start font-mono" style={{ backgroundImage: "url('/assets/images/background-guia.png')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
      
      {/* Placa Principal*/}
      <div className="w-full max-w-4xl bg-[#311005] p-4 md:p-10 border-4 md:border-8 border-[#5c2f18] ring-2 md:ring-4 ring-black shadow-[12px_12px_0_0_rgba(0,0,0,0.5)] rounded-sm relative mt-32 animate-fade-in-down">
        
        {/* NAVEGAÇÃO DE TOPO */}
        <div className="absolute -top-24 left-0 right-0 flex flex-row justify-center items-center gap-4 md:gap-8 z-30 w-full px-2 md:px-0">
          
          <Link to="/" className="flex items-center justify-center gap-2 bg-[#5c2f18] text-[#f4d29c] border-4 border-[#311005] px-6 py-3 font-['Press_Start_2P',monospace] text-[10px] md:text-sm hover:bg-[#7b4324] shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-all active:translate-y-1 no-underline">
            <span className="text-sm md:text-xl">◄</span> Voltar
          </Link>
          
          <Link to="/guia" className="flex items-center justify-center gap-2 bg-[#5c2f18] text-[#f4d29c] border-4 border-[#311005] px-6 py-3 font-['Press_Start_2P',monospace] text-[10px] md:text-sm hover:bg-[#7b4324] shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-all active:translate-y-1 no-underline">
            <span className="text-sm md:text-xl">📖</span> Ir ao Guia
          </Link>

        </div>

        {/* TÍTULO DA PÁGINA */}
        <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-[#f4d29c] px-6 md:px-8 py-2 md:py-3 border-4 border-[#5c2f18] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] z-20">
          <h1 className="text-[#5c2f18] text-[10px] sm:text-sm md:text-xl font-bold uppercase tracking-tighter text-center whitespace-nowrap font-['Press_Start_2P',monospace]">
            Sobre o Projeto
          </h1>
        </div>

        {/* Pergaminho Interno */}
        <div className="mt-8 bg-[#f4d29c] border-b-4 md:border-b-8 border-r-4 md:border-r-8 border-[#d1a36a] border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-[#ffebc2] p-4 md:p-10 shadow-[inset_0_0_20px_rgba(209,163,106,0.3)] flex flex-col gap-6 md:gap-8 text-[#5c2f18]">
          
          <section className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center gap-3 border-b-4 border-dashed border-[#d1a36a] pb-2">
              <img src="/assets/images/junimo.gif" alt="Junimo" className="w-8 h-8 md:w-10 md:h-10 [image-rendering:pixelated]" onError={(e) => { e.target.style.display = 'none' }} />
              <h2 className="font-['Press_Start_2P',monospace] text-[10px] md:text-lg text-[#311005]">O Guia Interativo</h2>
            </div>
            {/* Texto menor no celular para melhor leitura */}
            <p className="font-sans font-bold text-sm md:text-lg leading-relaxed text-[#4D2607]">
              Este projeto nasceu da necessidade de criar uma ferramenta prática e imersiva para jogadores de Stardew Valley. Sem fins lucrativos, o guia é de fácil uso para jogadores que ainda não completaram o Centro Comunitário.
            </p>
            <p className="font-sans font-bold text-sm md:text-lg leading-relaxed text-[#4D2607]">
              Toda a interface foi construída com <strong>React e Tailwind CSS</strong> garantindo responsividade, consumindo dados de uma API RESTful em <strong>Java (Spring Boot)</strong>.
            </p>
          </section>
            

          <section className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center gap-3 border-b-4 border-dashed border-[#d1a36a] pb-2">
              <span className="text-2xl md:text-3xl">💻</span>
              <h2 className="font-['Press_Start_2P',monospace] text-[10px] md:text-lg text-[#311005]">A Desenvolvedora</h2>
            </div>
            <p className="font-sans font-bold text-sm md:text-lg leading-relaxed text-[#4D2607]">
              Olá! Meu nome é <strong>Ketlin Oliveira</strong>. Sou estudante de Análise e Desenvolvimento de Sistemas no IFBA e apaixonada por tecnologia. Sou desenvolvedora FullStack em constante desenvolvimento e sempre disposta a criar novos projetos!
            </p>
          </section>


              <section className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center gap-3 border-b-4 border-dashed border-[#d1a36a] pb-2">
              <span className="text-2xl md:text-3xl">❤️</span>
              <h2 className="font-['Press_Start_2P',monospace] text-[10px] md:text-lg text-[#311005]">Gostou do Projeto?</h2>
            </div>
            <p className="font-sans font-bold text-sm md:text-lg leading-relaxed text-[#4D2607]">
              Vamos criar algo juntos! Acesse meu <strong>portifolio</strong>, na sessão "contatos" e me envie sua mensagem! Vamos transformar ideias criativas em projetos web! 
            </p>
          </section>

          <section className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-4 pt-6 border-t-4 border-[#d1a36a]">
            <a href="https://github.com/KetlinOlliveira" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full md:w-auto gap-3 bg-[#e6a103] border-b-4 border-r-4 border-[#a86501] px-6 py-3 hover:brightness-110 active:border-0 active:translate-y-1 transition-all text-[#311005] font-['Press_Start_2P',monospace] text-[10px] no-underline">
              <span className="text-base">🖥️</span> GITHUB
            </a>
            <a href="https://portifolio-ket.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full md:w-auto gap-3 bg-[#e6a103] border-b-4 border-r-4 border-[#a86501] px-6 py-3 hover:brightness-110 active:border-0 active:translate-y-1 transition-all text-[#311005] font-['Press_Start_2P',monospace] text-[10px] no-underline">
              <span className="text-base">🌟</span> PORTFÓLIO
            </a>
          </section>

        </div>
      </div>
    </div>
  );
}