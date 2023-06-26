// Discentes: Ana Beatriz e Kauany

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

      // Criar um botão para apagar o jogador
      let botaoApagar = document.createElement("button");
      botaoApagar.textContent = "Apagar";
      botaoApagar.id = "botaoApagar"; // Definir o ID do botão como "botaoApagar"
      botaoApagar.addEventListener("click", function () {
        // Remover o jogador do array
        let index = jogadores.indexOf(jogador);
        if (index > -1) {
          jogadores.splice(index, 1);
        }

        // Atualizar o localStorage com o array de jogadores
        localStorage.setItem("jogadores", JSON.stringify(jogadores));

        // Exibir novamente os jogadores (depois da exclusão)
        exibirJogadores();

      });

      // Adicionar o botão de apagar ao elemento do jogador
      jogadorDiv.appendChild(botaoApagar);

      // Criar um botão para editar o jogador
      let botaoEditar = document.createElement("button");
      botaoEditar.textContent = "Editar";
      botaoEditar.id = "botaoEditar";
      botaoEditar.addEventListener("click", function () {
        // Armazenar o jogador que está sendo editado no armazenamento local (sessionStorage ou localStorage)
        sessionStorage.setItem("jogadorEditando", JSON.stringify(jogador));

        // Redirecionar para o formulário de edição do jogador
        window.location.href = "formEdit.html";
      });

      // Adicionar o botão de editar ao elemento do jogador
      jogadorDiv.appendChild(botaoEditar);

      // Adicionar o jogadorDiv ao contêiner
      listaJogadores.appendChild(jogadorDiv);
    });
  }
}

// Chamar a função para exibir os jogadores ao carregar a página
window.addEventListener("load", exibirJogadores);
