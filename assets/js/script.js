
// ===================== BANCO DE DADOS COMPLETO (STARDEW VALLEY) =====================
const stardewBundles = [
    {
        id: "artesanato",
        imagemSrc: "../assets/images/tabela-artesanato.png",
        pacotes: [
            { 
                id: "primavera", top: "24.5%", totalItens: 4,
                itens: [
                    { idBackend: 1, icone: "../assets/images/raiz-forte.png" },
                    { idBackend: 2, icone: "../assets/images/narciso.png" },
                    { idBackend: 3, icone: "../assets/images/alho-poro.png" },
                    { idBackend: 4, icone: "../assets/images/dente-leao.png" }
                ]
            },
            { 
                id: "verao", top: "37%", totalItens: 3,
                itens: [
                    { idBackend: 5, icone: "../assets/images/uva.png" },
                    { idBackend: 6, icone: "../assets/images/baga-especiaria.png" },
                    { idBackend: 7, icone: "../assets/images/ervilha-doce.png" }
                ]
            },
            { 
                id: "outono", top: "50%", totalItens: 4,
                itens: [
                    { idBackend: 8, icone: "../assets/images/amora-silvestre.png" },
                    { idBackend: 9, icone: "../assets/images/cogumelo-comum.png" },
                    { idBackend: 10, icone: "../assets/images/avela.png" },
                    { idBackend: 11, icone: "../assets/images/ameixa-selvagem.png" }
                ]
            },
            { 
                id: "inverno", top: "63.5%", totalItens: 4,
                itens: [
                    { idBackend: 12, icone: "../assets/images/raiz-inverno.png" },
                    { idBackend: 13, icone: "../assets/images/fruta-cristal.png" },
                    { idBackend: 14, icone: "../assets/images/inha-neve.png" },
                    { idBackend: 15, icone: "../assets/images/azao-inverno.png" } 
                ]
            },
            { 
                id: "construcao", top: "77%", totalItens: 4,
                itens: [
                    { idBackend: 16, icone: "../assets/images/madeira.png" },
                    { idBackend: 17, icone: "../assets/images/madeira.png" },
                    { idBackend: 18, icone: "../assets/images/pedra.png" },
                    { idBackend: 19, icone: "../assets/images/madeira-lei.png" }
                ]
            },
            { 
                id: "exotico", top: "90%", totalItens: 5,
                itens: [
                    { idBackend: 20, icone: "../assets/images/coco.png" },
                    { idBackend: 21, icone: "../assets/images/figo-da-india.png" },
                    { idBackend: 22, icone: "../assets/images/cogumelo-caverna.png" },
                    { idBackend: 23, icone: "../assets/images/cogumelo-vermelho.png" },
                    { idBackend: 24, icone: "../assets/images/xarope-bordo.png" }
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
                itens: [
                    { idBackend: 25, icone: "../assets/images/chuvia.png" },
                    { idBackend: 26, icone: "../assets/images/feijao-verde.png" },
                    { idBackend: 27, icone: "../assets/images/couve-flor.png" },
                    { idBackend: 28, icone: "../assets/images/batata.png" }
                ]
            },
            { 
                id: "plantacoes_verao", top: "37%", totalItens: 4,
                itens: [
                    { idBackend: 29, icone: "../assets/images/tomate.png" },
                    { idBackend: 30, icone: "../assets/images/pimenta-quente.png" },
                    { idBackend: 31, icone: "../assets/images/mirtilo.png" },
                    { idBackend: 32, icone: "../assets/images/melao.png" }
                ]
            },
            { 
                id: "plantacoes_outono", top: "50%", totalItens: 4,
                itens: [
                    { idBackend: 33, icone: "../assets/images/milho.png" },
                    { idBackend: 34, icone: "../assets/images/berinjela.png" },
                    { idBackend: 35, icone: "../assets/images/abobora.png" },
                    { idBackend: 36, icone: "../assets/images/inhame.png" }
                ]
            },
            { 
                id: "plantacoes_qualidade", top: "63.5%", totalItens: 3,
                itens: [
                    { idBackend: 37, icone: "../assets/images/chuvia-ouro.png" },
                    { idBackend: 38, icone: "../assets/images/melao-ouro.png" },
                    { idBackend: 39, icone: "../assets/images/abobora-ouro.png" }
                ]
            },
            { 
                id: "animal", top: "77%", totalItens: 5,
                itens: [
                    { idBackend: 40, icone: "../assets/images/leite-grande.png" },
                    { idBackend: 41, icone: "../assets/images/ovo-grande-marrom.png" },
                    { idBackend: 42, icone: "../assets/images/ovo-grande-branco.png" },
                    { idBackend: 43, icone: "../assets/images/leite-cabra-grande.png" },
                    { idBackend: 44, icone: "../assets/images/la.png" }
                ]
            },
            { 
                id: "artesao", top: "90%", totalItens: 6,
                itens: [
                    { idBackend: 45, icone: "../assets/images/oleo-trufado.png" },
                    { idBackend: 46, icone: "../assets/images/tecido.png" },
                    { idBackend: 47, icone: "../assets/images/queijo-cabra.png" },
                    { idBackend: 48, icone: "../assets/images/queijo.png" },
                    { idBackend: 49, icone: "../assets/images/mel.png" },
                    { idBackend: 50, icone: "../assets/images/geleia.png" }
                ]
            }
        ]
    },
    {
        id: "aquario",
        imagemSrc: "../assets/images/tabela-aquario.png",
        pacotes: [
            { id: "peixes_rio", top: "24.5%", totalItens: 4, itens: [{idBackend: 51, icone: "../assets/images/peixe-sol.png"}] },
            { id: "peixes_lago", top: "37%", totalItens: 4, itens: [{idBackend: 52, icone: "../assets/images/achiga.png"}] },
            { id: "peixes_oceano", top: "50%", totalItens: 4, itens: [{idBackend: 53, icone: "../assets/images/sardinha.png"}] },
            { id: "peixe_noturno", top: "63.5%", totalItens: 3, itens: [{idBackend: 54, icone: "../assets/images/lucioperca.png"}] },
            { id: "covo", top: "77%", totalItens: 5, itens: [{idBackend: 55, icone: "../assets/images/lagosta.png"}] },
            { id: "peixes_especializados", top: "90%", totalItens: 4, itens: [{idBackend: 56, icone: "../assets/images/baiacu.png"}] }
        ]
    },
    {
        id: "caldeira",
        imagemSrc: "../assets/images/tabela-caldeira.png",
        pacotes: [
            { id: "ferreiro", top: "24.5%", totalItens: 3, itens: [{idBackend: 57, icone: "../assets/images/barra-cobre.png"}] },
            { id: "geologo", top: "37%", totalItens: 4, itens: [{idBackend: 58, icone: "../assets/images/quartzo.png"}] },
            { id: "aventureiro", top: "50%", totalItens: 2, itens: [{idBackend: 59, icone: "../assets/images/gosma.png"}] }
        ]
    }, 
    {
        id: "mural",
        imagemSrc: "../assets/images/tabela-mural.png",
        pacotes: [
            { id: "cozinheiro", top: "24.5%", totalItens: 6, itens: [{idBackend: 60, icone: "../assets/images/xarope-bordo.png"}] },
            { id: "tinta", top: "37%", totalItens: 6, itens: [{idBackend: 61, icone: "../assets/images/cogumelo-vermelho.png"}] },
            { id: "pesquisa", top: "50%", totalItens: 4, itens: [{idBackend: 62, icone: "../assets/images/cogumelo-roxo.png"}] },
            { id: "forragem", top: "63.5%", totalItens: 3, itens: [{idBackend: 63, icone: "../assets/images/feno.png"}] },
            { id: "encantador", top: "77%", totalItens: 4, itens: [{idBackend: 64, icone: "../assets/images/resina-carvalho.png"}] }
        ]
    },
    {
        id: "cofre",
        imagemSrc: "../assets/images/tabela-cofre.png",
        pacotes: [
            { id: "2500_ouros", top: "24.5%", totalItens: 1, itens: [{idBackend: 65, icone: "../assets/images/ouro.png"}] },
            { id: "5000_ouros", top: "37%", totalItens: 1, itens: [{idBackend: 66, icone: "../assets/images/ouro.png"}] },
            { id: "10000_ouros", top: "50%", totalItens: 1, itens: [{idBackend: 67, icone: "../assets/images/ouro.png"}] },
            { id: "25000_ouros", top: "63.5%", totalItens: 1, itens: [{idBackend: 68, icone: "../assets/images/ouro.png"}] }
        ]
    },
    {
        id: "joja",
        imagemSrc: "../assets/images/tabela-joja.png",
        pacotes: [
            { id: "desaparecida", top: "24.5%", totalItens: 5, itens: [{idBackend: 69, icone: "../assets/images/vinho-prata.png"}] }
        ]
    }
];

const posicoesGalhos = [
    { top: '30%', left: '50%' }, { top: '45%', left: '25%' }, 
    { top: '45%', left: '75%' }, { top: '65%', left: '35%' }, 
    { top: '65%', left: '65%' }, { top: '20%', left: '70%' } 
];

let indiceCategoriaAtual = 0;

// ===================== INICIALIZAÇÃO DO CARROSSEL =====================
function inicializarCarrossel() {
    const trilho = document.getElementById('carrossel-trilho');
    trilho.innerHTML = '';

    // Cria um painel no trilho para CADA categoria no banco de dados (Pré-carregamento)
    stardewBundles.forEach(categoria => {
        const painel = document.createElement('div');
        painel.className = 'painel-tabela';

        // A imagem principal da tabela
        const imgTabela = document.createElement('img');
        imgTabela.src = categoria.imagemSrc;
        imgTabela.className = 'imagem-tabela-base';
        painel.appendChild(imgTabela);

        // Adiciona os botões "Exibir" por cima da tabela
        categoria.pacotes.forEach(pacote => {
            const btnExibir = document.createElement('img');
            btnExibir.src = '../assets/images/btn-exibir.png'; 
            btnExibir.className = 'btn-exibir-flutuante';
            btnExibir.style.top = pacote.top; 
            btnExibir.onclick = () => mostrarArvore(pacote);
            painel.appendChild(btnExibir);
        });

        trilho.appendChild(painel);
    });
}

function mudarCategoria(direcao) {
    const trilho = document.getElementById('carrossel-trilho');
    
    // Atualiza o índice (Impede de passar do limite)
    indiceCategoriaAtual += direcao;
    if (indiceCategoriaAtual >= stardewBundles.length) indiceCategoriaAtual = 0;
    if (indiceCategoriaAtual < 0) indiceCategoriaAtual = stardewBundles.length - 1;

    // A mágica do slider: Move o trilho X vezes 100% para o lado
    const deslocamento = -(indiceCategoriaAtual * 100);
    trilho.style.transform = `translateX(${deslocamento}%)`;

    // Esconde a árvore ao trocar de página
    document.getElementById('area-arvore').style.display = 'none';
}

// ===================== ÁRVORE E MODAL (COM BACKEND) =====================
function mostrarArvore(pacoteSelecionado) {
    const areaArvore = document.getElementById('area-arvore');
    const containerBotoesArvore = document.getElementById('arvore-botoes-container');
    
    containerBotoesArvore.innerHTML = ''; 
    areaArvore.style.display = 'block'; 

    for (let i = 0; i < pacoteSelecionado.totalItens; i++) {
        if(i >= posicoesGalhos.length) break; 
        
        const itemAtual = pacoteSelecionado.itens[i]; // Pega os dados específicos deste nó
        
        const botao = document.createElement('button');
        botao.className = 'botao-item-arvore';
        botao.style.top = posicoesGalhos[i].top;
        botao.style.left = posicoesGalhos[i].left;
        
        // Aplica a imagem do item como fundo do botão!
        if(itemAtual && itemAtual.icone) {
            botao.style.backgroundImage = `url('${itemAtual.icone}')`;
        }

        // Passa o ID do backend para a função do modal
        botao.onclick = () => abrirModalItem(itemAtual.idBackend);

        containerBotoesArvore.appendChild(botao);
    }
    
    areaArvore.scrollIntoView({ behavior: 'smooth' });
}

// Função ASSÍNCRONA para buscar no Java Spring Boot
async function abrirModalItem(idItem) {
    const modal = document.getElementById('modal-item');
    const titulo = document.getElementById('modal-titulo');
    
    // 1. Mostra o modal com tela de "Carregando"
    titulo.innerText = "Buscando dados no servidor...";
    modal.style.display = 'block';

    try {
        // 2. Faz a requisição HTTP para a porta 8081 do seu Spring Boot
        // Ajuste a rota ('/api/itens/') de acordo com o seu Controller no Java!
        const resposta = await fetch(`http://localhost:8081/api/itens/${idItem}`);
        
        if(!resposta.ok) throw new Error("Erro na rede");
        
        const dadosItem = await resposta.json(); // Transforma a resposta em JSON

        // 3. Preenche o HTML do Modal com as propriedades da sua classe Java
        titulo.innerText = dadosItem.nome;
        document.getElementById('modal-descricao').innerText = dadosItem.descricao;
        document.getElementById('modal-como-obter').innerText = dadosItem.comoObter;
        
    } catch (erro) {
        console.error("Erro ao buscar o item: ", erro);
        titulo.innerText = "Erro ao carregar o item. Verifique se o backend (porta 8081) está rodando!";
    }
}

function fecharModal() {
    document.getElementById('modal-item').style.display = 'none';
}

// Inicia construindo o trilho de tabelas
window.onload = inicializarCarrossel;