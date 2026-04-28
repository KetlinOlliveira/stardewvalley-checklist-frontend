import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { stardewCategorias, posicoesGalhos } from '../data/stardewData';

// Importando os componentes
import Navbar from './Navbar';
import BundleList from './BundleList';
import TreeModal from './TreeModal';
import BundleModal from './BundleModal';
import ItemModal from './ItemModal';
import TutorialModal from './TutorialModal';

export default function MuralComunidade() {
  const navigate = useNavigate();
  const [categoriaAtual, setCategoriaAtual] = useState(0);
  const [isArvoreOpen, setIsArvoreOpen] = useState(false);
  const [pacoteModal, setPacoteModal] = useState(null);
  const [itemModal, setItemModal] = useState(null);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [progresso, setProgresso] = useState({});

  useEffect(() => {
    const saved = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('stardew_item_')) {
        const id = key.split('_')[2];
        saved[id] = localStorage.getItem(key) === 'true';
      }
    }
    setProgresso(saved);
  }, []);

  const mudarCategoria = (direcao) => {
    setCategoriaAtual((prev) => {
      let nova = prev + direcao;
      if (nova >= stardewCategorias.length) nova = 0;
      if (nova < 0) nova = stardewCategorias.length - 1;
      return nova;
    });
    setIsArvoreOpen(false);
    setPacoteModal(null);
  };

  const toggleConclusaoItem = (idBackend) => {
    const novoStatus = !progresso[idBackend];
    setProgresso(prev => ({ ...prev, [idBackend]: novoStatus }));
    localStorage.setItem(`stardew_item_${idBackend}`, novoStatus);
  };

  const abrirModalItem = async (itemBase) => {
    console.log("CLICOU NO ITEM:", itemBase.nome);
    setItemModal({ ...itemBase, isLoading: true, descricao: "Buscando dados...", comoObter: "..." });
    try {
      const resposta = await fetch(`https://stardewvalley-api-backend.onrender.com/api/items/${itemBase.idBackend}`);
      if (!resposta.ok) throw new Error("Erro no servidor");
      const dadosBackend = await resposta.json();
      setItemModal({
        ...itemBase,
        descricao: dadosBackend.descricao || "Descrição não encontrada.",
        comoObter: dadosBackend.comoObter || dadosBackend.comoConseguir || "Informação indisponível.",
        isLoading: false
      });
    } catch (erro) {
      setItemModal({
        ...itemBase, descricao: "Não foi possível conectar ao banco.", comoObter: "Verifique a API.", isLoading: false, isError: true
      });
    }
  };

  const categoria = stardewCategorias[categoriaAtual];

  return (
    <div className="min-h-screen bg-[#1b3b65] p-2 md:p-10 flex justify-center items-start font-mono" style={{ backgroundImage: "url('/assets/images/background-guia.png')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
      
      {/* Placa Maior - Agora com as classes completas de volta! */}
      <div className="w-full max-w-4xl bg-[#311005] p-4 md:p-8 border-4 md:border-8 border-[#5c2f18] ring-2 md:ring-4 ring-black shadow-[12px_12px_0_0_rgba(0,0,0,0.5)] rounded-sm relative mt-32 md:mt-36">
        
        {/* NAVEGAÇÃO DE TOPO */}
        <Navbar 
          onTutorial={() => setIsTutorialOpen(true)} 
          onArvore={() => setIsArvoreOpen(true)} 
          onHome={() => navigate('/')} 
          titulo={categoria.nome}
        />

        {/* SETAS DO CARROSSEL */}
        <button onClick={() => mudarCategoria(-1)} className="absolute top-1 md:top-4 left-0 md:-left-20 text-6xl md:text-[90px] text-[#5c2f18] drop-shadow-[2px_2px_0_#f8d030] hover:scale-110 transition-transform z-10">
          ◄
        </button>
        <button onClick={() => mudarCategoria(1)} className="absolute top-1 md:top-4 right-0 md:-right-20 text-6xl md:text-[90px] text-[#5c2f18] drop-shadow-[2px_2px_0_#f8d030] hover:scale-110 transition-transform z-10">
          ►
        </button>

        {/* LISTA DE PERGAMINHOS */}
        <BundleList 
          pacotes={categoria.pacotes} 
          progresso={progresso} 
          onItemClick={abrirModalItem} 
        />
      </div>

      {/* MODAIS */}
      <TreeModal 
        isOpen={isArvoreOpen} 
        onClose={() => setIsArvoreOpen(false)} 
        categoria={categoria} 
        onSelectBundle={setPacoteModal}
        progresso={progresso}
      />

      <BundleModal 
        pacote={pacoteModal} 
        onClose={() => setPacoteModal(null)} 
        onItemClick={abrirModalItem}
        progresso={progresso}
      />

      <ItemModal 
        item={itemModal} 
        onClose={() => setItemModal(null)} 
        onToggle={toggleConclusaoItem}
        progresso={progresso}
      />

      <TutorialModal 
        isOpen={isTutorialOpen} 
        onClose={() => setIsTutorialOpen(false)} 
      />

    </div>
  );
}