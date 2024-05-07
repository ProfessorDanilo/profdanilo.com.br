/*meu script*/

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
