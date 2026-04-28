import React from 'react';

export default function BundleModal({ pacote, onClose, onItemClick, progresso }) {
  if (!pacote) return null;

  const isPacoteCompleto = (itens) => itens?.every(i => progresso[i.idBackend]);

  return (
    <div className="fixed inset-0 bg-black/60 z-[99998] flex justify-center items-center p-2 md:p-4">
      <div className="relative w-full max-w-4xl bg-[#f4d29c] border-b-4 md:border-b-8 border-r-4 md:border-r-8 border-[#d1a36a] border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-[#ffebc2] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] p-4 md:p-6">
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-[#d63031] text-white border-4 border-[#8B0000] rounded-full w-10 h-10 md:w-14 md:h-14 font-bold md:text-xl flex items-center justify-center hover:scale-110">X</button>
        
        {isPacoteCompleto(pacote.itens) && (
          <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-[#2ecc71] text-white px-4 py-1 md:px-6 md:py-2 border-4 border-[#145a32] shadow-[4px_4px_0_rgba(0,0,0,0.4)] font-['Press_Start_2P',monospace] text-[10px] md:text-sm transform -rotate-2">
            CONCLUÍDO!
          </div>
        )}
        
        <div className="flex flex-col md:flex-row items-center w-full mt-4">
          <div className="flex items-center justify-between md:justify-start gap-4 p-2 md:p-4 w-full md:w-80 md:border-r-4 border-dashed border-[#d1a36a] border-b-4 md:border-b-0 shrink-0">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-2 md:border-4 border-[#5c2f18] flex items-center justify-center shrink-0">
              <img src={pacote.npcImage} alt={pacote.titulo} className="w-full h-full object-cover [image-rendering:pixelated]" />
            </div>
            <h3 className="text-[#311005] text-[10px] md:text-sm font-bold uppercase font-['Press_Start_2P',monospace] text-center md:text-left">{pacote.titulo}</h3>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 p-4 flex-1">
            {pacote.itens.map((item) => (
              <div key={`modal-item-${item.idBackend}`} className="flex flex-col items-center gap-2 w-16 md:w-20 group">
                <div onClick={() => onItemClick(item)} className="relative w-16 h-16 md:w-20 md:h-20 bg-[#dcb35c] border-2 md:border-4 border-[#5c2f18] flex items-center justify-center cursor-pointer hover:-translate-y-1">
                  <img src={item.icon} alt={item.nome} className="w-10 h-10 md:w-14 md:h-14 object-contain [image-rendering:pixelated]" />
                  {progresso[item.idBackend] && <span className="absolute bottom-0 right-0 text-[#2ecc71] text-lg md:text-2xl font-bold drop-shadow-md">✔</span>}
                </div>
                <span className="text-[9px] md:text-[11px] text-[#5c2f18] text-center uppercase tracking-tighter leading-tight font-bold font-mono">{item.nome}</span>
              </div>
            ))}
          </div>
        </div>
        
        {pacote.recompensa && (
          <div className="mt-4 md:mt-8 mx-auto w-fit bg-[#e2bc7a] border-2 md:border-4 border-[#5c2f18] rounded-full px-4 md:px-8 py-2 md:py-3 flex items-center gap-2 md:gap-4">
            <img src={pacote.recompensa.icone} alt="Recompensa" className="w-8 h-8 md:w-10 md:h-10 [image-rendering:pixelated]" />
            <span className="font-['Press_Start_2P',monospace] text-[9px] md:text-sm text-[#311005]">Recompensa: {pacote.recompensa.nome}</span>
          </div>
        )}
      </div>
    </div>
  );
}