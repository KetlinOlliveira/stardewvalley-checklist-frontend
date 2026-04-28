export default function TutorialModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99998] flex justify-center items-center p-4">
      <div className="bg-[#F5EDC4] w-full max-w-3xl p-6 md:p-8 border-4 md:border-8 border-[#4D2607] outline outline-2 md:outline-4 outline-[#C89B54] md:-outline-offset-[12px] -outline-offset-[6px] rounded-xl flex flex-col gap-4 relative">
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-[#d63031] text-white border-2 border-[#8B0000] rounded-full w-10 h-10 md:w-14 md:h-14 font-bold flex items-center justify-center hover:scale-110">X</button>
        <h2 className="font-['Press_Start_2P',monospace] text-sm md:text-2xl text-[#F8D030] drop-shadow-[2px_2px_0_#4D2607] text-center mb-4">Guia de Sobrevivência</h2>
        <div className="text-sm md:text-lg text-[#4D2607] leading-relaxed font-sans">
          <p className="mb-4"><strong>1. Navegue:</strong> Use as setas (◄ ►) para trocar de Sala.</p>
          <p className="mb-4"><strong>2. Árvore:</strong> Veja os presentes clicando no botão "Árvore".</p>
          <p className="mb-4"><strong>3. Backend:</strong> Clique nos itens para ler as dicas reais do servidor Render.</p>
          <p className="mb-4"><strong>4. Salve:</strong> O progresso é guardado no seu navegador!</p>
        </div>
      </div>
    </div>
  );
}