const visor = document.querySelector("#visor"); // O document representa toda a página HTML.
const botoes = document.querySelectorAll("button"); // É um método que procura um elemento na página.

 // O forEach() serve para percorrer todos os elementos de uma lista. Ou seja, ele visita um botão de cada vez.
botoes.forEach((botao) => {

// addEventListener esse metodo executa um evento, significa: quando esse botao for clicado, execute o codigo.

    botao.addEventListener("click", () => {
    
        const numero = botao.dataset.numero;
        const operador = botao.dataset.operador;
        const acao = botao.dataset.acao;

        if (numero) {
            visor.value += numero;
        }

        if(operador) {
            visor.value += operador;
        }

        if(acao === "limpar") {
            visor.value = "";
        }
        
        if(acao === "igual") {
            visor.value = eval(visor.value);
        }
            
    });

});

