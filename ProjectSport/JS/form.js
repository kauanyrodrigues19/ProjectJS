function cadastrar() {
  // Obter os valores dos campos de entrada
  let imagem = document.getElementById("imagem").value;
  let nome = document.getElementById("nome").value;
  let pais = document.getElementById("pais").value;
  let camisa = document.getElementById("camisa").value;
  let posicao = document.getElementById("posicao").value;
  let passes = document.getElementById("passes").value;


  // Verificar se os campos estão preenchidos
  if (imagem.trim() === "" || nome.trim() === "" || pais.trim() === "" || camisa.trim() === "" || posicao.trim() === "" || passes.trim() === "") {
    alert("Por favor, preencha todos os campos antes de enviar o formulário.");
    return;
  }

  // Criar um objeto com as informações
  let jogador = {
    id: gerarId(), // Gerar um ID único para o jogador
    imagem: imagem,
    nome: nome,
    pais: pais,
    camisa: camisa,
    posicao: posicao,
    passes: passes
  };

  // Verificar se já existem jogadores cadastrados no localStorage
  let jogadoresCadastrados = localStorage.getItem("jogadores");
  let jogadores = [];

  if (jogadoresCadastrados) {
    // Se existir, converter a string em um array de objetos
    jogadores = JSON.parse(jogadoresCadastrados);
  }

  // Adicionar o novo jogador ao array
  jogadores.push(jogador);

  // Converter o array em uma string JSON
  let jogadoresString = JSON.stringify(jogadores);

  // Armazenar a string JSON no localStorage
  localStorage.setItem("jogadores", jogadoresString);

  // Armazenar a lista atualizada de jogadores em uma variável de sessão
  sessionStorage.setItem("jogadores", jogadoresString);

  // Limpar os campos de entrada
  document.getElementById("form").reset();

  // Exibir uma mensagem de sucesso
  alert("Jogador cadastrado com sucesso!");

  // Redirecionar para a página equipe.html
  window.location.href = "pagConfirm.html";
}

// Função para gerar um ID único para cada jogador
function gerarId() {
  let lastId = localStorage.getItem("lastId"); //Pega o último id que foi adicionado no localStorange
  let newId = lastId ? parseInt(lastId) + 1 : 1;
  localStorage.setItem("lastId", newId.toString());
  return newId;
}