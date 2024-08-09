// Função para salvar o voto e atualizar a página de votação
function submitVote(choice) {
  // Recupera os dados existentes do localStorage ou inicializa os valores
  let votes = JSON.parse(localStorage.getItem('votes')) || {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };

  // Incrementa o voto escolhido
  votes[choice] += 1;

  // Salva os dados atualizados no localStorage
  localStorage.setItem('votes', JSON.stringify(votes));

  // Exibe a mensagem de confirmação
  document.getElementById('message').innerText = 'Resposta enviada';
  document.getElementById('retry').style.display = 'block';
}

// Função para permitir o usuário votar novamente
function retry() {
  document.getElementById('message').innerText = '';
  document.getElementById('retry').style.display = 'none';
}

// Função para carregar os dados e criar o gráfico de barras na página de resultados
window.onload = function () {
  if (document.getElementById('resultsChart')) {
    let votes = JSON.parse(localStorage.getItem('votes')) || {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
    };
    let totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
    let percentages = {
      A: (votes.A / totalVotes) * 100 || 0,
      B: (votes.B / totalVotes) * 100 || 0,
      C: (votes.C / totalVotes) * 100 || 0,
      D: (votes.D / totalVotes) * 100 || 0,
      E: (votes.E / totalVotes) * 100 || 0,
    };

    const ctx = document.getElementById('resultsChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['A', 'B', 'C', 'D', 'E'],
        datasets: [
          {
            label: 'Porcentagem de votos',
            data: [
              percentages.A,
              percentages.B,
              percentages.C,
              percentages.D,
              percentages.E,
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });
  }
};

// Função para limpar os dados salvos no localStorage
function clearData() {
  localStorage.removeItem('votes');
  location.reload(); // Atualiza a página para refletir os dados limpos
}
