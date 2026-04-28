import React from 'react';
import { posicoesGalhos } from '../data/stardewData'; // Ajuste o caminho se necessário

export default function TreeModal({ isOpen, onClose, categoria, onSelectBundle, progresso }) {
  if (!isOpen) return null;

  const isPacoteCompleto = (itens) => itens?.every(i => progresso[i.idBackend]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99997] flex justify-center items-center p-2 md:p-4">
      <div className="bg-[#311005] w-full max-w-4xl p-4 md:p-8 border-4 md:border-8 border-[#5c2f18] shadow-[8px_8px_0_rgba(0,0,0,0.5)] relative flex flex-col items-center">
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-[#d63031] text-white border-4 border-[#8B0000] rounded-full w-10 h-10 md:w-14 md:h-14 font-bold text-lg md:text-2xl flex items-center justify-center hover:scale-110 z-10">X</button>
        <h2 className="font-['Press_Start_2P',monospace] text-base md:text-3xl mb-4 md:mb-8 text-center text-[#F8D030] drop-shadow-[3px_3px_0_#000]">Árvore de {categoria.nome}</h2>
        
        <div className="relative w-full max-w-[700px] flex justify-center">
          <img src="/assets/images/tree.png" alt="Árvore" className="w-full h-auto object-contain max-h-[60vh] md:max-h-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" />
          <div className="absolute top-0 left-0 w-full h-full">
            {categoria.pacotes.map((pacote, index) => {
              if (index >= posicoesGalhos.length) return null;
              const completo = isPacoteCompleto(pacote.itens);
              
              return (
                <div key={`arvore-pacote-${pacote.id}`} className="absolute flex flex-col items-center gap-1 md:gap-2" style={{ top: posicoesGalhos[index].top, left: posicoesGalhos[index].left, transform: 'translate(-50%, -50%)' }}>
                  <span className="text-white font-['Press_Start_2P',monospace] text-[8px] md:text-[14px] drop-shadow-[2px_2px_0_#000] whitespace-nowrap text-center z-10">
                    {pacote.titulo.replace('Conjunto ', '').replace('Conj. ', '')}
                  </span>
                  {/* Botão de presente */}
                  <button onClick={() => onSelectBundle(pacote)} className="w-10 h-10 md:w-20 md:h-20 bg-transparent border-0 cursor-pointer hover:scale-110 flex items-center justify-center relative">
                    <img src="/assets/images/botoes/btn-presente.png" alt="Presente" className="w-full h-full object-contain [image-rendering:pixelated] relative z-0" />
                    {completo && <span className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 text-[#2ecc71] text-xl md:text-4xl font-bold drop-shadow-[2px_2px_0_#000] z-10">✔</span>}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}