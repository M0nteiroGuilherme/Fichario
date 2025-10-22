

const myButton = document.getElementById("myButton");
const NomePersonagem = document.getElementById("NomePersonagem");

/*========================================
=              VARIÁVEIS UI              =
========================================*/

const DivCriar = document.getElementById("DivCriar");
const DivVer = document.getElementById("DivVer");
const divEscolha = document.getElementById("divEscolha");
const DivDND = document.getElementById("DivDND");
const DivOP = document.getElementById("DivOP");
const DivClassOP = document.getElementById("DivClassOP")
const DivTQOP = document.getElementById("DivTQOP")
const ContinerOrigem = document.getElementById("ContinerOrigem")

const ContinerAtributo = document.getElementById("ContinerAtributo");

/*========================================
=          VARIÁVEIS ATRIBUTOS           =
========================================*/

const pontosTotal = 9;

const InputAtributos = document.getElementsByClassName("InputAtributos");
const MostarPA = document.getElementById("MostarPontosAtributos");

const inputAgilidade = document.getElementById("Agilidade");
const inputForca = document.getElementById("Forca");
const inputPresenca = document.getElementById("Presenca");
const inputVigor = document.getElementById("Vigor");
const inputIntelecto = document.getElementById("Intelecto");

/*========================================
=          FICHA PERSONAGEM              =
========================================*/

class Personagem {
    constructor(
        nome = "",
        aparencia = "",
        personalidade = "",
        historia = "",
        objetivo = "",
        vida = 0,
        sanidade = 0,
        defesa = 0,
        bloqueio = 0,
        esquiva = 0,
        pontosDeEsforco = 0
    ) {
        this.Nome = nome;
        this.Aparencia = aparencia;
        this.Personalidade = personalidade;
        this.Historia = historia;
        this.Objetivo = objetivo;
        this.Vida = vida;
        this.Sanidade = sanidade;
        this.Defesa = defesa;
        this.Bloqueio = bloqueio;
        this.Esquiva = esquiva;
        this.PontosDeEsforco = pontosDeEsforco;
    }
}

class Ritual {
    constructor(nome, nivelDoRitual, pe, alcance, alvo, descricao) {
        this.Nome = nome;
        this.NivelDoRitual = nivelDoRitual;
        this.pe = pe;
        this.Alcance = alcance;
        this.Alvo = alvo;
        this.Descrição = descricao;
    }
}

class FichaCompletaOrdem {
    constructor(nomePersonagem = "") {
        this.EscolhaClasse = "";
        this.Personagem = new Personagem(nomePersonagem);

        this.Atributo = {
            Agilidade: 0,
            Força: 0,
            Presença: 0,
            Vigor: 0,
            Intelecto: 0,
        };

        this.Pericias = {};
        this.Combate = {};
        this.Habilidades = {};
        this.Rituais = {};

        this.InicializarPropriedadesDaFicha();
    }

    InicializarPropriedadesDaFicha() {
        this.Pericias = {
            Acrobacia: 0, Adestramento: 0, Arte: 0,
            Atletismo: 0, Atualidades: 0, Ciências: 0,
            Crime: 0, Diplomacia: 0, Enganação: 0,
            Fortitude: 0, Furtividade: 0, Iniciativa: 0,
            Intimidação: 0, Intuição: 0, Investigação: 0,
            Luta: 0, Medicina: 0, Ocultismo: 0,
            Percepção: 0, Pilotagem: 0, Pontaria: 0,
            Profissão: 0, Reflexos: 0, Religião: 0,
            Sobrevivência: 0, Tática: 0, Tecnologia: 0,
            Vontade: 0,
        };
    }
}

/*========================================
=             FUNÇÕES UI                 =
========================================*/

function MostrarCriar() {
    divEscolha.style.display = "block";
    DivCriar.style.display = "block";
    DivVer.style.display = "none";
    DivDND.style.display = "none";
    DivOP.style.display = "none";
}

function MostrarVer() {
    DivCriar.style.display = "none";
    DivVer.style.display = "block";
}


function MostrarOP() {
    DivDND.style.display           = "none";
    DivOP.style.display            = "block";
    divEscolha.style.display       = "none";
    DivTQOP.style.display          = "none";
    DivClassOP.style.display       = "none";
    ContinerAtributo.style.display = "flex"

}

function MostrarDND() {
    DivDND.style.display     = "block";
    DivOP.style.display      = "none";
    divEscolha.style.display = "none";
    DivTQOP.style.display    = "none";
}

function esconderTudo() {
    DivDND.style.display     = "none";
    DivOP.style.display      = "none";
    divEscolha.style.display = "none";
    DivClassOP.style.display = "none";

    DivTQOP.style.display = "none";

}

/*========================================
=          FUNÇÕES ATRIBUTOS             =
========================================*/

const ficha = new FichaCompletaOrdem();


function calcularAtributos() {
    let PontosGastos = 0;

    for (let input of InputAtributos) {
        PontosGastos += parseFloat(input.value) || 0;
    }

    const pontosAtuais = pontosTotal - PontosGastos;
    MostarPA.textContent = pontosAtuais;
}

for (let input of InputAtributos) {
    input.addEventListener("input", calcularAtributos);
}

calcularAtributos();


const bnt = document.getElementById("submit")


bnt.addEventListener("click", function (event) {
    event.preventDefault()

    ficha.Atributo.Agilidade = document.getElementById("Agilidade").value
    ficha.Atributo.Presença  = document.getElementById("Presena").value
    ficha.Atributo.Vigor     = document.getElementById("Vigor").value
    ficha.Atributo.Intelecto = document.getElementById("Intelecto").value
    ficha.Atributo.Força     = document.getElementById("Forca").value

    ContinerOrigem.style.display = "flex";
    ContinerAtributo.style.display = "none"


    console.table([ficha.Atributo.Agilidade, ficha.Atributo.Presença, ficha.Atributo.Vigor, ficha.Atributo.Intelecto, ficha.Atributo.Força])
})

/*========================================
=          var Origens                 =
========================================*/

const EscolherOrigeOPAcademico = document.getElementById("EscolherOrigeOPAcademico")

const EscolherOrigeOPAgenteSaude = document.getElementById("EscolherOrigeOPAgenteSaude")

const EscolherOrigeOPAmnesico = document.getElementById("EscolherOrigeOPAmnesico")

const EscolherOrigeOPArtista = document.getElementById("EscolherOrigeOPArtista")

const EscolherOrigeOPAtleta = document.getElementById("EscolherOrigeOPAtleta")

const EscolherOrigeOPChef = document.getElementById("EscolherOrigeOPChef")

const EscolherOrigeOPCientistaForense = document.getElementById("EscolherOrigeOPCientistaForense")

const EscolherOrigeOPCriminoso = document.getElementById("EscolherOrigeOPCriminoso")

const EscolherOrigeOPCultistaArrependido = document.getElementById("EscolherOrigeOPCultistaArrependido")

const EscolherOrigeOPDesgarrado = document.getElementById("EscolherOrigeOPDesgarrado")

const EscolherOrigeOPDuble = document.getElementById("EscolherOrigeOPDuble")

const EscolherOrigeOPEngenheiro = document.getElementById("EscolherOrigeOPEngenheiro")

const EscolherOrigeOPEscritor = document.getElementById("EscolherOrigeOPEscritor")

const EscolherOrigeOPExecutivo = document.getElementById("EscolherOrigeOPExecutivo")

const EscolherOrigeOPGauderioAbutre = document.getElementById("EscolherOrigeOPGauderioAbutre")

const EscolherOrigeOPGinasta = document.getElementById("EscolherOrigeOPGinasta")

const EscolherOrigeOPInvestigador = document.getElementById("EscolherOrigeOPInvestigador")

const EscolherOrigeOPJornalista = document.getElementById("EscolherOrigeOPJornalista")

const EscolherOrigeOPLutador = document.getElementById("EscolherOrigeOPLutador")

const EscolherOrigeOPMagnata = document.getElementById("EscolherOrigeOPMagnata")

const EscolherOrigeOPMercenario         = document.getElementById("EscolherOrigeOPMercenario")

const EscolherOrigeOPMilitar            = document.getElementById("EscolherOrigeOPMilitar")

const EscolherOrigeOPOperario           = document.getElementById("EscolherOrigeOPOperario")

const EscolherOrigeOPPolicial           = document.getElementById("EscolherOrigeOPPolicial")

const EscolherOrigeOPProfessor          = document.getElementById("EscolherOrigeOPProfessor")

const EscolherOrigeOPReligioso          = document.getElementById("EscolherOrigeOPReligioso")

const EscolherOrigeOPRevoltado          = document.getElementById("EscolherOrigeOPRevoltado")

const EscolherOrigeOPServidorPublico    = document.getElementById("EscolherOrigeOPServidorPublico")

const EscolherOrigeOPTeoricoConspiracao = document.getElementById("EscolherOrigeOPTeoricoConspiracao")

const EscolherOrigeOPTI                 = document.getElementById("EscolherOrigeOPTI")

const EscolherOrigeOPTrabalhadorRural   = document.getElementById("EscolherOrigeOPTrabalhadorRural")

const EscolherOrigeOPTrambiqueiro       = document.getElementById("EscolherOrigeOPTrambiqueiro")

const EscolherOrigeOPUniversitario      = document.getElementById("EscolherOrigeOPUniversitario")

const EscolherOrigeOPVitima             = document.getElementById("EscolherOrigeOPVitima")

const TodosOsMostra                     = document.querySelectorAll('[id^="Mostra"]')

/*========================================
=            FUNÇÂO ORIGENS              =
========================================*/

TodosOsMostra.forEach(botao => {
    botao.addEventListener('click', function () {

        const idDaDivAlvo = this.id.replace('Mostra', 'Div');
        const divAlvo = document.getElementById(idDaDivAlvo);

        if (divAlvo.style.display === 'block') {
            divAlvo.style.display = 'none';
            this.textContent      = 'V'; 
        } else {
            
            divAlvo.style.display = 'block';
            this.textContent      = 'Λ'; 
        }
    })
})

function escolherOrigem(pericia1, pericia2) {

    ficha.Pericias[pericia1] = 5
    ficha.Pericias[pericia2] = 5

    console.table([ficha.Pericias])

    ContinerOrigem.style.display = "none"
    DivClassOP.style.display = "flex"
}

EscolherOrigeOPAcademico.addEventListener("click", function (event) {
    escolherOrigem("Ciências", "Investigação")
})

EscolherOrigeOPAgenteSaude.addEventListener("click", function (event) {
    escolherOrigem("Intuição", "Medicina")
})

EscolherOrigeOPAmnesico.addEventListener("click", function (event) {
    escolherOrigem("Intuição", "Medicina")
})

EscolherOrigeOPArtista.addEventListener("click", function (event) {
    escolherOrigem("Arte", "Enganação")
})

EscolherOrigeOPAtleta.addEventListener("click", function (event) {
    escolherOrigem("Acrobacia", "Atletismo")
})

EscolherOrigeOPChef.addEventListener("click", function (event) {
    escolherOrigem("Fortitude", "Profissão")
})

EscolherOrigeOPCientistaForense.addEventListener("click", function (event) {
    escolherOrigem("Ciências", "Investigação")
})

EscolherOrigeOPCriminoso.addEventListener("click", function (event) {
    escolherOrigem("Crime", "Furtividade")
})

EscolherOrigeOPCultistaArrependido.addEventListener("click", function (event) {
    escolherOrigem("Ocultista", "Religião")
})

EscolherOrigeOPDesgarrado.addEventListener("click", function (event) {
    escolherOrigem("Fortitude", "Sobrevivência")
    ficha.Personagem.Vida = +1
})

EscolherOrigeOPDuble.addEventListener("click", function (event) {
    escolherOrigem("Pilotagem", "Reflexos")
})

EscolherOrigeOPEngenheiro.addEventListener("click", function (event) {
    escolherOrigem("Profissão", "Tecnologia")
})

EscolherOrigeOPEscritor.addEventListener("click", function (event) {
    escolherOrigem("Arte", "Atualidades")
})

EscolherOrigeOPExecutivo.addEventListener("click", function (event) {
    escolherOrigem("Profissão", "Diplomacia")

})

EscolherOrigeOPGauderioAbutre.addEventListener("click", function (event) {
    escolherOrigem("Luta", "Pilotagem")
})

EscolherOrigeOPGinasta.addEventListener("click", function (event) {
    escolherOrigem("Acrobacia", "Reflexos")
})

EscolherOrigeOPInvestigador.addEventListener("click", function (event) {
    escolherOrigem("Investigação", "Percepção")
})

EscolherOrigeOPJornalista.addEventListener("click", function (event) {
    escolherOrigem("Atualidades", "Investigação")
})

EscolherOrigeOPLutador.addEventListener("click", function (event) {
    escolherOrigem("Luta", "Reflexos")
})

EscolherOrigeOPMagnata.addEventListener("click", function (event) {
    escolherOrigem("Diplomacia", "Pilotagem")
})

EscolherOrigeOPMercenario.addEventListener("click", function (event) {
    escolherOrigem("Iniciativa", "Intimidação")
})

EscolherOrigeOPMilitar.addEventListener("click", function (event) {
    escolherOrigem("Pontaria", "Tática")
})

EscolherOrigeOPOperario.addEventListener("click", function (event) {
    escolherOrigem("Profissão", "Fortitude")
})

EscolherOrigeOPPolicial.addEventListener("click", function (event) {
    escolherOrigem("Pontaria", "Percepção")
})

EscolherOrigeOPProfessor.addEventListener("click", function (event) {
    escolherOrigem("Ciências", "Intuição")
})

EscolherOrigeOPReligioso.addEventListener("click", function (event) {
    escolherOrigem("Religião", "Vontade")
})

EscolherOrigeOPRevoltado.addEventListener("click", function (event) {
    escolherOrigem("Fortitude", "Vontade")
})

EscolherOrigeOPServidorPublico.addEventListener("click", function (event) {
    escolherOrigem("Intuição", "Vontade")
})

EscolherOrigeOPTeoricoConspiracao.addEventListener("click", function (event) {
    escolherOrigem("Investigação", "Ocultismo")
})

EscolherOrigeOPTI.addEventListener("click", function (event) {
    escolherOrigem("Investigação", "Tecnologia")
})

EscolherOrigeOPTrabalhadorRural.addEventListener("click", function (event) {
    escolherOrigem("Sobrevivência", "Adestramento")
})

EscolherOrigeOPTrambiqueiro.addEventListener("click", function (event) {
    escolherOrigem("Crime", "Enganação")
})

EscolherOrigeOPUniversitario.addEventListener("click", function (event) {
    escolherOrigem("Atualidades", "Investigação")
})

EscolherOrigeOPVitima.addEventListener("click", function (event) {
    escolherOrigem("Reflexos", "Vontade")
})

/*========================================
=          FUNÇÕES Classe                =
========================================*/

const Combatente = document.getElementById("Combatente")
const Ocultista = document.getElementById("Ocultista")
const Especialista = document.getElementById("Especialista")
const Mundano = document.getElementById("Mundano")

function alterarClasse(PontoVidaIniciais, PontoSanidadeIniciais, PontosDeEsforcoIniciais) {

    ficha.Personagem.vida            = PontoVidaIniciais + parseInt(ficha.Atributo.Vigor)
    ficha.Personagem.Sanidade        = PontoSanidadeIniciais
    ficha.Personagem.PontosDeEsforco = PontosDeEsforcoIniciais + parseInt(ficha.Atributo.Presença)

    console.table([ficha.Personagem.vida, ficha.Personagem.Sanidade, ficha.Personagem.PontosDeEsforco])

    DivClassOP.style.display = "none"
    DivTQOP.style.display = "block"
}

Combatente.addEventListener("click", function (event) {
    alterarClasse(20, 12, 20)
})

Ocultista.addEventListener("click", function (event) {
    alterarClasse(12, 20, 4)
})

Especialista.addEventListener("click", function (event) {
    alterarClasse(16, 16, 3)
})

Mundano.addEventListener("click", function (event) {
    alterarClasse(8, 1, 8)
})

/*========================================
=          FUNÇÕES Infos                 =
========================================*/

const bntInfos = document.getElementById("bntInfos")


bntInfos.addEventListener("click", function (event) {
    ficha.Personagem.Nome          = document.getElementById("NomePersonagem").value
    ficha.Personagem.Aparencia     = document.getElementById("Aparencia").value
    ficha.Personagem.Personalidade = document.getElementById("Personalidade").value
    ficha.Personagem.Historia      = document.getElementById("Historico").value
    ficha.Personagem.Objetivo      = document.getElementById("Objetivo").value

    console.table([ficha.Personagem.Nome, ficha.Personagem.Aparencia, ficha.Personagem.Personalidade, ficha.Personagem.Historia, ficha.Personagem.Objetivo])

    const fichaFinal = {
        Nome: ficha.Personagem.Nome,
        Aparencia: ficha.Personagem.Aparencia,
        Personalidade: ficha.Personagem.Personalidade,
        Historia: ficha.Personagem.Historia,
        Objetivo: ficha.Personagem.Objetivo,
        Vida: ficha.Personagem.vida,
        Sanidade: ficha.Personagem.Sanidade,
        PontosDeEsforco: ficha.Personagem.PontosDeEsforco,
        Atributos: {
            Agilidade: ficha.Atributo.Agilidade,
            Presença: ficha.Atributo.Presença,
            Vigor: ficha.Atributo.Vigor,
            Intelecto: ficha.Atributo.Intelecto,
            Força: ficha.Atributo.Força,
        },
        Pericias: {
            Acrobacia: ficha.Pericias.Acrobacia,
            Adestramento: ficha.Pericias.Adestramento,
            Arte: ficha.Pericias.Arte,
            Atletismo: ficha.Pericias.Atletismo,
            Atualidades: ficha.Pericias.Atualidades,
            Ciências: ficha.Pericias.Ciências,
            Crime: ficha.Pericias.Crime,
            Diplomacia: ficha.Pericias.Diplomacia,
            Enganação: ficha.Pericias.Enganação,
            Fortitude: ficha.Pericias.Fortitude,
            Furtividade: ficha.Pericias.Furtividade,
            Iniciativa: ficha.Pericias.Iniciativa,
            Intimidação: ficha.Pericias.Intimidação,
            Intuição: ficha.Pericias.Intuição,
            Investigação: ficha.Pericias.Investigação,
            Luta: ficha.Pericias.Luta,
            Medicina: ficha.Pericias.Medicina,
            Ocultismo: ficha.Pericias.Ocultismo,
            Percepção: ficha.Pericias.Percepção,
            Pilotagem: ficha.Pericias.Pilotagem,
            Pontaria: ficha.Pericias.Pontaria,
            Profissão: ficha.Pericias.Profissão,
            Reflexos: ficha.Pericias.Reflexos,
            Religião: ficha.Pericias.Religião,
            Sobrevivência: ficha.Pericias.Sobrevivência,
            Tática: ficha.Pericias.Tática,
            Tecnologia: ficha.Pericias.Tecnologia,
            Vontade: ficha.Pericias.Vontade,
        }

    };

    const fichasNova = JSON.stringify(fichaFinal, null, 4)

    window.electronAPI.saveFile(ficha.Personagem.Nome + "OP.json", fichasNova)
    console.log(fichasNova)

    DivTQOP.style.display = "none"
})


/*===============================================================
=                                 DND                           =
===============================================================*/



class PersonagemDND {
    constructor(
        nome          = "",
        aparencia     = "",
        personalidade = "",
        historia      = "",
        objetivo      = "",
        vida          = 0,
        defesa        = 0,
        bloqueio      = 0,
        esquiva       = 0,
        raça          = " ",
        sub_Raça      = " ",
        classe        = " ",
    ) {
        this.Nome          = nome;
        this.Aparencia     = aparencia;
        this.Personalidade = personalidade;
        this.Historia      = historia;
        this.Objetivo      = objetivo;
        this.Vida          = vida;
        this.Defesa        = defesa;
        this.Bloqueio      = bloqueio;
        this.Esquiva       = esquiva; 
        this.Raça          = raça;
        this.Sub_Raça      = sub_Raça;
        this.Classe        = classe
    }
}


class FichaCompletaDND {
    constructor(nomePersonagemDND = "") {
        this.EscolhaClasse = "";
        this.PersonagemDND = new Personagem(nomePersonagemDND);

        this.Atributo = {
            Carisma: 0,
            Constituição: 0,
            Destreza: 0,
            Força: 0,
            Sabedoria: 0,
            Inteligência: 0,
        };

        this.TesteResistencia = {
            Carisma: 0,
            Constituição: 0,
            Destreza: 0,
            Força: 0,
            Sabedoria: 0,
            Inteligência: 0,
        }

        this.TesteResistencia = {};
        this.PericiasDND = {};
        this.Combate = {};
        this.Habilidades = {};


        this.InicializarPropriedadesDaFicha();
    }

    InicializarPropriedadesDaFicha() {
        this.PericiasDND = {

            Acrobacia: 0,
            Adestramento: 0,
            Arcanismo: 0,
            Atletismo: 0,
            Atuação: 0,
            Enganação: 0,
            Furtividade: 0,
            História: 0,
            Intimidação: 0,
            Intuição: 0,
            Investigação: 0,
            Medicina: 0,
            Natureza: 0,
            Percepção: 0,
            Persuasão: 0,
            Prestidigitação: 0,
            Religião: 0,
            Sobrevivência: 0,
        };
    }
}

/*========================================
=         VARIÁVEIS HABILIDADES          =
========================================*/

const fichaDND = new FichaCompletaDND();

const pontoCarisma      = document.getElementById("pontoCarisma")
const pontoConstituicao = document.getElementById("pontoConstituicao")
const pontoDestreza     = document.getElementById("PontoDestreza")
const pontoForca        = document.getElementById("pontoForca")
const pontoSabedoria    = document.getElementById("pontoSabedoria")
const pontoInteligencia = document.getElementById("pontoInteligencia")

const quinze  = document.getElementById('quinze')
const catorze = document.getElementById('catorze')
const treze   = document.getElementById('treze')
const doze    = document.getElementById('doze')
const dez     = document.getElementById('dez')
const oito    = document.getElementById('oito')

const ButtonAtributoDND = document.getElementById('ButtonAtributoDND')

const todosOsInputsDeAtributo = [
    pontoCarisma,
    pontoConstituicao,
    pontoDestreza,
    pontoForca,
    pontoSabedoria,
    pontoInteligencia
];

const spansDosPontos = {
    "15": quinze,
    "14": catorze,
    "13": treze,
    "12": doze,
    "10": dez,
    "8": oito
};

/*========================================
=      FUNÇÃO  HABILIDADES               =
========================================*/
function SelecionarAtributosDND (AtributoBruto, AtributoEscolhido){

    if (AtributoBruto.value === "15") {
        fichaDND.Atributo[AtributoEscolhido] = 15 
        quinze.innerText = "0";

    }else if (AtributoBruto.value === "14") {
        fichaDND.Atributo[AtributoEscolhido] = 14
        catorze.innerText = "0";

    }else if (AtributoBruto.value === "13") {
        fichaDND.Atributo[AtributoEscolhido] = 13
        treze.innerText = "0";

    }else if (AtributoBruto.value === "12") {
        fichaDND.Atributo[AtributoEscolhido] = 12
        doze.innerText = "0";
        
    }else if (AtributoBruto.value === "10") {
        fichaDND.Atributo[AtributoEscolhido] = 10
        dez.innerText = "0";

    }else if (AtributoBruto.value === "8") {
        fichaDND.Atributo[AtributoEscolhido] = 8
        oito.innerText = "0";
    }
}


ButtonAtributoDND.addEventListener("click", function () {
    
    SelecionarAtributosDND(pontoCarisma, "Carisma")
    SelecionarAtributosDND(pontoConstituicao, "Constituição")
    SelecionarAtributosDND(pontoDestreza, "Destreza")
    SelecionarAtributosDND(pontoForca, "Força")
    SelecionarAtributosDND(pontoSabedoria, "Sabedoria")
    SelecionarAtributosDND(pontoInteligencia, "Inteligência")
    
    console.table([fichaDND.Atributo])

})

function atualizarVisibilidadeDosPontos() {
    const valoresUsados = todosOsInputsDeAtributo.map(input => input.value);

    for (const [valorDoPonto, spanElement] of Object.entries(spansDosPontos)) {

        if (valoresUsados.includes(valorDoPonto)) {
         
          
            spanElement.innerText = "0";
        } else {
            spanElement.style.visibility = "visible"; 
            spanElement.innerText        = valorDoPonto;
        }
    }
}

todosOsInputsDeAtributo.forEach(input => {
    input.addEventListener('input', atualizarVisibilidadeDosPontos);
});

atualizarVisibilidadeDosPontos();


/*========================================
=             FUNÇÃO  RAÇA               =
========================================*/
const EscolherRacaDNDHumano = document.getElementById("EscolherRacaDNDHumano")


function SelecionandoRaca(RaçaEscolhida, SubRaçaEscolhida, Habilidade1, Valor1, Habilidade2, Valor2,){
    fichaDND.PersonagemDND.Raça     = RaçaEscolhida
    fichaDND.PersonagemDND.Sub_Raça = SubRaçaEscolhida


    fichaDND.Atributo[Habilidade1] += Valor1

    fichaDND.Atributo[Habilidade2] += Valor2

    console.table([fichaDND.Atributo])

    console.table([fichaDND.PersonagemDND])
}

EscolherRacaDNDHumano.addEventListener("click", function(){
    fichaDND.Atributo.Carisma      += 1
    fichaDND.Atributo.Constituição += 1
    fichaDND.Atributo.Destreza     += 1
    fichaDND.Atributo.Força        += 1
    fichaDND.Atributo.Inteligência += 1
    fichaDND.Atributo.Sabedoria    += 1

    fichaDND.PersonagemDND.Raça     = "Humano"

    console.table([fichaDND.Atributo])

    console.table([fichaDND.PersonagemDND])
})
