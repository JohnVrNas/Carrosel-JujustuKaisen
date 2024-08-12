const botoesCarrosel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".img");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desativarBotaoSelecionado();


        marcarBotao(botao);


        esconderImagemAtiva();


        mostrarImagem(indice);


        esconderInformacoes();


        mostarInformacoes(indice);



    });
});

function marcarBotao(botao) {
    botao.classList.add("selecionado");
}

function mostarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoes() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagem(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

