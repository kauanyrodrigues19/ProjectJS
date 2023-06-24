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
        let paisElement = document.createElement("p");
        let camisaElement = document.createElement("p");
        let posicaoElement = document.createElement("p");
        let passesElement = document.createElement("p");
  
        // Definir os valores dos elementos
        imagemElement.src = jogador.imagem;
        nomeElement.textContent = "Nome: " + jogador.nome;
        paisElement.textContent = "País de Origem: " + jogador.pais;
        camisaElement.textContent = "Número da Camisa: " + jogador.camisa;
        posicaoElement.textContent = "Posição: " + jogador.posicao;
        passesElement.textContent = "Passes: " + jogador.passes;
  
        // Adicionar os elementos ao elemento do contêiner
        jogadorDiv.appendChild(imagemElement);
        jogadorDiv.appendChild(nomeElement);
        jogadorDiv.appendChild(paisElement);
        jogadorDiv.appendChild(camisaElement);
        jogadorDiv.appendChild(posicaoElement);
        jogadorDiv.appendChild(passesElement);
  
        // Adicionar a classe para estilização
        jogadorDiv.classList.add("jogador");
  
        // Criar um botão para selecionar o jogador
        let botaoSelecionar = document.createElement("button");
        botaoSelecionar.textContent = "Selecionar";
        botaoSelecionar.id = "botaoSelecionar";
        botaoSelecionar.addEventListener("click", function () {
        // Verificar se o jogador já foi selecionado anteriormente
        if (!jogadoresSelecionados.includes(jogador)) {
            // Adicionar o jogador à lista de jogadores selecionados
            jogadoresSelecionados.push(jogador);

            // Atualizar a exibição na tela para mostrar os jogadores selecionados
            atualizarJogadoresSelecionados();
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
      nomeElement.textContent = "Nome: " + jogador.nome;
  
      let posicaoElement = document.createElement("p");
      posicaoElement.textContent = "Posição: " + jogador.posicao;
  
      let passesElement = document.createElement("p");
      passesElement.textContent = "Passes: " + jogador.passes;

  
      // Adicionar os elementos ao card
      cardElement.appendChild(imagemElement);
      cardElement.appendChild(nomeElement);
      cardElement.appendChild(posicaoElement);
      cardElement.appendChild(passesElement);
  
      // Adicionar o card ao contêiner
      jogadoresSelecionadosContainer.appendChild(cardElement);
    });
  }
  

  // Chamar a função para exibir os jogadores ao carregar a página
  window.addEventListener("load", exibirJogadores);
  