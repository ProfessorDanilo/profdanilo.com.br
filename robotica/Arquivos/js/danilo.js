/*meu script*/

// Função para verificar a data e exibir o botão
function verificarData() {
  const dataLimite = new Date('2025-10-01T00:00:00'); // Defina a data aqui
  const dataAtual = new Date();

  if (dataAtual >= dataLimite) {
    document.getElementById('aula9a-14').style.display = 'block'; // Exibe o botão
  }
}
// Chama a função quando a página carrega
window.onload = verificarData;

function mostra(id) {
  //ocultando todos
  if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none';
  } else {
    document.getElementById(id).style.display = 'block';
  }
  /*agendando publicação*/
  const dataLimite = new Date('2024-09-26T12:00:00'); // Defina a data aqui
  const dataAtual = new Date();
  if (dataAtual < dataLimite) {
    document.getElementById('aula9a-14').style.display = 'none';
  }
}

/*AJAX*/
function loadDoc(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById(id).innerHTML = this.responseText;
  };
  xhttp.open('GET', id + '.html', true);
  xhttp.send();
}

document.getElementById('botao-copiar').addEventListener('click', function () {
  // Seleciona o conteúdo a ser copiado
  var conteudo = document.getElementById('controle-motor-cc').textContent;

  // Copia o texto para a área de transferência
  navigator.clipboard
    .writeText(conteudo)
    .then(function () {
      console.log('Texto copiado com sucesso!');
    })
    .catch(function () {
      console.error('Erro ao copiar o texto.');
    });
});
