function adicionarVitoria(selecao) {
    selecao.vitoria = selecao.vitoria+1
    selecao.pontos = selecao.pontos+3

    exibirNaTela()
}

function adicionarEmpate(selecao) {
    selecao.empate = selecao.empate+1
    selecao.pontos = selecao.pontos+1

    exibirNaTela()
}

function adicionarDerrota(selecao) {
    selecao.derrota = selecao.derrota+1

    exibirNaTela()
}

selecoes = [
    
]

function adicionarSelecoes() {

    var selecaoNova = document.getElementById("novaSelecao").value

    var objSelecaoNova = {
        nome: selecaoNova,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    }

    selecoes.push(objSelecaoNova)

    document.getElementById("novaSelecao").value = ""

    exibirNaTela()
}

var elementoTabela = document.getElementById("tabelaSelecoes")

// com a crase consigo escrever JS e HTML ao mesmo tempo -> template string

function exibirNaTela() {
   
    elementoTabela.innerHTML = `
    <tr>
        <td class='nomeSelecao'>${selecoes[0].nome}</td>
        <td>${selecoes[0].vitoria}</td>
        <td>${selecoes[0].empate}</td>
        <td>${selecoes[0].derrota}</td>
        <td>${selecoes[0].pontos}</td>
        <td><button onclick="adicionarVitoria(selecoes[0])">Vitória</button></td>
        <td><button onclick="adicionarEmpate(selecoes[0])">Empate</button></td>
        <td><button onclick="adicionarDerrota(selecoes[0])">Derrota</button></td>
    </tr>

    `

    for (i=1; i<selecoes.length; i++) {
        elementoTabela.innerHTML = elementoTabela.innerHTML + `
        <tr>
            <td class='nomeSelecao'>${selecoes[i].nome}</td>
            <td>${selecoes[i].vitoria}</td>
            <td>${selecoes[i].empate}</td>
            <td>${selecoes[i].derrota}</td>
            <td>${selecoes[i].pontos}</td>
            <td><button onclick="adicionarVitoria(selecoes[${i}])">Vitória</button></td>
            <td><button onclick="adicionarEmpate(selecoes[${i}])">Empate</button></td>
            <td><button onclick="adicionarDerrota(selecoes[${i}])">Derrota</button></td>
        </tr>
    
        `
    }
    
}


