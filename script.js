let comida = "";
let bebida = "";
let sobremesa = "";
let precocomida = "";
let precobebida = "";
let precosobremesa = "";

function selecionarComida(classeBotao) {
    const selecionado = document.querySelector(".comida .botaoclicado");
    if (selecionado !== null) {
        selecionado.classList.remove("botaoclicado");
    }
    const botao = document.querySelector("."+classeBotao);
    botao.classList.add("botaoclicado")
    document.querySelector("tick").style.display = "block";
   

    if (classeBotao === "frango") {
        comida = "Frango Ying Yang";
        precocomida = 14.90;
    } else if (classeBotao === "bife") {
        comida = "Bife à parmegiana";
        precocomida = 16.50;
    } else if (classeBotao = "salmao") {
        comida = "Salmão Grelhado";
        precocomida = 20.00
    }

    if (comida !== "" && bebida !== "" && sobremesa !== "") {

        const elemento = document.querySelector(".caixacinza");
        elemento.innerHTML = "Fechar Pedido";
    
        const botao4 = document.querySelector(".caixacinza");
        botao4.classList.add("corFinalizacao");
        botao4.classList.remove("corCinza");
    }
}

function selecionarBebida(classeBotao) {
    const selecionado = document.querySelector(".bebida .botaoclicado");
    if (selecionado !== null) {
        selecionado.classList.remove("botaoclicado");
    }
    const botao = document.querySelector("."+classeBotao);
    botao.classList.add("botaoclicado");
    document.querySelector("tick").style.display = "block";

    if (classeBotao === "coca") {
        bebida = "Coquinha gelada";
        precobebida = 4.90;
    } else if (classeBotao === "tea") {
        bebida = "Ice Tea no grau";
        precobebida = 3.50;
    } else if (classeBotao = "mate") {
        comida = "Mate Leão Limão";
        precocomida = 2.90
    }

    if (comida !== "" && bebida !== "" && sobremesa !== "") {

        const elemento = document.querySelector(".caixacinza");
        elemento.innerHTML = "Fechar Pedido";
    
        const botao4 = document.querySelector(".caixacinza");
        botao4.classList.add("corFinalizacao");
        botao4.classList.remove("corCinza");
    }
}

function selecionarSobremesa(classeBotao) {
    const selecionado = document.querySelector(".sobremesa .botaoclicado");
    if (selecionado !== null) {
        selecionado.classList.remove("botaoclicado");
    }
    const botao = document.querySelector("."+classeBotao);
    botao.classList.add("botaoclicado");
    document.querySelector("tick").style.display = "block";

    if (classeBotao === "pudim") {
        sobremesa = "Pudim";
        precosobremesa = 7.90;
    } else if (classeBotao === "torta") {
        sobremesa = "Torta Alemã";
        precosobremesa = 6.40;
    } else if (classeBotao = "frutas") {
        sobremesa = "Salada de Frutas";
        precosobremesa = 3.60;
    }

    if (comida !== "" && bebida !== "" && sobremesa !== "") {

        const elemento = document.querySelector(".caixacinza");
        elemento.innerHTML = "Fechar Pedido";
    
        const botao4 = document.querySelector(".caixacinza");
        botao4.classList.add("corFinalizacao");
        botao4.classList.remove("corCinza");
    }
}


function pedir() {
    let valortotal = precocomida + precobebida + precosobremesa;
    let pedido = "Olá, gostaria de fazer o pedido: \n- Prato: " + comida + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\n Total: " + valortotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let encoded = encodeURIComponent(pedido);
    window.open("https://wa.me/+5511999999999?text="+ encoded)  
  }

    


