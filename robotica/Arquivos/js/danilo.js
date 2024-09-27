/*meu script*/

// Função para verificar a data e exibir o botão
function verificarData() {
  const dataLimite = new Date('2024-09-30T06:00:00'); // Defina a data aqui
  const dataAtual = new Date();

  if (dataAtual >= dataLimite) {
    document.getElementById('aula7a-13').style.display = 'block'; // Exibe o botão
    document.getElementById('aula6a-14').style.display = 'block';
  } else {
    document.getElementById('aula7a-13').style.display = 'none'; // Esconde o botão
    document.getElementById('aula6a-14').style.display = 'none';
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
