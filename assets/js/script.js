// ===================== BANCO DE DADOS FRONT-END (COMPLETO) =====================
const stardewBundles = [
    {
        id: "artesanato",
        imagemSrc: "../assets/images/tabela-artesanato.png",
        pacotes: [
            { 
                id: "primavera", top: "24.5%", totalItens: 4,
                recompensa: { nome: "Sementes de Primavera (30)", icone: "../assets/images/images-itens/recompensas/sementes-primavera.png" },
                itens: [
                    { idBackend: 1, icone: "../assets/images/images-itens/artesanato/raiz-forte.png" },
                    { idBackend: 2, icone: "../assets/images/images-itens/artesanato/narciso.png" },
                    { idBackend: 3, icone: "../assets/images/images-itens/artesanato/alho-poro.png" },
                    { idBackend: 4, icone: "../assets/images/images-itens/artesanato/dente-leao.png" }
                ]
            },
            { 
                id: "verao", top: "37%", totalItens: 3,
                recompensa: { nome: "Sementes de Verão (30)", icone: "../assets/images/images-itens/recompensas/semente-verao.png" },
                itens: [
                    { idBackend: 5, icone: "../assets/images/images-itens/artesanato/uva.png" },
                    { idBackend: 6, icone: "../assets/images/images-itens/artesanato/cafe.png" },
                    { idBackend: 7, icone: "../assets/images/images-itens/artesanato/ervilha.png" }
                ]
            },
            { 
                id: "outono", top: "50%", totalItens: 4,
                recompensa: { nome: "Sementes de Outono (30)", icone: "../assets/images/images-itens/recompensas/semente-outono.png" },
                itens: [
                    { idBackend: 8, icone: "../assets/images/images-itens/artesanato/amora.png" },
                    { idBackend: 9, icone: "../assets/images/images-itens/artesanato/cogumelo-comum.png" },
                    { idBackend: 10, icone: "../assets/images/images-itens/artesanato/avela.png" },
                    { idBackend: 11, icone: "../assets/images/images-itens/artesanato/ameixa.png" }
                ]
            },
            { 
                id: "inverno", top: "63.5%", totalItens: 4,
                recompensa: { nome: "Sementes de Inverno (30)", icone: "../assets/images/images-itens/recompensas/semente-inverno.png" },
                itens: [
                    { idBackend: 12, icone: "../assets/images/images-itens/artesanato/raiz-inverno.png" },
                    { idBackend: 13, icone: "../assets/images/images-itens/artesanato/fruta-cristal.png" },
                    { idBackend: 14, icone: "../assets/images/images-itens/artesanato/inhame-neve.png" },
                    { idBackend: 15, icone: "../assets/images/images-itens/artesanato/acafrao.png" } 
                ]
            },
            { 
                id: "construcao", top: "77%", totalItens: 4,
                recompensa: { nome: "Carvoaria (1)", icone: "../assets/images/images-itens/recompensas/carvoaria.png" },
                itens: [
                    { idBackend: 16, icone: "../assets/images/images-itens/artesanato/madeira.png" },
                    { idBackend: 17, icone: "../assets/images/images-itens/artesanato/madeira.png" },
                    { idBackend: 18, icone: "../assets/images/images-itens/artesanato/pedra.png" },
                    { idBackend: 19, icone: "../assets/images/images-itens/artesanato/madeira-lei.png" }
                ]
            },
            { 
                id: "exotico", top: "90%", totalItens: 5,
                recompensa: { nome: "Prato de Outono (5)", icone: "../assets/images/images-itens/recompensas/prato-outono.png" },
                itens: [
                    { idBackend: 20, icone: "../assets/images/images-itens/artesanato/coco.png" },
                    { idBackend: 21, icone: "../assets/images/images-itens/artesanato/fruta-cacto.png" },
                    { idBackend: 22, icone: "../assets/images/images-itens/artesanato/cenoura-sub.png" },
                    { idBackend: 23, icone: "../assets/images/images-itens/artesanato/cog-vermelho.png" },
                    { idBackend: 24, icone: "../assets/images/images-itens/artesanato/xarope-acer.png" }
                ]
            }
        ]
    },
    {
        id: "copa",
        imagemSrc: "../assets/images/tabela-copa.png", 
        pacotes: [
            { 
                id: "plantacoes_primavera", top: "24.5%", totalItens: 4,
                recompensa: { nome: "Solo Foliar (20)", icone: "../assets/images/images-itens/recompensas/solo-foliar.png" },
                itens: [
                    { idBackend: 25, icone: "../assets/images/images-itens/copa/chirivia.png" },
                    { idBackend: 26, icone: "../assets/images/images-itens/copa/vagem.png" },
                    { idBackend: 27, icone: "../assets/images/images-itens/copa/couve-flor.png" },
                    { idBackend: 28, icone: "../assets/images/images-itens/copa/batata.png" }
                ]
            },
            { 
                id: "plantacoes_verao", top: "37%", totalItens: 4,
                recompensa: { nome: "Aspersor de qualidade (1)", icone: "../assets/images/images-itens/recompensas/aspersor.png" },
                itens: [
                    { idBackend: 29, icone: "../assets/images/images-itens/copa/tomate.png" },
                    { idBackend: 30, icone: "../assets/images/images-itens/copa/pimenta-quente.png" },
                    { idBackend: 31, icone: "../assets/images/images-itens/copa/mirtilo.png" },
                    { idBackend: 32, icone: "../assets/images/images-itens/copa/melao.png" }
                ]
            },
            { 
                id: "plantacoes_outono", top: "50%", totalItens: 4,
                recompensa: { nome: "Apiário (1)", icone: "../assets/images/images-itens/recompensas/apiario.png" },
                itens: [
                    { idBackend: 33, icone: "../assets/images/images-itens/copa/milho.png" },
                    { idBackend: 34, icone: "../assets/images/images-itens/copa/berinjela.png" },
                    { idBackend: 35, icone: "../assets/images/images-itens/copa/abobora.png" },
                    { idBackend: 36, icone: "../assets/images/images-itens/copa/inhame.png" }
                ]
            },
            { 
                id: "plantacoes_qualidade", top: "63.5%", totalItens: 3,
                recompensa: { nome: "Jarra de Conserva (1)", icone: "../assets/images/images-itens/recompensas/jarra-conserva.png" },
                itens: [
                    { idBackend: 37, icone: "../assets/images/images-itens/copa/chirivia-ouro.png" },
                    { idBackend: 38, icone: "../assets/images/images-itens/copa/melao-ouro.png" },
                    { idBackend: 39, icone: "../assets/images/images-itens/copa/abobora-ouro.png" }
                ]
            },
            { 
                id: "animal", top: "77%", totalItens: 5,
                recompensa: { nome: "Prensa de queijo (1)", icone: "../assets/images/images-itens/recompensas/prensa-queijo.png" },
                itens: [
                    { idBackend: 40, icone: "../assets/images/images-itens/copa/leite-grande.png" },
                    { idBackend: 41, icone: "../assets/images/images-itens/copa/ovo-grande-marrom.png" },
                    { idBackend: 42, icone: "../assets/images/images-itens/copa/ovo-grande-branco.png" },
                    { idBackend: 43, icone: "../assets/images/images-itens/copa/leite-cabra-grande.png" },
                    { idBackend: 44, icone: "../assets/images/images-itens/copa/la.png" }
                ]
            },
            { 
                id: "artesao", top: "90%", totalItens: 6,
                recompensa: { nome: "Barril (1)", icone: "../assets/images/images-itens/recompensas/barril.png" },
                itens: [
                    { idBackend: 45, icone: "../assets/images/images-itens/copa/oleo-trufado.png" },
                    { idBackend: 46, icone: "../assets/images/images-itens/copa/tecido.png" },
                    { idBackend: 47, icone: "../assets/images/images-itens/copa/queijo-cabra.png" },
                    { idBackend: 48, icone: "../assets/images/images-itens/copa/queijo.png" },
                    { idBackend: 49, icone: "../assets/images/images-itens/copa/mel.png" },
                    { idBackend: 50, icone: "../assets/images/images-itens/copa/geleia.png" }
                ]
            }
        ]
    },
    {
        id: "aquario",
        imagemSrc: "../assets/images/tabela-aquario.png",
        pacotes: [
            { 
                id: "peixes_rio", top: "24.5%", totalItens: 4, 
                recompensa: { nome: "Iscas (30) ", icone: "../assets/images/images-itens/recompensas/isca.png" },
                itens: [
                    { idBackend: 51, icone: "../assets/images/images-itens/aquario/peixe-sol.png" },
                    { idBackend: 52, icone: "../assets/images/images-itens/aquario/bagre.png" },
                    { idBackend: 53, icone: "../assets/images/images-itens/aquario/alocine.png" },
                    { idBackend: 54, icone: "../assets/images/images-itens/aquario/hibrido.png" }
                ] 
            },
            { 
                id: "peixes_lago", top: "37%", totalItens: 4,
                recompensa: { nome: "Isca artificial (1)", icone: "../assets/images/images-itens/recompensas/isca-art.png" }, 
                itens: [
                    { idBackend: 55, icone: "../assets/images/images-itens/aquario/achiga.png" },
                    { idBackend: 56, icone: "../assets/images/images-itens/aquario/carpa.png" },
                    { idBackend: 57, icone: "../assets/images/images-itens/aquario/peixe-gato-cabecudo.png" },
                    { idBackend: 58, icone: "../assets/images/images-itens/aquario/esturjao.png" }
                ] 
            },
            { 
                id: "peixes_oceano", top: "50%", totalItens: 4, 
                recompensa: { nome: "Totem de teletransporte: Praia (5)", icone: "../assets/images/images-itens/recompensas/totem-praia.png" },
                itens: [
                    { idBackend: 59, icone: "../assets/images/images-itens/aquario/sardinha.png" },
                    { idBackend: 60, icone: "../assets/images/images-itens/aquario/atum.png" },
                    { idBackend: 61, icone: "../assets/images/images-itens/aquario/cioba.png" },
                    { idBackend: 62, icone: "../assets/images/images-itens/aquario/tilapia.png" }
                ] 
            },
            { 
                id: "peixes_noturno", top: "63.5%", totalItens: 3, 
                recompensa: { nome: "Anel de brilho pequeno (1)", icone: "../assets/images/images-itens/recompensas/anel-brilho.png" },
                itens: [
                    { idBackend: 63, icone: "../assets/images/images-itens/aquario/picao-verde.png" },
                    { idBackend: 64, icone: "../assets/images/images-itens/aquario/brema.png" },
                    { idBackend: 65, icone: "../assets/images/images-itens/aquario/enguia.png" }
                ] 
            },
            { 
                id: "covo", top: "77%", totalItens: 5, 
                recompensa: { nome: "Covo (3)", icone: "../assets/images/images-itens/recompensas/covo.png" },
                itens: [
                    { idBackend: 66, icone: "../assets/images/images-itens/aquario/lagosta.png" },
                    { idBackend: 67, icone: "../assets/images/images-itens/aquario/lagostim.png" },
                    { idBackend: 68, icone: "../assets/images/images-itens/aquario/caranguejo.png" },
                    { idBackend: 69, icone: "../assets/images/images-itens/aquario/berbigao.png" },
                    { idBackend: 70, icone: "../assets/images/images-itens/aquario/mexilhao.png" }
                ] 
            },
            { 
                id: "peixes_especializados", top: "90%", totalItens: 4, 
                recompensa: { nome: "Prato do mar (5)", icone: "../assets/images/images-itens/recompensas/prato-mar.png" },
                itens: [
                    { idBackend: 71, icone: "../assets/images/images-itens/aquario/baiacu.png" },
                    { idBackend: 72, icone: "../assets/images/images-itens/aquario/peixe-fantasma.png" },
                    { idBackend: 73, icone: "../assets/images/images-itens/aquario/areinha.png" },
                    { idBackend: 74, icone: "../assets/images/images-itens/aquario/madeirao.png" }
                ] 
            }
        ]
    },
    {
        id: "caldeira",
        imagemSrc: "../assets/images/tabela-caldeira.png",
        pacotes: [
            { 
                id: "ferreiro", top: "24.5%", totalItens: 3, 
                recompensa: { nome: "Fornalha (1)", icone: "../assets/images/images-itens/recompensas/fornalha.png" },
                itens: [
                    { idBackend: 75, icone: "../assets/images/images-itens/caldeira/barra-cobre.png" },
                    { idBackend: 76, icone: "../assets/images/images-itens/caldeira/barra-ferro.png" },
                    { idBackend: 77, icone: "../assets/images/images-itens/caldeira/barra-ouro.png" }
                ] 
            },
            { 
                id: "geologo", top: "37%", totalItens: 4, 
                recompensa: { nome: "Omnigeodo (5)", icone: "../assets/images/images-itens/recompensas/omni.png" },
                itens: [
                    { idBackend: 78, icone: "../assets/images/images-itens/caldeira/quartzo.png" },
                    { idBackend: 79, icone: "../assets/images/images-itens/caldeira/cristal-terra.png" },
                    { idBackend: 80, icone: "../assets/images/images-itens/caldeira/lagrima-congelada.png" },
                    { idBackend: 81, icone: "../assets/images/images-itens/caldeira/quartzo-fogo.png" }
                ] 
            },
            { 
                id: "aventureiro", top: "50%", totalItens: 2, 
                recompensa: { nome: "Pequeno anel com imã (1)", icone: "../assets/images/images-itens/recompensas/anel-ima.png" },
                itens: [
                    { idBackend: 82, icone: "../assets/images/images-itens/caldeira/gosma.png" },
                    { idBackend: 83, icone: "../assets/images/images-itens/caldeira/asa-morcego.png" }
                ] 
            }
        ]
    }, 
    {
        id: "mural",
        imagemSrc: "../assets/images/tabela-recados.png",
        pacotes: [
            { 
                id: "cozinheiro", top: "24.5%", totalItens: 6, 
                recompensa: { nome: "Bolo rosa (3)", icone: "../assets/images/images-itens/recompensas/bolo-rosa.png" },
                itens: [
                    { idBackend: 84, icone: "../assets/images/images-itens/mural/xarope-acer.png" },
                    { idBackend: 85, icone: "../assets/images/images-itens/mural/broto-samambaia.png" },
                    { idBackend: 86, icone: "../assets/images/images-itens/mural/trufa.png" },
                    { idBackend: 87, icone: "../assets/images/images-itens/mural/papoula.png" },
                    { idBackend: 88, icone: "../assets/images/images-itens/mural/enroladinho-arroz.png" },
                    { idBackend: 89, icone: "../assets/images/images-itens/mural/ovo-frito.png" }
                ] 
            },
            { 
                id: "tinta", top: "37%", totalItens: 6, 
                recompensa: { nome: "Gerador de sementes (1)", icone: "../assets/images/images-itens/recompensas/gerador-sementes.png" },
                itens: [
                    { idBackend: 90, icone: "../assets/images/images-itens/mural/cog-vermelho.png" },
                    { idBackend: 91, icone: "../assets/images/images-itens/mural/ourico-do-mar.png" },
                    { idBackend: 92, icone: "../assets/images/images-itens/mural/girassol.png" },
                    { idBackend: 93, icone: "../assets/images/images-itens/mural/pena-pato.png" },
                    { idBackend: 94, icone: "../assets/images/images-itens/mural/agua-marinha.png" },
                    { idBackend: 95, icone: "../assets/images/images-itens/mural/repolho-roxo.png" }
                ] 
            },
            { 
                id: "pesquisa", top: "50%", totalItens: 4, 
                recompensa: { nome: "Máquina de reciclagem (1)", icone: "../assets/images/images-itens/reciclador.png" },
                itens: [
                    { idBackend: 96, icone: "../assets/images/images-itens/mural/cog-roxo.png" },
                    { idBackend: 97, icone: "../assets/images/images-itens/mural/concha-nautilo.png" },
                    { idBackend: 98, icone: "../assets/images/images-itens/mural/esqualio.png" },
                    { idBackend: 99, icone: "../assets/images/images-itens/mural/geodo-congelado.png" }
                ] 
            },
            { 
                id: "forragem", top: "63.5%", totalItens: 3, 
                recompensa: { nome: "Aquecedor (1) ", icone: "../assets/images/images-itens/recompensas/aquecedor.png" },
                itens: [
                    { idBackend: 100, icone: "../assets/images/images-itens/mural/trigo.png" },
                    { idBackend: 101, icone: "../assets/images/images-itens/mural/palha.png" },
                    { idBackend: 102, icone: "../assets/images/images-itens/mural/maca.png" }
                ] 
            },
            { 
                id: "encantador", top: "77%", totalItens: 4,
                recompensa: { nome: "Barra de ouro (5)", icone: "../assets/images/images-itens/recompensas/barra-ouro.png" }, 
                itens: [
                    { idBackend: 103, icone: "../assets/images/images-itens/mural/resina-carvalho.png" },
                    { idBackend: 104, icone: "../assets/images/images-itens/mural/vinho.png" },
                    { idBackend: 105, icone: "../assets/images/images-itens/mural/pe-coelho.png" },
                    { idBackend: 106, icone: "../assets/images/images-itens/mural/roma.png" }
                ] 
            }
        ]
    },
    {
        id: "cofre",
        imagemSrc: "../assets/images/tabela-cofre.png",
        pacotes: [
            { id: "2500_ouros", top: "24.5%", totalItens: 1,
                recompensa: { nome: "Bolo de chocolate (3)", icone: "../assets/images/images-itens/recompensas/bolo-choco.png" },
                itens: [{idBackend: 107, icone: "../assets/images/images-itens/cofre/ouro.png"}] },

            { id: "5000_ouros", top: "37%", totalItens: 1,
                recompensa: { nome: "Fertilizante de qualidade (30)", icone: "../assets/images/images-itens/recompensas/ferti-qualidade.png" },
                itens: [{idBackend: 108, icone: "../assets/images/images-itens/cofre/ouro.png"}] },

            { id: "10000_ouros", top: "50%", totalItens: 1,
                recompensa: { nome: "Para-raios (1)", icone: "../assets/images/images-itens/recompensas/para-raios.png" }, 
                itens: [{idBackend: 109, icone: "../assets/images/images-itens/cofre/ouro.png"}] },

            { id: "25000_ouros", top: "63.5%", totalItens: 1,
                recompensa: { nome: "Cristalário (1)", icone: "../assets/images/images-itens/recompensas/cristalario.png" },
                itens: [{idBackend: 110, icone: "../assets/images/images-itens/cofre/ouro.png"}] }
        ]
    },
    {
        id: "joja",
        imagemSrc: "../assets/images/tabela-joja.png",
        pacotes: [
            { 
                id: "desaparecida", top: "24.5%", totalItens: 5, 
                recompensa: { nome: "Construção do Cinema", icone: "../assets/images/images-itens/recompensas/cinema.png" },
                itens: [
                    { idBackend: 111, icone: "../assets/images/images-itens/joja/vinho.png" },
                    { idBackend: 112, icone: "../assets/images/images-itens/joja/maionese-dinossauro.png" },
                    { idBackend: 113, icone: "../assets/images/images-itens/joja/fragmento-prismatico.png" },
                    { idBackend: 114, icone: "../assets/images/images-itens/joja/caviar.png" },
                    { idBackend: 115, icone: "../assets/images/images-itens/joja/salmao-nulo.png" }
                ] 
            }
        ]
    }
];

const posicoesGalhos = [
    { top: '32%', left: '50%' }, 
    { top: '48%', left: '30%' }, 
    { top: '48%', left: '70%' }, 
    { top: '68%', left: '38%' }, 
    { top: '68%', left: '62%' }, 
    { top: '22%', left: '68%' } 
];

let indiceCategoriaAtual = 0;
let itemAtualAbertoId = null;
let pacoteAtualAberto = null;

// ===================== INICIALIZAÇÃO =====================
function inicializarCarrossel() {
    const trilho = document.getElementById('carrossel-trilho');
    trilho.innerHTML = ''; 

    stardewBundles.forEach(categoria => {
        // Cria a "Página" do carrossel (O fundo de papel bege)
        const painel = document.createElement('div');
        painel.className = 'painel-tabela pergaminho-bg'; 

        const containerLinhas = document.createElement('div');
        containerLinhas.className = 'linhas-container';

        // Para cada pacote dentro da categoria, desenha uma linha
        categoria.pacotes.forEach(pacote => {
            const row = document.createElement('article');
            row.className = 'bundle-row';

            // 1. Info Esquerda (Avatar, Título e Botão Exibir)
            const infoDiv = document.createElement('div');
            infoDiv.className = 'bundle-info';
            
            // Verifica se está completo para o carimbo
            const estaCompleto = pacote.itens && pacote.itens.every(item => localStorage.getItem(`stardew_item_${item.idBackend}`) === 'true');
            const htmlCompleto = estaCompleto ? `<div class="icon-check">✔</div>` : ``;

            // Botão "Exibir" agora fica junto com o título
            infoDiv.innerHTML = `
                <div class="avatar-frame">
                    <img src="../assets/images/conjuntos/${pacote.id}.png" 
                         alt="Conjunto ${pacote.id}" 
                         onerror="this.src='../assets/images/bundle-icon.png'">
                </div>
                <div class="bundle-title">
                    <span>Conjunto</span>
                    <span>${pacote.id.replace(/_/g, ' ')}</span>
                    <button class="btn-pixel btn-pequeno mt-2" onclick="mostrarArvoreWrapper('${pacote.id}')">Exibir ►</button>
                </div>
                ${htmlCompleto}
            `;
            row.appendChild(infoDiv);

            // 2. Info Direita (Grid de Slots HTML)
            const gridDiv = document.createElement('div');
            gridDiv.className = 'items-grid';

            if (pacote.itens) {
                pacote.itens.forEach(item => {
                    const slotContainer = document.createElement('div');
                    slotContainer.className = 'item-slot-container';
                    
                    const slot = document.createElement('div');
                    slot.className = 'item-slot';
                    slot.innerHTML = `<img src="${item.icone}" alt="${item.nome}">`;
                    
                    // Clicar no slot abre o modal!
                    slot.onclick = () => abrirModalItem(item.idBackend, item.icone, item.nome);

                    const nomeSpan = document.createElement('span');
                    nomeSpan.className = 'item-name';
                    nomeSpan.innerText = item.nome || 'Item';

                    slotContainer.appendChild(slot);
                    slotContainer.appendChild(nomeSpan);
                    gridDiv.appendChild(slotContainer);
                });
            }

            row.appendChild(gridDiv);
            containerLinhas.appendChild(row);
        });

        painel.appendChild(containerLinhas);
        trilho.appendChild(painel);
    });

    atualizarTituloCategoria();
}

// ===================== FUNÇÕES ADICIONADAS =====================

// Helper para conectar o onclick renderizado como string ao objeto real
function mostrarArvoreWrapper(pacoteId) {
    for (let c of stardewBundles) {
        const pacoteEncontrado = c.pacotes.find(p => p.id === pacoteId);
        if (pacoteEncontrado) {
            mostrarArvore(pacoteEncontrado);
            return;
        }
    }
}

// Atualiza o <h1 id="titulo-categoria-atual"> no HTML
function atualizarTituloCategoria() {
    const titulos = ["Artesanato", "Copa", "Aquário", "Caldeira", "Mural de Recados", "Cofre", "Joja"];
    const tituloElemento = document.getElementById('titulo-categoria-atual');
    if(tituloElemento) {
        tituloElemento.innerText = "Conjunto " + titulos[indiceCategoriaAtual];
    }
}

// ===================== CARROSSEL =====================

function mudarCategoria(direcao) {
    const trilho = document.getElementById('carrossel-trilho');
    indiceCategoriaAtual += direcao;
    if (indiceCategoriaAtual >= stardewBundles.length) indiceCategoriaAtual = 0;
    if (indiceCategoriaAtual < 0) indiceCategoriaAtual = stardewBundles.length - 1;

    const deslocamento = -(indiceCategoriaAtual * 100);
    trilho.style.transform = `translateX(${deslocamento}%)`;
    
    atualizarTituloCategoria();
    document.getElementById('area-arvore').style.display = 'none';
}

// ===================== ÁRVORE =====================
function mostrarArvore(pacoteSelecionado) {
    pacoteAtualAberto = pacoteSelecionado; 
    
    const areaArvore = document.getElementById('area-arvore');
    const containerBotoesArvore = document.getElementById('arvore-botoes-container');
    const areaRecompensa = document.getElementById('area-recompensa');
    const recompensaIcone = document.getElementById('recompensa-icone');
    const recompensaTexto = document.getElementById('recompensa-texto');

    containerBotoesArvore.innerHTML = ''; 
    areaArvore.style.display = 'block'; 

    for (let i = 0; i < pacoteSelecionado.totalItens; i++) {
        if(i >= posicoesGalhos.length) break; 
        
        const itemAtual = pacoteSelecionado.itens[i]; 
        const botao = document.createElement('button');
        botao.className = 'botao-item-arvore hover-lift';
        botao.style.top = posicoesGalhos[i].top;
        botao.style.left = posicoesGalhos[i].left;
        botao.style.backgroundImage = `url('../assets/images/botoes/btn-presente.png')`;
        // Passa o nome do item também para o modal
        botao.onclick = () => abrirModalItem(itemAtual.idBackend, itemAtual.icone, itemAtual.nome);
        containerBotoesArvore.appendChild(botao);
    }
    
    if(pacoteSelecionado.recompensa) {
        areaRecompensa.style.display = 'block';
        recompensaTexto.innerText = "Recompensa: " + pacoteSelecionado.recompensa.nome;
        recompensaIcone.src = pacoteSelecionado.recompensa.icone;
    } else {
        areaRecompensa.style.display = 'none'; 
    }

    verificarStatusConjunto();
    areaArvore.scrollIntoView({ behavior: 'smooth' });
}

// ===================== LÓGICA DE COMPLETAR =====================
function verificarStatusConjunto() {
    if (!pacoteAtualAberto) return;

    const tituloArvore = document.getElementById('titulo-arvore');
    let nomeBonito = pacoteAtualAberto.id.replace(/_/g, ' ');

    const estaCompleto = pacoteAtualAberto.itens.every(item => {
        return localStorage.getItem(`stardew_item_${item.idBackend}`) === 'true';
    });

    tituloArvore.innerText = "Conjunto " + nomeBonito;
    
    // Mostra ou esconde o Carimbo Visual
    const carimboTabela = document.getElementById(`carimbo-${pacoteAtualAberto.id}`);
    if (carimboTabela) {
        carimboTabela.style.display = estaCompleto ? 'block' : 'none';
    }
}

// ===================== MODAL =====================
async function abrirModalItem(idItem, caminhoIconeFront, nomeDoItem) {
    itemAtualAbertoId = idItem;

    const modal = document.getElementById('stardew-modal');
    const overlay = document.getElementById('overlay-modal');
    const titulo = document.getElementById('modal-titulo');
    const descricao = document.getElementById('modal-descricao');
    const comoConseguir = document.getElementById('modal-como-conseguir');
    const icone = document.getElementById('modal-imagem');
    const imgCheckbox = document.getElementById('modal-checkbox-img');

    // Usa o Nome ao invés do ID enquanto carrega!
    titulo.innerText = nomeDoItem ? `Carregando ${nomeDoItem}...` : "Buscando dados...";
    descricao.innerText = "...";
    comoConseguir.innerText = "...";
    if (caminhoIconeFront) icone.src = caminhoIconeFront; 

    overlay.classList.remove('escondido');
    modal.classList.remove('escondido');

    const estaConcluido = localStorage.getItem(`stardew_item_${idItem}`) === 'true';
    imgCheckbox.src = estaConcluido ? '../assets/images/botoes/btn-check-mark.png' : '../assets/images/botoes/btn-check-desm.png';
    imgCheckbox.dataset.status = estaConcluido; 

   try {
        const resposta = await fetch(`http://localhost:8081/api/items/${idItem}`);
        if(!resposta.ok) throw new Error("Erro na rede");
        const dadosItem = await resposta.json(); 
        
        titulo.innerText = dadosItem.nome;
        descricao.innerHTML = dadosItem.descricao || "Descrição não encontrada.";
        
        let textoComoConseguir = dadosItem.comoObter || dadosItem.comoConseguir || "Informações indisponíveis.";
        comoConseguir.innerHTML = textoComoConseguir.replace(/\n/g, '<br>').replace(/\\n/g, '<br>');
        
    } catch (erro) {
        console.error("Erro ao buscar o item: ", erro);
        // Fallback: Se o servidor falhar, pelo menos mostra o nome do front-end
        titulo.innerText = nomeDoItem ? nomeDoItem : "Item Desconhecido";
        descricao.innerText = "Não foi possível conectar ao banco de dados.";
        comoConseguir.innerText = "Inicie o servidor Java (porta 8081).";
    }
}

function fecharModal() {
    document.getElementById('overlay-modal').classList.add('escondido');
    document.getElementById('stardew-modal').classList.add('escondido');
    itemAtualAbertoId = null;
}

function alternarStatusItemModal() {
    if (!itemAtualAbertoId) return;

    const imgCheckbox = document.getElementById('modal-checkbox-img');
    let statusAtual = (imgCheckbox.dataset.status === 'true');
    let novoStatus = !statusAtual;
    
    imgCheckbox.src = novoStatus ? '../assets/images/botoes/btn-check-mark.png' : '../assets/images/botoes/btn-check-desm.png';
    imgCheckbox.dataset.status = novoStatus;
    
    localStorage.setItem(`stardew_item_${itemAtualAbertoId}`, novoStatus);
    verificarStatusConjunto();
}

window.onload = inicializarCarrossel;

function abrirTutorial() {
    const modal = document.getElementById('modal-tutorial');
    if (modal) modal.style.display = 'flex'; 
}

function fecharTutorial() {
    const modal = document.getElementById('modal-tutorial');
    if (modal) modal.style.display = 'none'; 
}