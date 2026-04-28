export default function ItemCard({ item, progresso, onClick }) {
  return (
    <div className="flex flex-col items-center gap-2 w-16 md:w-20 group">
      <div 
        onClick={() => onClick(item)} 
        className="w-16 h-16 md:w-20 md:h-20 bg-[#dcb35c] border-2 md:border-4 border-[#5c2f18] flex items-center justify-center shadow-[inset_-2px_-2px_0_rgba(0,0,0,0.2)] cursor-pointer transition-transform hover:-translate-y-1 relative"
      >
        <img 
          src={item.icon} 
          alt={item.nome} 
          className="w-10 h-10 md:w-14 md:h-14 object-contain [image-rendering:pixelated]" 
        />
        {progresso[item.idBackend] && (
          <span className="absolute bottom-0 right-0 text-[#2ecc71] text-lg md:text-2xl font-bold drop-shadow-md">✔</span>
        )}
      </div>
      <span className="text-[9px] md:text-[11px] text-[#5c2f18] text-center uppercase font-bold font-mono">
        {item.nome}
      </span>
    </div>
  );
}