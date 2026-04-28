import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ============================================================================
// BANCO DE DADOS COMPLETO (Todas as 7 Salas e 115 Itens)
// ============================================================================
const stardewCategorias = [
  // ==================== 1. ARTESANATO ====================
  {
    nome: "Artesanato",
    pacotes: [
      {
        id: "primavera", titulo: "Conjunto Primavera", npcImage: "/assets/images/conjuntos/primavera.png", recompensa: { nome: "Sementes de Primavera (30)", icone: "/assets/images/images-itens/recompensas/sementes-primavera.png" },
        itens: [
          { idBackend: 1, nome: "Raiz-forte", icon: "/assets/images/images-itens/artesanato/raiz-forte.png", descricao: "Uma raiz picante da primavera.", comoObter: "Coleta (Primavera)" },
          { idBackend: 2, nome: "Narciso", icon: "/assets/images/images-itens/artesanato/narciso.png", descricao: "Uma flor tradicional da primavera.", comoObter: "Coleta (Primavera)" },
          { idBackend: 3, nome: "Alho-poró", icon: "/assets/images/images-itens/artesanato/alho-poro.png", descricao: "Um parente saboroso da cebola.", comoObter: "Coleta (Primavera)" },
          { idBackend: 4, nome: "Dente-de-leão", icon: "/assets/images/images-itens/artesanato/dente-de-leao.png", descricao: "Não é a flor mais bonita, mas faz uma boa salada.", comoObter: "Coleta (Primavera)" }
        ]
      },
      {
        id: "verao", titulo: "Conjunto Verão", npcImage: "/assets/images/conjuntos/verao.png", recompensa: { nome: "Sementes de Verão (30)", icone: "/assets/images/images-itens/recompensas/semente-verao.png" },
        itens: [
          { idBackend: 5, nome: "Uva", icon: "/assets/images/images-itens/artesanato/uva.png", descricao: "Um cacho doce.", comoObter: "Coleta (Verão)" },
          { idBackend: 6, nome: "Café", icon: "/assets/images/images-itens/artesanato/cafe.png", descricao: "Te dá energia.", comoObter: "Cultivo" },
          { idBackend: 7, nome: "Ervilha", icon: "/assets/images/images-itens/artesanato/ervilha.png", descricao: "Pequena e verde.", comoObter: "Coleta (Verão)" }
        ]
      },
      {
        id: "outono", titulo: "Conjunto Outono", npcImage: "/assets/images/conjuntos/outono.png", recompensa: { nome: "Sementes de Outono (30)", icone: "/assets/images/images-itens/recompensas/semente-outono.png" },
        itens: [
          { idBackend: 8, nome: "Amora", icon: "/assets/images/images-itens/artesanato/amora.png", descricao: "Frutinha do outono.", comoObter: "Coleta (Outono)" },
          { idBackend: 9, nome: "Cog. Comum", icon: "/assets/images/images-itens/artesanato/cogumelo-comum.png", descricao: "Cogumelo básico.", comoObter: "Coleta (Outono)" },
          { idBackend: 10, nome: "Avelã", icon: "/assets/images/images-itens/artesanato/avela.png", descricao: "Cai das árvores.", comoObter: "Coleta (Outono)" },
          { idBackend: 11, nome: "Ameixa", icon: "/assets/images/images-itens/artesanato/ameixa.png", descricao: "Doce e suculenta.", comoObter: "Coleta (Outono)" }
        ]
      },
      {
        id: "inverno", titulo: "Conjunto Inverno", npcImage: "/assets/images/conjuntos/inverno.png", recompensa: { nome: "Sementes de Inverno (30)", icone: "/assets/images/images-itens/recompensas/semente-inverno.png" },
        itens: [
          { idBackend: 12, nome: "Raiz Inv.", icon: "/assets/images/images-itens/artesanato/raiz-inverno.png", descricao: "Cresce no frio.", comoObter: "Coleta (Inverno)" },
          { idBackend: 13, nome: "Fruta Cristal", icon: "/assets/images/images-itens/artesanato/fruta-cristal.png", descricao: "Doce de inverno.", comoObter: "Coleta (Inverno)" },
          { idBackend: 14, nome: "Inhame Neve", icon: "/assets/images/images-itens/artesanato/inhame-neve.png", descricao: "Escondido na neve.", comoObter: "Coleta (Inverno)" },
          { idBackend: 15, nome: "Açafrão", icon: "/assets/images/images-itens/artesanato/alcafrao.png", descricao: "Flor da neve.", comoObter: "Coleta (Inverno)" }
        ]
      },
      {
        id: "construcao", titulo: "Conjunto Construção", npcImage: "/assets/images/conjuntos/construcao.png", recompensa: { nome: "Carvoaria (1)", icone: "/assets/images/images-itens/recompensas/carvoaria.png" },
        itens: [
          { idBackend: 16, nome: "Madeira", icon: "/assets/images/images-itens/artesanato/madeira.png", descricao: "Recurso básico.", comoObter: "Cortar árvores" },
          { idBackend: 17, nome: "Madeira", icon: "/assets/images/images-itens/artesanato/madeira.png", descricao: "Recurso básico.", comoObter: "Cortar árvores" },
          { idBackend: 18, nome: "Pedra", icon: "/assets/images/images-itens/artesanato/pedra.png", descricao: "Recurso básico.", comoObter: "Quebrar pedras" },
          { idBackend: 19, nome: "Mad. de Lei", icon: "/assets/images/images-itens/artesanato/madeira-lei.png", descricao: "Madeira resistente.", comoObter: "Cortar tocos grandes" }
        ]
      },
      {
        id: "exotico", titulo: "Recursos Exóticos", npcImage: "/assets/images/conjuntos/exotico.png", recompensa: { nome: "Prato de Outono (5)", icone: "/assets/images/images-itens/recompensas/prato-outono.png" },
        itens: [
          { idBackend: 20, nome: "Coco", icon: "/assets/images/images-itens/artesanato/coco.png", descricao: "Fruta do deserto.", comoObter: "Coleta no Deserto" },
          { idBackend: 21, nome: "Fruta Cacto", icon: "/assets/images/images-itens/artesanato/fruta-cacto.png", descricao: "Doce do deserto.", comoObter: "Coleta no Deserto" },
          { idBackend: 22, nome: "Cenoura Sub.", icon: "/assets/images/images-itens/artesanato/cenoura-sub.png", descricao: "Cenoura das minas.", comoObter: "Coleta nas Minas" },
          { idBackend: 23, nome: "Cog. Verm.", icon: "/assets/images/images-itens/artesanato/cog-vermelho.png", descricao: "Cogumelo venenoso.", comoObter: "Coleta nas Minas" },
          { idBackend: 24, nome: "Xarope", icon: "/assets/images/images-itens/artesanato/xarope-acer.png", descricao: "Vem da árvore.", comoObter: "Tornear Ácer" }
        ]
      }
    ]
  },

  // ==================== 2. COPA ====================
  {
    nome: "Copa",
    pacotes: [
      {
        id: "plantacoes_primavera", titulo: "Plantações Prim.", npcImage: "/assets/images/conjuntos/plantacoes_primavera.png", recompensa: { nome: "Solo Foliar (20)", icone: "/assets/images/images-itens/recompensas/solo-foliar.png" },
        itens: [
          { idBackend: 25, nome: "Chirívia", icon: "/assets/images/images-itens/copa/chirivia.png", descricao: "Tubérculo básico.", comoObter: "Cultivo (Primavera)" },
          { idBackend: 26, nome: "Vagem", icon: "/assets/images/images-itens/copa/vagem.png", descricao: "Cresce em treliça.", comoObter: "Cultivo (Primavera)" },
          { idBackend: 27, nome: "Couve-flor", icon: "/assets/images/images-itens/copa/couve-flor.png", descricao: "Flor grande.", comoObter: "Cultivo (Primavera)" },
          { idBackend: 28, nome: "Batata", icon: "/assets/images/images-itens/copa/batata.png", descricao: "Pode vir em dobro.", comoObter: "Cultivo (Primavera)" }
        ]
      },
      {
        id: "plantacoes_verao", titulo: "Plantações Verão", npcImage: "/assets/images/conjuntos/plantacoes_verao.png", recompensa: { nome: "Aspersor (1)", icone: "/assets/images/images-itens/recompensas/aspersor.png" },
        itens: [
          { idBackend: 29, nome: "Tomate", icon: "/assets/images/images-itens/copa/tomate.png", descricao: "Fruto vermelho.", comoObter: "Cultivo (Verão)" },
          { idBackend: 30, nome: "Pimenta", icon: "/assets/images/images-itens/copa/pimenta-quente.png", descricao: "Ardida.", comoObter: "Cultivo (Verão)" },
          { idBackend: 31, nome: "Mirtilo", icon: "/assets/images/images-itens/copa/mirtilo.png", descricao: "Rende muito.", comoObter: "Cultivo (Verão)" },
          { idBackend: 32, nome: "Melão", icon: "/assets/images/images-itens/copa/melao.png", descricao: "Fruta doce e grande.", comoObter: "Cultivo (Verão)" }
        ]
      },
      {
        id: "plantacoes_outono", titulo: "Plantações Outono", npcImage: "/assets/images/conjuntos/plantacoes_outono.png", recompensa: { nome: "Espantalho (1)", icone: "/assets/images/images-itens/recompensas/espantalho.png" },
        itens: [
          { idBackend: 33, nome: "Milho", icon: "/assets/images/images-itens/copa/milho.png", descricao: "Cultivo duradouro.", comoObter: "Cultivo (V/O)" },
          { idBackend: 34, nome: "Berinjela", icon: "/assets/images/images-itens/copa/berinjela.png", descricao: "Fruto roxo.", comoObter: "Cultivo (Outono)" },
          { idBackend: 35, nome: "Abóbora", icon: "/assets/images/images-itens/copa/abobora.png", descricao: "Rainha do outono.", comoObter: "Cultivo (Outono)" },
          { idBackend: 36, nome: "Inhame", icon: "/assets/images/images-itens/copa/inhame.png", descricao: "Raiz doce.", comoObter: "Cultivo (Outono)" }
        ]
      },
      {
        id: "plantacoes_qualidade", titulo: "Plantações Qualid.", npcImage: "/assets/images/conjuntos/plantacoes_qualidade.png", recompensa: { nome: "Frasco Cons. (1)", icone: "/assets/images/images-itens/recompensas/frasco-conserva.png" },
        itens: [
          { idBackend: 37, nome: "Chirívia", icon: "/assets/images/images-itens/copa/chirivia-ouro.png", descricao: "Qualidade de Ouro.", comoObter: "Cultivo com Fertilizante" },
          { idBackend: 38, nome: "Melão", icon: "/assets/images/images-itens/copa/melao-ouro.png", descricao: "Qualidade de Ouro.", comoObter: "Cultivo com Fertilizante" },
          { idBackend: 39, nome: "Abóbora", icon: "/assets/images/images-itens/copa/abobora-ouro.png", descricao: "Qualidade de Ouro.", comoObter: "Cultivo com Fertilizante" }
        ]
      },
      {
        id: "animal", titulo: "Conjunto Animal", npcImage: "/assets/images/conjuntos/animal.png", recompensa: { nome: "Prensa (1)", icone: "/assets/images/images-itens/recompensas/prensa-queijo.png" },
        itens: [
          { idBackend: 40, nome: "Leite Gr.", icon: "/assets/images/images-itens/copa/leite-grande.png", descricao: "Muito nutritivo.", comoObter: "Vacas felizes" },
          { idBackend: 41, nome: "Ovo Marrom", icon: "/assets/images/images-itens/copa/ovo-grande-marrom.png", descricao: "Ovo grande.", comoObter: "Galinhas marrons felizes" },
          { idBackend: 42, nome: "Ovo Branco", icon: "/assets/images/images-itens/copa/ovo-grande-branco.png", descricao: "Ovo grande.", comoObter: "Galinhas brancas felizes" },
          { idBackend: 43, nome: "L. Cabra Gr.", icon: "/assets/images/images-itens/copa/leite-grande-cabra.png", descricao: "Leite exótico.", comoObter: "Cabras felizes" },
          { idBackend: 44, nome: "Lã", icon: "/assets/images/images-itens/copa/la.png", descricao: "Quentinha.", comoObter: "Ovelhas ou Coelhos felizes" }
        ]
      },
      {
        id: "artesao", titulo: "Conjunto Artesão", npcImage: "/assets/images/conjuntos/artesao.png", recompensa: { nome: "Tear (1)", icone: "/assets/images/images-itens/recompensas/tear.png" },
        itens: [
          { idBackend: 45, nome: "Óleo Trufado", icon: "/assets/images/images-itens/copa/oleo-trufado.png", descricao: "Gourmet.", comoObter: "Máquina de Óleo" },
          { idBackend: 46, nome: "Tecido", icon: "/assets/images/images-itens/copa/tecido.png", descricao: "Feito de Lã.", comoObter: "Tear" },
          { idBackend: 47, nome: "Q. de Cabra", icon: "/assets/images/images-itens/copa/queijo-cabra.png", descricao: "Queijo exótico.", comoObter: "Prensa de Queijo" },
          { idBackend: 48, nome: "Queijo", icon: "/assets/images/images-itens/copa/queijo.png", descricao: "Amarelo e bom.", comoObter: "Prensa de Queijo" },
          { idBackend: 49, nome: "Mel", icon: "/assets/images/images-itens/copa/mel.png", descricao: "Doce néctar.", comoObter: "Casa da Abelha" },
          { idBackend: 50, nome: "Geleia", icon: "/assets/images/images-itens/copa/geleia.png", descricao: "Feita de frutas.", comoObter: "Frasco de Conserva" }
        ]
      }
    ]
  },

  // ==================== 3. AQUÁRIO ====================
  {
    nome: "Aquário",
    pacotes: [
      {
        id: "peixes_rio", titulo: "Peixes de Rio", npcImage: "/assets/images/conjuntos/peixes_rio.png", recompensa: { nome: "Iscas (30)", icone: "/assets/images/images-itens/recompensas/isca.png" },
        itens: [
          { idBackend: 51, nome: "Peixe-sol", icon: "/assets/images/images-itens/aquario/peixe-sol.png", descricao: "Peixe de dia.", comoObter: "Pesca (Rio/Dia)" },
          { idBackend: 52, nome: "Bagre", icon: "/assets/images/images-itens/aquario/bagre.png", descricao: "Gosta de chuva.", comoObter: "Pesca (Rio/Chuva)" },
          { idBackend: 53, nome: "Alocine", icon: "/assets/images/images-itens/aquario/alocine.png", descricao: "Peixe prateado.", comoObter: "Pesca (Rio/Chuva)" },
          { idBackend: 54, nome: "Híbrido", icon: "/assets/images/images-itens/aquario/hibrido.png", descricao: "Peixe de rio escuro.", comoObter: "Pesca (Bosque Secreto)" }
        ]
      },
      {
        id: "peixes_lago", titulo: "Peixes de Lago", npcImage: "/assets/images/conjuntos/peixes_lago.png", recompensa: { nome: "Covo (1)", icone: "/assets/images/images-itens/recompensas/covo.png" },
        itens: [
          { idBackend: 55, nome: "Achigã", icon: "/assets/images/images-itens/aquario/achiga.png", descricao: "Peixe de lago comum.", comoObter: "Pesca (Lago da Montanha)" },
          { idBackend: 56, nome: "Carpa", icon: "/assets/images/images-itens/aquario/carpa.png", descricao: "Peixe tranquilo.", comoObter: "Pesca (Lago da Montanha)" },
          { idBackend: 57, nome: "P.G. Cabeçudo", icon: "/assets/images/images-itens/aquario/peixe-gato.png", descricao: "Um peixe estranho.", comoObter: "Pesca (Lago da Montanha)" },
          { idBackend: 58, nome: "Esturjão", icon: "/assets/images/images-itens/aquario/esturjao.png", descricao: "Cria caviar.", comoObter: "Pesca (Lago da Montanha)" }
        ]
      },
      {
        id: "peixes_oceano", titulo: "Peixes de Oceano", npcImage: "/assets/images/conjuntos/peixes_oceano.png", recompensa: { nome: "Totem (5)", icone: "/assets/images/images-itens/recompensas/totem-praia.png" },
        itens: [
          { idBackend: 59, nome: "Sardinha", icon: "/assets/images/images-itens/aquario/sardinha.png", descricao: "Pequeno do mar.", comoObter: "Pesca (Oceano)" },
          { idBackend: 60, nome: "Atum", icon: "/assets/images/images-itens/aquario/atum.png", descricao: "Ótimo para sushi.", comoObter: "Pesca (Oceano)" },
          { idBackend: 61, nome: "Cioba", icon: "/assets/images/images-itens/aquario/cioba.png", descricao: "Peixe vermelho.", comoObter: "Pesca (Oceano)" },
          { idBackend: 62, nome: "Tilápia", icon: "/assets/images/images-itens/aquario/tilapia.png", descricao: "Gosta de clima morno.", comoObter: "Pesca (Oceano)" }
        ]
      },
      {
        id: "peixe_noturno", titulo: "Peixes Noturnos", npcImage: "/assets/images/conjuntos/peixes_noturno.png", recompensa: { nome: "Anel Brilhante", icone: "/assets/images/images-itens/recompensas/anel-brilhante.png" },
        itens: [
          { idBackend: 63, nome: "Picão-verde", icon: "/assets/images/images-itens/aquario/picao.png", descricao: "Sombra na água.", comoObter: "Pesca (Rio/Noite)" },
          { idBackend: 64, nome: "Brema", icon: "/assets/images/images-itens/aquario/brema.png", descricao: "Comum na noite.", comoObter: "Pesca (Rio/Noite)" },
          { idBackend: 65, nome: "Enguia", icon: "/assets/images/images-itens/aquario/enguia.png", descricao: "Fina e escorregadia.", comoObter: "Pesca (Oceano/Chuva/Noite)" }
        ]
      },
      {
        id: "covo", titulo: "Conjunto Covo", npcImage: "/assets/images/conjuntos/covo.png", recompensa: { nome: "Covo (3)", icone: "/assets/images/images-itens/recompensas/covo.png" },
        itens: [
          { idBackend: 66, nome: "Lagosta", icon: "/assets/images/images-itens/aquario/lagosta.png", descricao: "Bicho de casca.", comoObter: "Covo (Oceano)" },
          { idBackend: 67, nome: "Lagostim", icon: "/assets/images/images-itens/aquario/lagostim.png", descricao: "Lagosta de água doce.", comoObter: "Covo (Água Doce)" },
          { idBackend: 68, nome: "Caranguejo", icon: "/assets/images/images-itens/aquario/carangueijo.png", descricao: "Pinça afiada.", comoObter: "Covo (Oceano) ou Minas" },
          { idBackend: 69, nome: "Berbigão", icon: "/assets/images/images-itens/aquario/berbigao.png", descricao: "Concha pequena.", comoObter: "Covo (Oceano) ou Coleta" },
          { idBackend: 70, nome: "Mexilhão", icon: "/assets/images/images-itens/aquario/mexilhao.png", descricao: "Comum na praia.", comoObter: "Covo (Oceano) ou Coleta" }
        ]
      },
      {
        id: "peixes_especializados", titulo: "Peixes Especiais", npcImage: "/assets/images/conjuntos/peixes_especializados.png", recompensa: { nome: "Prato do Mar", icone: "/assets/images/images-itens/recompensas/prato-mar.png" },
        itens: [
          { idBackend: 71, nome: "Baiacu", icon: "/assets/images/images-itens/aquario/baiacu.png", descricao: "Venenoso e caro.", comoObter: "Pesca (Oceano/Verão)" },
          { idBackend: 72, nome: "P. Fantasma", icon: "/assets/images/images-itens/aquario/peixe-fantasma.png", descricao: "Peixe cego e pálido.", comoObter: "Pesca (Minas)" },
          { idBackend: 73, nome: "Areinha", icon: "/assets/images/images-itens/aquario/areinha.png", descricao: "Esconde-se na areia.", comoObter: "Pesca (Deserto)" },
          { idBackend: 74, nome: "Madeirão", icon: "/assets/images/images-itens/aquario/madeirao.png", descricao: "Peixe lenhador.", comoObter: "Pesca (Bosque Secreto)" }
        ]
      }
    ]
  },

  // ==================== 4. CALDEIRA ====================
  {
    nome: "Caldeira",
    pacotes: [
      {
        id: "ferreiro", titulo: "Conjunto Ferreiro", npcImage: "/assets/images/conjuntos/ferreiro.png", recompensa: { nome: "Fornalha (1)", icone: "/assets/images/images-itens/recompensas/fornalha.png" },
        itens: [
          { idBackend: 75, nome: "Barra Cobre", icon: "/assets/images/images-itens/caldeira/barra-cobre.png", descricao: "Metal básico.", comoObter: "Fornalha (Cobre)" },
          { idBackend: 76, nome: "Barra Ferro", icon: "/assets/images/images-itens/caldeira/barra-ferro.png", descricao: "Metal comum.", comoObter: "Fornalha (Ferro)" },
          { idBackend: 77, nome: "Barra Ouro", icon: "/assets/images/images-itens/caldeira/barra-ouro.png", descricao: "Metal valioso.", comoObter: "Fornalha (Ouro)" }
        ]
      },
      {
        id: "geologo", titulo: "Conjunto Geólogo", npcImage: "/assets/images/conjuntos/geologo.png", recompensa: { nome: "Omnigeodo (5)", icone: "/assets/images/images-itens/recompensas/omnigeodo.png" },
        itens: [
          { idBackend: 78, nome: "Quartzo", icon: "/assets/images/images-itens/caldeira/quartzo.png", descricao: "Um cristal claro.", comoObter: "Coleta (Minas)" },
          { idBackend: 79, nome: "Crist. Terra", icon: "/assets/images/images-itens/caldeira/cristal-terra.png", descricao: "Contém a força da terra.", comoObter: "Coleta (Minas) ou Geodos" },
          { idBackend: 80, nome: "Lágrima C.", icon: "/assets/images/images-itens/caldeira/lagrima-congelada.png", descricao: "Gélido ao toque.", comoObter: "Coleta (Minas) ou Geodos" },
          { idBackend: 81, nome: "Quartzo Fogo", icon: "/assets/images/images-itens/caldeira/quartzo-fogo.png", descricao: "Quente ao toque.", comoObter: "Coleta (Minas) ou Magma Geodo" }
        ]
      },
      {
        id: "aventureiro", titulo: "C. Aventureiro", npcImage: "/assets/images/conjuntos/aventureiro.png", recompensa: { nome: "Ímã (1)", icone: "/assets/images/images-itens/recompensas/anel-ima.png" },
        itens: [
          { idBackend: 82, nome: "Gosma", icon: "/assets/images/images-itens/caldeira/gosma.png", descricao: "Pegajoso e nojento.", comoObter: "Matar Gosmas (Minas)" },
          { idBackend: 83, nome: "Asa Morcego", icon: "/assets/images/images-itens/caldeira/asa-morcego.png", descricao: "Estranho e de couro.", comoObter: "Matar Morcegos (Minas)" }
        ]
      }
    ]
  },

  // ==================== 5. MURAL DE RECADOS ====================
  {
    nome: "Mural de Recados",
    pacotes: [
      {
        id: "cozinheiro", titulo: "Conj. Cozinheiro", npcImage: "/assets/images/conjuntos/cozinheiro.png", recompensa: { nome: "Bolo Rosa (3)", icone: "/assets/images/images-itens/recompensas/bolo-rosa.png" },
        itens: [
          { idBackend: 84, nome: "Xarope", icon: "/assets/images/images-itens/mural/xarope-acer.png", descricao: "Doce seiva de árvore.", comoObter: "Tornear Árvore de Ácer" },
          { idBackend: 85, nome: "Broto Sam.", icon: "/assets/images/images-itens/mural/broto-samambaia.png", descricao: "Matos comestíveis.", comoObter: "Coleta (Bosque Secreto/Verão)" },
          { idBackend: 86, nome: "Trufa", icon: "/assets/images/images-itens/mural/trufa.png", descricao: "Um cogumelo raro.", comoObter: "Porcos (Fora de Estábulo)" },
          { idBackend: 87, nome: "Papoula", icon: "/assets/images/images-itens/mural/papoula.png", descricao: "Flor vibrante.", comoObter: "Cultivo (Verão)" },
          { idBackend: 88, nome: "E. Arroz", icon: "/assets/images/images-itens/mural/enroladinho-arroz.png", descricao: "Fácil de fazer.", comoObter: "Cozinha" },
          { idBackend: 89, nome: "Ovo Frito", icon: "/assets/images/images-itens/mural/ovo-frito.png", descricao: "Café da manhã clássico.", comoObter: "Cozinha" }
        ]
      },
      {
        id: "tinta", titulo: "Conjunto Tinta", npcImage: "/assets/images/conjuntos/tinta.png", recompensa: { nome: "Máquina de Sementes", icone: "/assets/images/images-itens/recompensas/maquina-semente.png" },
        itens: [
          { idBackend: 90, nome: "Cog. Verm.", icon: "/assets/images/images-itens/mural/cog-vermelho.png", descricao: "Usado para corante.", comoObter: "Coleta nas Minas" },
          { idBackend: 91, nome: "Ouriço", icon: "/assets/images/images-itens/mural/ourico.png", descricao: "Pequeno ouriço azul.", comoObter: "Coleta na Praia" },
          { idBackend: 92, nome: "Girassol", icon: "/assets/images/images-itens/mural/girassol.png", descricao: "Sempre buscando o sol.", comoObter: "Cultivo (Verão/Outono)" },
          { idBackend: 93, nome: "Pena Pato", icon: "/assets/images/images-itens/mural/pena-pato.png", descricao: "Colorida e brilhante.", comoObter: "Patos felizes" },
          { idBackend: 94, nome: "Água Mar.", icon: "/assets/images/images-itens/mural/agua-marinha.png", descricao: "Joia azul-esverdeada.", comoObter: "Mineração" },
          { idBackend: 95, nome: "Rep. Roxo", icon: "/assets/images/images-itens/mural/repolho-roxo.png", descricao: "Cultivo nutritivo.", comoObter: "Cultivo (Verão - Ano 2)" }
        ]
      },
      {
        id: "pesquisa", titulo: "Conjunto Pesquisa", npcImage: "/assets/images/conjuntos/pesquisa.png", recompensa: { nome: "Máquina de Reciclar", icone: "/assets/images/images-itens/recompensas/maquina-reciclar.png" },
        itens: [
          { idBackend: 96, nome: "Cog. Roxo", icon: "/assets/images/images-itens/mural/cog-roxo.png", descricao: "Cogumelo valioso.", comoObter: "Coleta (Minas Profundas)" },
          { idBackend: 97, nome: "Concha", icon: "/assets/images/images-itens/mural/concha-nautilo.png", descricao: "Uma concha espiral antiga.", comoObter: "Coleta (Praia/Inverno)" },
          { idBackend: 98, nome: "Esquálio", icon: "/assets/images/images-itens/mural/esqualio.png", descricao: "Peixe teimoso.", comoObter: "Pesca (Lago da Montanha)" },
          { idBackend: 99, nome: "Geodo Cong.", icon: "/assets/images/images-itens/mural/geodo-congelado.png", descricao: "Precisa ser quebrado.", comoObter: "Mineração (Níveis frios)" }
        ]
      },
      {
        id: "forragem", titulo: "Conjunto Forragem", npcImage: "/assets/images/conjuntos/forragem.png", recompensa: { nome: "Aquecedor (1)", icone: "/assets/images/images-itens/recompensas/aquecedor.png" },
        itens: [
          { idBackend: 100, nome: "Trigo", icon: "/assets/images/images-itens/mural/trigo.png", descricao: "Faz farinha.", comoObter: "Cultivo (Verão/Outono)" },
          { idBackend: 101, nome: "Palha", icon: "/assets/images/images-itens/mural/palha.png", descricao: "Comida para animais.", comoObter: "Foice no mato" },
          { idBackend: 102, nome: "Maçã", icon: "/assets/images/images-itens/mural/maca.png", descricao: "Fruta clássica.", comoObter: "Macieira (Outono)" }
        ]
      },
      {
        id: "encantador", titulo: "C. Encantador", npcImage: "/assets/images/conjuntos/encantador.png", recompensa: { nome: "Barra de Ouro (5)", icone: "/assets/images/images-itens/recompensas/barra-ouro.png" },
        itens: [
          { idBackend: 103, nome: "Res. Carv.", icon: "/assets/images/images-itens/mural/resina-carvalho.png", descricao: "Pegajoso.", comoObter: "Tornear Carvalho" },
          { idBackend: 104, nome: "Vinho", icon: "/assets/images/images-itens/mural/vinho.png", descricao: "Bebida fermentada.", comoObter: "Barril" },
          { idBackend: 105, nome: "Pé Coelho", icon: "/assets/images/images-itens/mural/pe-coelho.png", descricao: "Dá sorte.", comoObter: "Coelhos muito felizes" },
          { idBackend: 106, nome: "Romã", icon: "/assets/images/images-itens/mural/roma.png", descricao: "Fruta com sementes.", comoObter: "Árvore de Romã (Outono)" }
        ]
      }
    ]
  },

  // ==================== 6. COFRE ====================
  {
    nome: "Cofre",
    pacotes: [
      {
        id: "2500_ouros", titulo: "Conjunto 2.500", npcImage: "/assets/images/conjuntos/2500_ouros.png", recompensa: { nome: "Bolo de Chocolate", icone: "/assets/images/images-itens/recompensas/bolo-chocolate.png" },
        itens: [{ idBackend: 107, nome: "2.500g", icon: "/assets/images/images-itens/cofre/ouro.png", descricao: "Moeda corrente do vale.", comoObter: "Vendendo itens" }]
      },
      {
        id: "5000_ouros", titulo: "Conjunto 5.000", npcImage: "/assets/images/conjuntos/5000_ouros.png", recompensa: { nome: "Fertilizante Básico", icone: "/assets/images/images-itens/recompensas/fertilizante.png" },
        itens: [{ idBackend: 108, nome: "5.000g", icon: "/assets/images/images-itens/cofre/ouro.png", descricao: "Moeda corrente do vale.", comoObter: "Vendendo itens" }]
      },
      {
        id: "10000_ouros", titulo: "Conjunto 10.000", npcImage: "/assets/images/conjuntos/10000_ouros.png", recompensa: { nome: "Para-raios", icone: "/assets/images/images-itens/recompensas/para-raios.png" },
        itens: [{ idBackend: 109, nome: "10.000g", icon: "/assets/images/images-itens/cofre/ouro.png", descricao: "Moeda corrente do vale.", comoObter: "Vendendo itens" }]
      },
      {
        id: "25000_ouros", titulo: "Conjunto 25.000", npcImage: "/assets/images/conjuntos/25000_ouros.png", recompensa: { nome: "Cristalário", icone: "/assets/images/images-itens/recompensas/cristalario.png" },
        itens: [{ idBackend: 110, nome: "25.000g", icon: "/assets/images/images-itens/cofre/ouro.png", descricao: "Moeda corrente do vale.", comoObter: "Vendendo itens" }]
      }
    ]
  },

  // ==================== 7. JOJA (CONJUNTO EXTRA) ====================
  {
    nome: "Joja",
    pacotes: [
      {
        id: "desaparecida", titulo: "C. Desaparecida", npcImage: "/assets/images/conjuntos/desaparecida.png", recompensa: { nome: "Construção do Cinema", icone: "/assets/images/images-itens/joja/cinema.png" },
        itens: [
          { idBackend: 111, nome: "Vinho Prata", icon: "/assets/images/images-itens/joja/vinho.png", descricao: "Vinho de alta qualidade.", comoObter: "Barril + Porão" },
          { idBackend: 112, nome: "Maionese Dino", icon: "/assets/images/images-itens/joja/maionese-dinossauro.png", descricao: "Verde e pegajosa.", comoObter: "Máquina de Maionese (Ovo Dino)" },
          { idBackend: 113, nome: "Frag. Prism.", icon: "/assets/images/images-itens/joja/fragmento-prismatico.png", descricao: "A joia mais rara.", comoObter: "Mineração Profunda" },
          { idBackend: 114, nome: "Caviar", icon: "/assets/images/images-itens/joja/caviar.png", descricao: "Gourmet.", comoObter: "Pote de Conserva (Ovas de Esturjão)" },
          { idBackend: 115, nome: "Salmão Nulo", icon: "/assets/images/images-itens/joja/salmao-nulo.png", descricao: "Peixe do vazio (Ouro).", comoObter: "Pesca no Pântano da Bruxa" }
        ]
      }
    ]
  }
];

// Posições dos presentes na árvore (até 6 por sala)
const posicoesGalhos = [
  { top: '32%', left: '50%' }, { top: '48%', left: '30%' }, { top: '48%', left: '70%' }, 
  { top: '68%', left: '38%' }, { top: '68%', left: '62%' }, { top: '22%', left: '68%' }
];
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

  const isPacoteCompleto = (itens) => {
    if (!itens || itens.length === 0) return false;
    return itens.every(i => progresso[i.idBackend]);
  };

  const abrirModalItem = async (itemBase) => {
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
      
      {/* Placa Maior */}
      <div className="w-full max-w-4xl bg-[#311005] p-4 md:p-8 border-4 md:border-8 border-[#5c2f18] ring-2 md:ring-4 ring-black shadow-[12px_12px_0_0_rgba(0,0,0,0.5)] rounded-sm relative mt-32 md:mt-36">
        
        {/* ========================================== */}
        {/* NAVEGAÇÃO DE TOPO - ESTILO NAVBAR */}
        {/* ========================================== */}
        <div className="absolute -top-28 md:-top-32 left-0 right-0 flex flex-col items-center gap-2 z-30 w-full px-2 md:px-0">
          
          {/* Linha 1: Como Usar (Centralizado no topo) */}
          <button onClick={() => setIsTutorialOpen(true)} className="flex items-center justify-center gap-2 bg-[#5c2f18] text-[#f4d29c] border-4 border-[#311005] px-6 py-2 font-['Press_Start_2P',monospace] text-[10px] md:text-sm hover:bg-[#7b4324] shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-all active:translate-y-1">
            <span className="text-sm md:text-xl">❓</span> Como Usar
          </button>
          
          {/* Linha 2: Árvore e Home (Lado a Lado) */}
          <div className="flex justify-center gap-2 md:gap-6 w-full max-w-lg">
            <button onClick={() => setIsArvoreOpen(true)} className="flex-1 flex justify-center items-center gap-2 left: 2 bg-[#5c2f18] text-[#f4d29c] border-4 border-[#311005] px-4 py-2 font-['Press_Start_2P',monospace] text-[10px] md:text-sm hover:bg-[#7b4324] shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-all active:translate-y-1">
              <span className="text-sm md:text-xl">🌳</span> Árvore
            </button>
            <button onClick={() => { navigate('/'); }} className="flex-1 flex justify-center items-center gap-2 bg-[#5c2f18] text-[#f4d29c] border-4 border-[#311005] px-4 py-2 font-['Press_Start_2P',monospace] text-[10px] md:text-sm hover:bg-[#7b4324] shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-all active:translate-y-1">
              <span className="text-sm md:text-xl">🏠</span> Home
            </button>
          </div>
        </div>

        {/* TÍTULO */}
        <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-[#f4d29c] px-4 md:px-8 py-2 md:py-3 border-4 border-[#5c2f18] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] z-20">
          <h1 className="text-[#5c2f18] text-[10px] sm:text-sm md:text-xl font-bold uppercase tracking-tighter text-center whitespace-nowrap font-['Press_Start_2P',monospace]">
            Sala {categoria.nome}
          </h1>
        </div>

        
        {/* SETAS DO CARROSSEL  */}
        <button onClick={() => mudarCategoria(-1)} className="absolute top-1 md:top-4 left-0 md:-left-20 text-6xl md:text-[90px] text-[#5c2f18] drop-shadow-[2px_2px_0_#f8d030] hover:scale-110 transition-transform z-10">
          ◄
        </button>
        <button onClick={() => mudarCategoria(1)} className="absolute top-1 md:top-4 right-0 md:-right-20 text-6xl md:text-[90px] text-[#5c2f18] drop-shadow-[2px_2px_0_#f8d030] hover:scale-110 transition-transform z-10">
          ►
        </button>
        {/* LISTA DE PERGAMINHOS */}
        <div className="mt-10 md:mt-8 flex flex-col gap-4">
          {categoria.pacotes.map((pacote) => {
            const completo = isPacoteCompleto(pacote.itens);
            return (
              <div key={pacote.id} className="relative flex flex-col md:flex-row items-center w-full bg-[#f4d29c] border-b-4 border-r-4 border-[#d1a36a] border-t-2 border-l-2 border-[#ffebc2] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between md:justify-start gap-4 p-3 md:p-4 w-full md:w-80 md:border-r-4 md:border-dashed md:border-[#d1a36a] shrink-0 border-b-2 md:border-b-0 border-dashed border-[#d1a36a]">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 md:border-4 border-[#5c2f18] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center shrink-0">
                    <img src={pacote.npcImage} alt={pacote.titulo} className="w-full h-full object-cover [image-rendering:pixelated]" onError={(e) => { e.target.src = '/assets/images/bundle-icon.png' }} />
                  </div>
                  <h3 className="text-[#311005] text-[10px] md:text-sm font-bold uppercase tracking-tighter leading-tight font-['Press_Start_2P',monospace] flex-1">{pacote.titulo}</h3>
                  {completo && <span className="text-2xl md:text-4xl text-[#2ecc71] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)] font-bold shrink-0 ml-2">✔</span>}
                </div>

                {/* ITENS   */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 p-3 md:p-4 flex-1">
                  {pacote.itens.map((item) => (
                    <div key={item.idBackend} className="flex flex-col items-center gap-2 w-16 md:w-20 group">
                      <div onClick={() => abrirModalItem(item)} className="w-16 h-16 md:w-20 md:h-20 bg-[#dcb35c] border-2 md:border-4 border-[#5c2f18] flex items-center justify-center shadow-[inset_-2px_-2px_0_rgba(0,0,0,0.2)] cursor-pointer transition-transform hover:-translate-y-1">
                        <img src={item.icon} alt={item.nome} className="w-10 h-10 md:w-14 md:h-14 object-contain [image-rendering:pixelated]" onError={(e) => { e.target.src = 'https://via.placeholder.com/32?text=Item' }}/>
                        {progresso[item.idBackend] && <span className="absolute bottom-0 right-0 text-[#2ecc71] text-lg md:text-2xl font-bold drop-shadow-md">✔</span>}
                      </div>
                      <span className="text-[9px] md:text-[11px] text-[#5c2f18] text-center uppercase tracking-tighter leading-tight font-bold font-mono">{item.nome}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================================
          MODAIS 
      ============================================================================ */}
      
      {/* MODAL DA ÁRVORE GERAL*/}
      {isArvoreOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99997] flex justify-center items-center p-2 md:p-4">
          <div className="bg-[#311005] w-full max-w-4xl p-4 md:p-8 border-4 md:border-8 border-[#5c2f18] shadow-[8px_8px_0_rgba(0,0,0,0.5)] relative flex flex-col items-center">
            <button onClick={() => setIsArvoreOpen(false)} className="absolute -top-4 -right-4 bg-[#d63031] text-white border-4 border-[#8B0000] rounded-full w-10 h-10 md:w-14 md:h-14 font-bold text-lg md:text-2xl flex items-center justify-center hover:scale-110 z-10">X</button>
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
                      <button onClick={() => setPacoteModal(pacote)} className="w-10 h-10 md:w-20 md:h-20 bg-transparent border-0 cursor-pointer hover:scale-110 flex items-center justify-center relative">
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
      )}

      {/* SUB-MODAL DO CONJUNTO */}
      {pacoteModal && (
        <div className="fixed inset-0 bg-black/60 z-[99998] flex justify-center items-center p-2 md:p-4">
          <div className="relative w-full max-w-4xl bg-[#f4d29c] border-b-4 md:border-b-8 border-r-4 md:border-r-8 border-[#d1a36a] border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-[#ffebc2] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] p-4 md:p-6">
            <button onClick={() => setPacoteModal(null)} className="absolute -top-4 -right-4 bg-[#d63031] text-white border-4 border-[#8B0000] rounded-full w-10 h-10 md:w-14 md:h-14 font-bold md:text-xl flex items-center justify-center hover:scale-110">X</button>
            {isPacoteCompleto(pacoteModal.itens) && (
              <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-[#2ecc71] text-white px-4 py-1 md:px-6 md:py-2 border-4 border-[#145a32] shadow-[4px_4px_0_rgba(0,0,0,0.4)] font-['Press_Start_2P',monospace] text-[10px] md:text-sm transform -rotate-2">
                CONCLUÍDO!
              </div>
            )}
            <div className="flex flex-col md:flex-row items-center w-full mt-4">
              <div className="flex items-center justify-between md:justify-start gap-4 p-2 md:p-4 w-full md:w-80 md:border-r-4 border-dashed border-[#d1a36a] border-b-4 md:border-b-0 shrink-0">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-2 md:border-4 border-[#5c2f18] flex items-center justify-center shrink-0">
                  <img src={pacoteModal.npcImage} alt={pacoteModal.titulo} className="w-full h-full object-cover [image-rendering:pixelated]" />
                </div>
                <h3 className="text-[#311005] text-[10px] md:text-sm font-bold uppercase font-['Press_Start_2P',monospace] text-center md:text-left">{pacoteModal.titulo}</h3>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 p-4 flex-1">
                {pacoteModal.itens.map((item) => (
                  <div key={`modal-item-${item.idBackend}`} className="flex flex-col items-center gap-2 w-16 md:w-20 group">
                    <div onClick={() => abrirModalItem(item)} className="w-16 h-16 md:w-20 md:h-20 bg-[#dcb35c] border-2 md:border-4 border-[#5c2f18] flex items-center justify-center cursor-pointer hover:-translate-y-1">
                      <img src={item.icon} alt={item.nome} className="w-10 h-10 md:w-14 md:h-14 object-contain [image-rendering:pixelated]" />
                      {progresso[item.idBackend] && <span className="absolute bottom-0 right-0 text-[#2ecc71] text-lg md:text-2xl font-bold drop-shadow-md">✔</span>}
                    </div>
                    <span className="text-[9px] md:text-[11px] text-[#5c2f18] text-center uppercase tracking-tighter leading-tight font-bold font-mono">{item.nome}</span>
                  </div>
                ))}
              </div>
            </div>
            {pacoteModal.recompensa && (
              <div className="mt-4 md:mt-8 mx-auto w-fit bg-[#e2bc7a] border-2 md:border-4 border-[#5c2f18] rounded-full px-4 md:px-8 py-2 md:py-3 flex items-center gap-2 md:gap-4">
                <img src={pacoteModal.recompensa.icone} alt="Recompensa" className="w-8 h-8 md:w-10 md:h-10 [image-rendering:pixelated]" />
                <span className="font-['Press_Start_2P',monospace] text-[9px] md:text-sm text-[#311005]">Recompensa: {pacoteModal.recompensa.nome}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL DO ITEM */}
      {itemModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999] flex justify-center items-center p-4">
          <div className="bg-[#F5EDC4] w-full max-w-2xl p-6 md:p-8 border-4 md:border-8 border-[#4D2607] outline outline-2 md:outline-4 outline-[#C89B54] md:-outline-offset-[12px] -outline-offset-[6px] rounded-xl flex flex-col gap-4 md:gap-6 relative">
            <button onClick={() => setItemModal(null)} className="absolute -top-4 -right-4 bg-[#d63031] text-white border-2 md:border-4 border-[#8B0000] rounded-full w-10 h-10 md:w-14 md:h-14 font-bold md:text-xl flex items-center justify-center hover:scale-110">X</button>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white border-4 border-[#4D2607] flex justify-center items-center shrink-0">
                <img src={itemModal.icon} alt={itemModal.nome} className="w-14 h-14 md:w-20 md:h-20 object-contain [image-rendering:pixelated]" />
              </div>
              <h2 className="font-['Press_Start_2P',monospace] text-base md:text-2xl text-[#4D2607] drop-shadow-[2px_2px_0_#F8D030] flex-1">{itemModal.nome}</h2>
              <button onClick={() => toggleConclusaoItem(itemModal.idBackend)} className="shrink-0 hover:scale-110">
                <img src={progresso[itemModal.idBackend] ? "/assets/images/botoes/btn-check-mark.png" : "/assets/images/botoes/btn-check-desm.png"} alt="Status" className="h-12 md:h-20 w-auto [image-rendering:pixelated]" />
              </button>
            </div>
            <div className="text-sm md:text-lg text-[#4D2607] leading-relaxed max-h-[40vh] overflow-y-auto pr-2 md:pr-4 font-sans font-bold">
              {itemModal.isLoading ? (
                <div className="text-center py-10 animate-pulse text-[#8B5A2B]">⏳ Consultando a biblioteca...</div>
              ) : (
                <>
                  <p dangerouslySetInnerHTML={{ __html: itemModal.descricao ? String(itemModal.descricao).replace(/\n/g, '<br>') : 'Sem descrição.' }} />
                  <hr className="my-4 md:my-6 border-t-2 md:border-t-4 border-dashed border-[#8B5A2B] opacity-50" />
                  <p><strong>Como obter: </strong><span dangerouslySetInnerHTML={{ __html: itemModal.comoObter ? String(itemModal.comoObter).replace(/\n/g, '<br>') : 'Informação indisponível.' }} /></p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE TUTORIAL */}
      {isTutorialOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99998] flex justify-center items-center p-4">
          <div className="bg-[#F5EDC4] w-full max-w-3xl p-6 md:p-8 border-4 md:border-8 border-[#4D2607] outline outline-2 md:outline-4 outline-[#C89B54] md:-outline-offset-[12px] -outline-offset-[6px] rounded-xl flex flex-col gap-4 md:gap-6 relative">
            <button onClick={() => setIsTutorialOpen(false)} className="absolute -top-4 -right-4 bg-[#d63031] text-white border-2 md:border-4 border-[#8B0000] rounded-full w-10 h-10 md:w-14 md:h-14 font-bold md:text-xl flex items-center justify-center hover:scale-110">X</button>
            <h2 className="font-['Press_Start_2P',monospace] text-sm md:text-2xl text-[#F8D030] drop-shadow-[2px_2px_0_#4D2607] text-center mb-2 md:mb-4">Guia de Sobrevivência</h2>
            <div className="text-sm md:text-lg text-[#4D2607] leading-relaxed max-h-[50vh] overflow-y-auto pr-2 md:pr-4 font-sans">
              <p className="mb-4"><strong>1. Navegue:</strong> Use as setas laterais grandes (◄ ►) para trocar de Sala no Centro Comunitário.</p>
              <p className="mb-4"><strong>2. Inspecione a Árvore:</strong> Clique no botão "Árvore" no topo para ver os presentes crescendo e os conjuntos disponíveis na Sala atual.</p>
              <p className="mb-4"><strong>3. Modal de Conjuntos e Itens:</strong> Clique em um presente na árvore para abri-lo. De lá, você pode clicar nos itens para ler as dicas completas do seu backend.</p>
              <p className="mb-4"><strong>4. Complete:</strong> Ao conseguir o item no jogo, clique no checkbox dentro do Modal do Item. Seu progresso será salvo automaticamente!</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}