// Discentes: Ana Beatriz e Kauany
let jogadoresSelecionados = [];

function exibirJogadores() {
  // Obter os jogadores do localStorage
  let jogadoresString = localStorage.getItem("jogadores");

  if (jogadoresString) {
    // Converter a string em um array de objetos
    let jogadores = JSON.parse(jogadoresString);

    // Obter o elemento do contêiner onde os jogadores serão exibidos
    let listaJogadores = document.getElementById("listaJogadores");

    // Limpar o contêiner antes de exibir os jogadores
    listaJogadores.innerHTML = "";

    // Percorrer o array de jogadores e criar elementos HTML para exibir as informações
    jogadores.forEach(function (jogador) {
      // Criar elementos para exibir as informações do jogador
      let jogadorDiv = document.createElement("div");
      let imagemElement = document.createElement("img");
      let nomeElement = document.createElement("p");
      let posicaoElement = document.createElement("p");

      // Definir os valores dos elementos
      imagemElement.src = jogador.imagem;
      nomeElement.textContent = "Nome: " + jogador.nome;
      posicaoElement.textContent = "Posição: " + jogador.posicao;

      // Adicionar os elementos ao elemento do contêiner
      jogadorDiv.appendChild(imagemElement);
      jogadorDiv.appendChild(nomeElement);
      jogadorDiv.appendChild(posicaoElement);

      // Adicionar a classe para estilização
      jogadorDiv.classList.add("jogador");

      // Criar um botão para selecionar o jogador
      let botaoSelecionar = document.createElement("button");
      botaoSelecionar.textContent = "Selecionar";
      botaoSelecionar.id = "botaoSelecionar";
      botaoSelecionar.addEventListener("click", function () {
        // Verificar se o jogador já foi selecionado anteriormente
        if (!jogadoresSelecionados.includes(jogador)) {
          // Verificar se já foram selecionados 11 jogadores
          if (jogadoresSelecionados.length < 11) {
            // Adicionar o jogador à lista de jogadores selecionados
            jogadoresSelecionados.push(jogador);

            // Atualizar a exibição na tela para mostrar os jogadores selecionados
            atualizarJogadoresSelecionados();
          } else {
            alert("Você já selecionou 11 jogadores.");
          }
        }
      });

      // Adicionar o botão de selecionar ao elemento do jogador
      jogadorDiv.appendChild(botaoSelecionar);

      // Adicionar o jogadorDiv ao contêiner
      listaJogadores.appendChild(jogadorDiv);
    });
  }
}

function atualizarJogadoresSelecionados() {
  // Obter o elemento do contêiner onde os jogadores selecionados serão exibidos
  let jogadoresSelecionadosContainer = document.getElementById("jogadoresSelecionados");

  // Limpar o contêiner antes de exibir os jogadores selecionados
  jogadoresSelecionadosContainer.innerHTML = "";

  // Percorrer a lista de jogadores selecionados e criar elementos HTML para exibir as informações
  jogadoresSelecionados.forEach(function (jogador) {
    // Criar um card para o jogador selecionado
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");

    // Criar elementos para exibir as informações do jogador selecionado
    let imagemElement = document.createElement("img");
    imagemElement.src = jogador.imagem;
    imagemElement.textContent = jogador.imagem;

    let nomeElement = document.createElement("p");
    nomeElement.textContent = jogador.nome;

    // let posicaoElement = document.createElement("p");
    // posicaoElement.textContent = "Posição: " + jogador.posicao;

    // Criar um botão para remover o jogador selecionado
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.id = "botaoRemover";
    botaoRemover.addEventListener("click", function () {
      // Remover o jogador da lista de jogadores selecionados
      jogadoresSelecionados = jogadoresSelecionados.filter(function (j) {
        return j !== jogador;
      });

      // Atualizar a exibição na tela para mostrar os jogadores selecionados
      atualizarJogadoresSelecionados();
    });

    // Adicionar os elementos ao card
    cardElement.appendChild(imagemElement);
    cardElement.appendChild(nomeElement);
    // cardElement.appendChild(posicaoElement);
    cardElement.appendChild(botaoRemover);

    // Adicionar o card ao contêiner
    jogadoresSelecionadosContainer.appendChild(cardElement);
  });
}

function jogar() {
  // Verificar se foram selecionados exatamente 11 jogadores
  if (jogadoresSelecionados.length !== 11) {
    alert("Selecione exatamente 11 jogadores. Se não houver cadastre mais jogadores!");
    return;
  }

  // Gerar 5 números aleatórios entre 50 e 100
  let numerosGerados = [];
  for (let i = 0; i < 5; i++) {
    let numero = Math.floor(Math.random() * 51) + 50;
    numerosGerados.push(numero);
  }

  // Calcular a média das porcentagens de passes dos jogadores selecionados
  let somaPorcentagens = 0;
  jogadoresSelecionados.forEach(function (jogador) {
    somaPorcentagens += parseInt(jogador.passes);
  });
  let mediaPorcentagens = (somaPorcentagens / 11).toFixed(0);

  // Verificar a posição do time com base nas porcentagens geradas
  let posicoesOrdenadas = [...numerosGerados, mediaPorcentagens].sort((a, b) => b - a);
  let posicao = posicoesOrdenadas.indexOf(mediaPorcentagens) + 1;

  // Exibir o resultado do jogo
  let resultadoElement = document.getElementById("resultado");
  // Adicionar uma quebra de linha
  let brElement = document.createElement("br");
  resultadoElement.appendChild(brElement);
  if (posicao === 1) {
    resultadoElement.textContent = "Seu time ficou em 1° lugar, Parabéns!";
  } else {
    resultadoElement.textContent = "Você ficou em " + posicao + "° lugar.";
  }
  
    
  // Exibir o resultado de todos os times
  let resultadoTimesElement = document.getElementById("resultadoTimes");
  resultadoTimesElement.innerHTML = "";
  

  posicoesOrdenadas.forEach(function (porcentagem, index) {
    let textoPosicao = (index + 1) + "°";

    let textoTime = textoPosicao + " Lugar foi pro time de " + porcentagem + "% de aproveitamento";
    let timeElement = document.createElement("p");
    timeElement.textContent = textoTime;
  

    resultadoTimesElement.appendChild(timeElement);
 });

  console.log(numerosGerados);
  console.log(mediaPorcentagens);
}


// Chamar a função para exibir os jogadores ao carregar a página
window.addEventListener("load", exibirJogadores);

// Adicionar o evento de clique ao botão "Jogar"
let botaoJogar = document.getElementById("botaoJogar");
botaoJogar.addEventListener("click", jogar);
