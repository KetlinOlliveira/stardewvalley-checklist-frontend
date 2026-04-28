export const stardewCategorias = [
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
          { idBackend: 29, nome: "Tomate", icon: "/assets/images/images-itens/copa/Tomate.png", descricao: "Fruto vermelho.", comoObter: "Cultivo (Verão)" },
          { idBackend: 30, nome: "Pimenta", icon: "/assets/images/images-itens/copa/pimenta-quente.png", descricao: "Ardida.", comoObter: "Cultivo (Verão)" },
          { idBackend: 31, nome: "Mirtilo", icon: "/assets/images/images-itens/copa/Mirtilo.png", descricao: "Rende muito.", comoObter: "Cultivo (Verão)" },
          { idBackend: 32, nome: "Melão", icon: "/assets/images/images-itens/copa/Melao.png", descricao: "Fruta doce e grande.", comoObter: "Cultivo (Verão)" }
        ]
      },
      {
        id: "plantacoes_outono", titulo: "Plantações Outono", npcImage: "/assets/images/conjuntos/plantacoes_outono.png", recompensa: { nome: "Espantalho (1)", icone: "/assets/images/images-itens/recompensas/espantalho.png" },
        itens: [
          { idBackend: 33, nome: "Milho", icon: "/assets/images/images-itens/copa/Milho.png", descricao: "Cultivo duradouro.", comoObter: "Cultivo (V/O)" },
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
          { idBackend: 40, nome: "Leite Gr.", icon: "/assets/images/images-itens/copa/Leite-grande.png", descricao: "Muito nutritivo.", comoObter: "Vacas felizes" },
          { idBackend: 41, nome: "Ovo Marrom", icon: "/assets/images/images-itens/copa/ovo-grande-marrom.png", descricao: "Ovo grande.", comoObter: "Galinhas marrons felizes" },
          { idBackend: 42, nome: "Ovo Branco", icon: "/assets/images/images-itens/copa/Ovo-grande-branco.png", descricao: "Ovo grande.", comoObter: "Galinhas brancas felizes" },
          { idBackend: 43, nome: "L. Cabra Gr.", icon: "/assets/images/images-itens/copa/leite-grande-cabra.png", descricao: "Leite exótico.", comoObter: "Cabras felizes" },
          { idBackend: 44, nome: "Lã", icon: "/assets/images/images-itens/copa/la.png", descricao: "Quentinha.", comoObter: "Ovelhas ou Coelhos felizes" }
        ]
      },
      {
        id: "artesao", titulo: "Conjunto Artesão", npcImage: "/assets/images/conjuntos/artesao.png", recompensa: { nome: "Tear (1)", icone: "/assets/images/images-itens/recompensas/tear.png" },
        itens: [
          { idBackend: 45, nome: "Óleo Trufado", icon: "/assets/images/images-itens/copa/oleo-trufado.png", descricao: "Gourmet.", comoObter: "Máquina de Óleo" },
          { idBackend: 46, nome: "Tecido", icon: "/assets/images/images-itens/copa/Tecido.png", descricao: "Feito de Lã.", comoObter: "Tear" },
          { idBackend: 47, nome: "Q. de Cabra", icon: "/assets/images/images-itens/copa/queijo-cabra.png", descricao: "Queijo exótico.", comoObter: "Prensa de Queijo" },
          { idBackend: 48, nome: "Queijo", icon: "/assets/images/images-itens/copa/Queijo.png", descricao: "Amarelo e bom.", comoObter: "Prensa de Queijo" },
          { idBackend: 49, nome: "Mel", icon: "/assets/images/images-itens/copa/Mel.png", descricao: "Doce néctar.", comoObter: "Casa da Abelha" },
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
          { idBackend: 51, nome: "Peixe-sol", icon: "/assets/images/images-itens/aquario/Peixe-sol.png", descricao: "Peixe de dia.", comoObter: "Pesca (Rio/Dia)" },
          { idBackend: 52, nome: "Bagre", icon: "/assets/images/images-itens/aquario/Bagre.png", descricao: "Gosta de chuva.", comoObter: "Pesca (Rio/Chuva)" },
          { idBackend: 53, nome: "Alocine", icon: "/assets/images/images-itens/aquario/Alocine.png", descricao: "Peixe prateado.", comoObter: "Pesca (Rio/Chuva)" },
          { idBackend: 54, nome: "Híbrido", icon: "/assets/images/images-itens/aquario/hibrido.png", descricao: "Peixe de rio escuro.", comoObter: "Pesca (Bosque Secreto)" }
        ]
      },
      {
        id: "peixes_lago", titulo: "Peixes de Lago", npcImage: "/assets/images/conjuntos/peixes_lago.png", recompensa: { nome: "Covo (1)", icone: "/assets/images/images-itens/recompensas/covo.png" },
        itens: [
          { idBackend: 55, nome: "Achigã", icon: "/assets/images/images-itens/aquario/achiga.png", descricao: "Peixe de lago comum.", comoObter: "Pesca (Lago da Montanha)" },
          { idBackend: 56, nome: "Carpa", icon: "/assets/images/images-itens/aquario/Carpa.png", descricao: "Peixe tranquilo.", comoObter: "Pesca (Lago da Montanha)" },
          { idBackend: 57, nome: "P.G. Cabeçudo", icon: "/assets/images/images-itens/aquario/peixe-gato.png", descricao: "Um peixe estranho.", comoObter: "Pesca (Lago da Montanha)" },
          { idBackend: 58, nome: "Esturjão", icon: "/assets/images/images-itens/aquario/Esturjao.png", descricao: "Cria caviar.", comoObter: "Pesca (Lago da Montanha)" }
        ]
      },
      {
        id: "peixes_oceano", titulo: "Peixes de Oceano", npcImage: "/assets/images/conjuntos/peixes_oceano.png", recompensa: { nome: "Totem (5)", icone: "/assets/images/images-itens/recompensas/totem-praia.png" },
        itens: [
          { idBackend: 59, nome: "Sardinha", icon: "/assets/images/images-itens/aquario/Sardinha.png", descricao: "Pequeno do mar.", comoObter: "Pesca (Oceano)" },
          { idBackend: 60, nome: "Atum", icon: "/assets/images/images-itens/aquario/Atum.png", descricao: "Ótimo para sushi.", comoObter: "Pesca (Oceano)" },
          { idBackend: 61, nome: "Cioba", icon: "/assets/images/images-itens/aquario/Coba.png", descricao: "Peixe vermelho.", comoObter: "Pesca (Oceano)" },
          { idBackend: 62, nome: "Tilápia", icon: "/assets/images/images-itens/aquario/Tilapia.png", descricao: "Gosta de clima morno.", comoObter: "Pesca (Oceano)" }
        ]
      },
      {
        id: "peixe_noturno", titulo: "Peixes Noturnos", npcImage: "/assets/images/conjuntos/peixes_noturno.png", recompensa: { nome: "Anel Brilhante", icone: "/assets/images/images-itens/recompensas/anel-brilhante.png" },
        itens: [
          { idBackend: 63, nome: "Picão-verde", icon: "/assets/images/images-itens/aquario/picao.png", descricao: "Sombra na água.", comoObter: "Pesca (Rio/Noite)" },
          { idBackend: 64, nome: "Brema", icon: "/assets/images/images-itens/aquario/Brema.png", descricao: "Comum na noite.", comoObter: "Pesca (Rio/Noite)" },
          { idBackend: 65, nome: "Enguia", icon: "/assets/images/images-itens/aquario/Enguia.png", descricao: "Fina e escorregadia.", comoObter: "Pesca (Oceano/Chuva/Noite)" }
        ]
      },
      {
        id: "covo", titulo: "Conjunto Covo", npcImage: "/assets/images/conjuntos/covo.png", recompensa: { nome: "Covo (3)", icone: "/assets/images/images-itens/recompensas/covo.png" },
        itens: [
          { idBackend: 66, nome: "Lagosta", icon: "/assets/images/images-itens/aquario/Lagosta.png", descricao: "Bicho de casca.", comoObter: "Covo (Oceano)" },
          { idBackend: 67, nome: "Lagostim", icon: "/assets/images/images-itens/aquario/Lagostim.png", descricao: "Lagosta de água doce.", comoObter: "Covo (Água Doce)" },
          { idBackend: 68, nome: "Caranguejo", icon: "/assets/images/images-itens/aquario/carangueijo.png", descricao: "Pinça afiada.", comoObter: "Covo (Oceano) ou Minas" },
          { idBackend: 69, nome: "Berbigão", icon: "/assets/images/images-itens/aquario/Berbigao.png", descricao: "Concha pequena.", comoObter: "Covo (Oceano) ou Coleta" },
          { idBackend: 70, nome: "Mexilhão", icon: "/assets/images/images-itens/aquario/Mexilhao.png", descricao: "Comum na praia.", comoObter: "Covo (Oceano) ou Coleta" }
        ]
      },
      {
        id: "peixes_especializados", titulo: "Peixes Especiais", npcImage: "/assets/images/conjuntos/peixes_especializados.png", recompensa: { nome: "Prato do Mar", icone: "/assets/images/images-itens/recompensas/prato-mar.png" },
        itens: [
          { idBackend: 71, nome: "Baiacu", icon: "/assets/images/images-itens/aquario/Baiacu.png", descricao: "Venenoso e caro.", comoObter: "Pesca (Oceano/Verão)" },
          { idBackend: 72, nome: "P. Fantasma", icon: "/assets/images/images-itens/aquario/Peixe-fantasma.png", descricao: "Peixe cego e pálido.", comoObter: "Pesca (Minas)" },
          { idBackend: 73, nome: "Areinha", icon: "/assets/images/images-itens/aquario/Areinha.png", descricao: "Esconde-se na areia.", comoObter: "Pesca (Deserto)" },
          { idBackend: 74, nome: "Madeirão", icon: "/assets/images/images-itens/aquario/Madeirao.png", descricao: "Peixe lenhador.", comoObter: "Pesca (Bosque Secreto)" }
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
          { idBackend: 78, nome: "Quartzo", icon: "/assets/images/images-itens/caldeira/Quartzo.png", descricao: "Um cristal claro.", comoObter: "Coleta (Minas)" },
          { idBackend: 79, nome: "Crist. Terra", icon: "/assets/images/images-itens/caldeira/cristal-terra.png", descricao: "Contém a força da terra.", comoObter: "Coleta (Minas) ou Geodos" },
          { idBackend: 80, nome: "Lágrima C.", icon: "/assets/images/images-itens/caldeira/lagrima-congelada.png", descricao: "Gélido ao toque.", comoObter: "Coleta (Minas) ou Geodos" },
          { idBackend: 81, nome: "Quartzo Fogo", icon: "/assets/images/images-itens/caldeira/quartzo-fogo.png", descricao: "Quente ao toque.", comoObter: "Coleta (Minas) ou Magma Geodo" }
        ]
      },
      {
        id: "aventureiro", titulo: "C. Aventureiro", npcImage: "/assets/images/conjuntos/aventureiro.png", recompensa: { nome: "Ímã (1)", icone: "/assets/images/images-itens/recompensas/anel-ima.png" },
        itens: [
          { idBackend: 82, nome: "Gosma", icon: "/assets/images/images-itens/caldeira/Gosma.png", descricao: "Pegajoso e nojento.", comoObter: "Matar Gosmas (Minas)" },
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
          { idBackend: 86, nome: "Trufa", icon: "/assets/images/images-itens/mural/Trufa.png", descricao: "Um cogumelo raro.", comoObter: "Porcos (Fora de Estábulo)" },
          { idBackend: 87, nome: "Papoula", icon: "/assets/images/images-itens/mural/Papoula.png", descricao: "Flor vibrante.", comoObter: "Cultivo (Verão)" },
          { idBackend: 88, nome: "E. Arroz", icon: "/assets/images/images-itens/mural/enroladinho-arroz.png", descricao: "Fácil de fazer.", comoObter: "Cozinha" },
          { idBackend: 89, nome: "Ovo Frito", icon: "/assets/images/images-itens/mural/Ovo-frito.png", descricao: "Café da manhã clássico.", comoObter: "Cozinha" }
        ]
      },
      {
        id: "tinta", titulo: "Conjunto Tinta", npcImage: "/assets/images/conjuntos/tinta.png", recompensa: { nome: "Máquina de Sementes", icone: "/assets/images/images-itens/recompensas/maquina-semente.png" },
        itens: [
          { idBackend: 90, nome: "Cog. Verm.", icon: "/assets/images/images-itens/mural/cog-vermelho.png", descricao: "Usado para corante.", comoObter: "Coleta nas Minas" },
          { idBackend: 91, nome: "Ouriço", icon: "/assets/images/images-itens/mural/ourico.png", descricao: "Pequeno ouriço azul.", comoObter: "Coleta na Praia" },
          { idBackend: 92, nome: "Girassol", icon: "/assets/images/images-itens/mural/Girassol.png", descricao: "Sempre buscando o sol.", comoObter: "Cultivo (Verão/Outono)" },
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
          { idBackend: 100, nome: "Trigo", icon: "/assets/images/images-itens/mural/Trigo.png", descricao: "Faz farinha.", comoObter: "Cultivo (Verão/Outono)" },
          { idBackend: 101, nome: "Palha", icon: "/assets/images/images-itens/mural/Palha.png", descricao: "Comida para animais.", comoObter: "Foice no mato" },
          { idBackend: 102, nome: "Maçã", icon: "/assets/images/images-itens/mural/maca.png", descricao: "Fruta clássica.", comoObter: "Macieira (Outono)" }
        ]
      },
      {
        id: "encantador", titulo: "C. Encantador", npcImage: "/assets/images/conjuntos/encantador.png", recompensa: { nome: "Barra de Ouro (5)", icone: "/assets/images/images-itens/recompensas/barra-ouro.png" },
        itens: [
          { idBackend: 103, nome: "Res. Carv.", icon: "/assets/images/images-itens/mural/resina-carvalho.png", descricao: "Pegajoso.", comoObter: "Tornear Carvalho" },
          { idBackend: 104, nome: "Vinho", icon: "/assets/images/images-itens/mural/Vinho.png", descricao: "Bebida fermentada.", comoObter: "Barril" },
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
          { idBackend: 111, nome: "Vinho Prata", icon: "/assets/images/images-itens/joja/Vinho.png", descricao: "Vinho de alta qualidade.", comoObter: "Barril + Porão" },
          { idBackend: 112, nome: "Maionese Dino", icon: "/assets/images/images-itens/joja/maionese-dinossauro.png", descricao: "Verde e pegajosa.", comoObter: "Máquina de Maionese (Ovo Dino)" },
          { idBackend: 113, nome: "Frag. Prism.", icon: "/assets/images/images-itens/joja/fragmento-prismatico.png", descricao: "A joia mais rara.", comoObter: "Mineração Profunda" },
          { idBackend: 114, nome: "Caviar", icon: "/assets/images/images-itens/joja/Caviar.png", descricao: "Gourmet.", comoObter: "Pote de Conserva (Ovas de Esturjão)" },
          { idBackend: 115, nome: "Salmão Nulo", icon: "/assets/images/images-itens/joja/salmao-nulo.png", descricao: "Peixe do vazio (Ouro).", comoObter: "Pesca no Pântano da Bruxa" }
        ]
      }
    ]
  }
];

// Posições dos presentes na árvore (até 6 por sala)
export const posicoesGalhos = [
  { top: '32%', left: '50%' }, { top: '48%', left: '30%' }, { top: '48%', left: '70%' }, 
  { top: '68%', left: '38%' }, { top: '68%', left: '62%' }, { top: '22%', left: '68%' }
];