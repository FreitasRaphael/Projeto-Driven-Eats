let comida = "";
let bebida = "";
let sobremesa = "";

function selecionarComida(classeBotao) {
    const selecionado = document.querySelector(".tamanho1 .botaoclicado");
    if (selecionado !== null) {
        selecionado.classList.remove("botaoclicado");
    }
    const botao = document.querySelector("."+classeBotao);
    botao.classList.add("botaoclicado")
}

function selecionarBebida(classeBotao) {
    const selecionado = document.querySelector(".botaoclicado");
    if (selecionado !== null) {
        selecionado.classList.remove("botaoclicado");
    }
    const botao = document.querySelector("."+classeBotao);
    botao.classList.add("botaoclicado")
}

function selecionarSobremesa(classeBotao) {
    const selecionado = document.querySelector(".tamanho3 .botaoclicado");
    if (selecionado !== null) {
        selecionado.classList.remove("botaoclicado");
    }
    const botao = document.querySelector("."+classeBotao);
    botao.classList.add("botaoclicado")
}





function finalizarPedido() {
    if (comida !== "" && bebida !== "" && sobremesa !== "") {

        const elemento = document.querySelector(".caixacinza");
        elemento.innerHTML = "Fechar Pedido";
    
        const botao4 = document.querySelector(".caixacinza");
        botao4.classList.add("corFinalizacao");
        botao4.classList.remove("corCinza");
    }
}

    


