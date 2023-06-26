// Discentes: Ana Beatriz e Kauany
// Obter os dados do jogador armazenados no sessionStorage
let jogadorEditString = sessionStorage.getItem("jogadorEditando");
let jogadorEdit = JSON.parse(jogadorEditString);

// Preencher os campos do formulário com os dados do jogador
document.getElementById("imagem").value = jogadorEdit.imagem;
document.getElementById("nome").value = jogadorEdit.nome;
document.getElementById("pais").value = jogadorEdit.pais;
document.getElementById("camisa").value = jogadorEdit.camisa;
document.getElementById("posicao").value = jogadorEdit.posicao;
document.getElementById("passes").value = jogadorEdit.passes;

// Função para editar o jogador
function editar() {
  // Obter os novos valores dos campos do formulário
  let imagem = document.getElementById("imagem").value;
  let nome = document.getElementById("nome").value;
  let pais = document.getElementById("pais").value;
  let camisa = document.getElementById("camisa").value;
  let posicao = document.getElementById("posicao").value;
  let passes = document.getElementById("passes").value;

  // Criar um objeto de jogador editado
  let jogadorEditado = {
    id: jogadorEdit.id,
    imagem: imagem,
    nome: nome,
    pais: pais,
    camisa: camisa,
    posicao: posicao,
    passes: passes
  };

  // Atualizar os dados do jogador no localStorage
  let jogadoresString = localStorage.getItem("jogadores");
  let jogadores = JSON.parse(jogadoresString);
  let jogadorIndex = jogadores.findIndex(function (jogador) {
    return jogador.id === jogadorEdit.id;
  });
  jogadores[jogadorIndex] = jogadorEditado;
  localStorage.setItem("jogadores", JSON.stringify(jogadores));

  // Redirecionar de volta para a página principal de confirmação
  window.location.href = "pagConfirm.html";
}
