/*meu script 2023*/
/*AJAX*/
function loadDoc(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById(id).innerHTML = this.responseText;    
    MathJax.typeset();
  };
  xhttp.open('GET', id + '.html', true);
  xhttp.send();
}

function verificarData() {
  const dataLimite = new Date('2024-10-05T14:00:00'); // Defina a data aqui
  const dataAtual = new Date();

  if (dataAtual >= dataLimite) {
    document.getElementById('lab_aula18').style.display = 'block'; // Exibe o botão
  } else {
    document.getElementById('lab_aula18').style.display = 'none'; // Esconde o botão
  }
}
// Chama a função quando a página carrega
window.onload = verificarData;

/*meu script 2022*/

function mostrateste(id) {
  //ocultando todos
  document.getElementById('PA1').style.display = 'none';
  document.getElementById('PA2').style.display = 'none';
  document.getElementById('PA3').style.display = 'none';
  document.getElementById('PA4').style.display = 'none';
  document.getElementById('SA1').style.display = 'none';
  document.getElementById('SA2').style.display = 'none';
  document.getElementById('SA3').style.display = 'none';
  document.getElementById('SA4').style.display = 'none';
  document.getElementById('TA1').style.display = 'none';
  document.getElementById('TA2').style.display = 'none';
  document.getElementById('TA3').style.display = 'none';
  document.getElementById('TA4').style.display = 'none';
  document.getElementById('EA1').style.display = 'none';
  document.getElementById('EA2').style.display = 'none';
  document.getElementById('EA3').style.display = 'none';
  document.getElementById('EA4').style.display = 'none';
  document.getElementById('EA5').style.display = 'none';
  document.getElementById('EA6').style.display = 'none';
  document.getElementById('HA1').style.display = 'none';
  document.getElementById('HA2').style.display = 'none';
  document.getElementById('HA3').style.display = 'none';
  document.getElementById('HA4').style.display = 'none';
  document.getElementById('HA5').style.display = 'none';
  document.getElementById('HA6').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

function MostraComp(id) {
  //ocultando todos
  document.getElementById('FCB0').style.display = 'none';
  document.getElementById('FCB1').style.display = 'none';
  document.getElementById('FCB2').style.display = 'none';
  document.getElementById('FCB3').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

function mostra2(id) {
  document.getElementById('videos').style.display = 'none';
  document.getElementById('S1').style.display = 'none';
  document.getAnimationsElementById(id).style.display = 'block';
}

function mostra(id) {
  //ocultando todos
  if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none';
  } else {
    document.getElementById(id).style.display = 'block';
  }
}

//função para carregar as equações usando ajax
async function loadMathJax(id) {
  loadDoc(id);
  await sleep(500); // Função sleep personalizada
  var mathJaxScript = document.createElement('script');
  mathJaxScript.id = 'MathJax-script';
  mathJaxScript.async = true;
  mathJaxScript.src =
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  document.head.appendChild(mathJaxScript);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
