import React from 'react';

export default function ItemModal({ item, progresso, onToggle, onClose }) {
  // Se não houver item, não renderiza nada
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999] flex justify-center items-center p-4">
      <div className="bg-[#F5EDC4] w-full max-w-2xl p-6 md:p-8 border-4 md:border-8 border-[#4D2607] outline outline-2 md:outline-4 outline-[#C89B54] md:-outline-offset-[12px] -outline-offset-[6px] rounded-xl flex flex-col gap-4 relative">
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-[#d63031] text-white border-2 md:border-4 border-[#8B0000] rounded-full w-10 h-10 md:w-14 md:h-14 font-bold md:text-xl flex items-center justify-center hover:scale-110">X</button>
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-white border-4 border-[#4D2607] flex justify-center items-center shrink-0">
            <img src={item.icon} alt={item.nome} className="w-14 h-14 md:w-20 md:h-20 object-contain [image-rendering:pixelated]" />
          </div>
          <h2 className="font-['Press_Start_2P',monospace] text-base md:text-2xl text-[#4D2607] drop-shadow-[2px_2px_0_#F8D030] flex-1">{item.nome}</h2>
          <button onClick={() => onToggle(item.idBackend)} className="shrink-0 hover:scale-110">
            <img 
              src={progresso[item.idBackend] ? "/assets/images/botoes/btn-check-mark.png" : "/assets/images/botoes/btn-check-desm.png"} 
              alt="Status" 
              className="h-12 md:h-20 w-auto [image-rendering:pixelated]" 
            />
          </button>
        </div>

        <div className="text-sm md:text-lg text-[#4D2607] leading-relaxed max-h-[40vh] overflow-y-auto pr-2 font-sans font-bold">
          {item.isLoading ? (
            <div className="text-center py-10 animate-pulse text-[#8B5A2B]">⏳ Consultando a biblioteca...</div>
          ) : (
            <>
              <p dangerouslySetInnerHTML={{ __html: item.descricao || 'Sem descrição.' }} />
              <hr className="my-4 border-t-2 md:border-t-4 border-dashed border-[#8B5A2B] opacity-50" />
              <p><strong>Como obter: </strong><span dangerouslySetInnerHTML={{ __html: item.comoObter || 'Informação indisponível.' }} /></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}