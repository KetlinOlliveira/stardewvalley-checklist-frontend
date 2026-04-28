import React from 'react';

export default function BundleList({ pacotes, progresso, onItemClick }) {
  
  if (!pacotes) return <div className="text-[#f4d29c] text-center p-10">Carregando pergaminhos...</div>;

  const isPacoteCompleto = (itens) => itens?.every(i => progresso[i.idBackend]);

  return (
    <div className="mt-10 md:mt-8 flex flex-col gap-4">
      {pacotes.map((pacote) => {
        const completo = isPacoteCompleto(pacote.itens);
        return (
          <div key={pacote.id} className="relative flex flex-col md:flex-row items-center w-full bg-[#f4d29c] border-b-4 border-r-4 border-[#d1a36a] border-t-2 border-l-2 border-[#ffebc2] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            
            {/* Lado Esquerdo: Título do Pacote */}
            <div className="flex items-center justify-between md:justify-start gap-4 p-3 md:p-4 w-full md:w-80 md:border-r-4 md:border-dashed md:border-[#d1a36a] shrink-0 border-b-2 md:border-b-0 border-dashed border-[#d1a36a]">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 md:border-4 border-[#5c2f18] flex items-center justify-center shrink-0">
                <img src={pacote.npcImage} alt={pacote.titulo} className="w-full h-full object-cover [image-rendering:pixelated]" />
              </div>
              <h3 className="text-[#311005] text-[10px] md:text-sm font-bold uppercase font-['Press_Start_2P',monospace] flex-1">{pacote.titulo}</h3>
              {completo && <span className="text-2xl md:text-4xl text-[#2ecc71] font-bold ml-2">✔</span>}
            </div>

            {/* Lado Direito: Grid de Itens */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 p-3 md:p-4 flex-1">
              {pacote.itens.map((item) => (
                <div key={item.idBackend} className="flex flex-col items-center gap-2 w-16 md:w-20">
                  <div onClick={() => onItemClick(item)} className="relative w-16 h-16 md:w-20 md:h-20 bg-[#dcb35c] border-2 md:border-4 border-[#5c2f18] flex items-center justify-center cursor-pointer hover:-translate-y-1">
                    <img src={item.icon} alt={item.nome} className="w-10 h-10 md:w-14 md:h-14 object-contain [image-rendering:pixelated]" />
                    {progresso[item.idBackend] && <span className="absolute bottom-0 right-0 text-[#2ecc71] text-lg md:text-2xl font-bold">✔</span>}
                  </div>
                  <span className="text-[9px] md:text-[11px] text-[#5c2f18] text-center font-bold font-mono">{item.nome}</span>
                </div>
              ))}
            </div>
            
          </div>
        );
      })}
    </div>
  );
}