// Função para enviar o voto ao servidor e atualizar a página de votação
function submitVote(choice) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'save_vote.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('message').innerText = 'Resposta enviada';
      document.getElementById('retry').style.display = 'block';
    }
  };
  xhr.send('vote=' + choice);
}

// Função para permitir o usuário votar novamente
function retry() {
  document.getElementById('message').innerText = '';
  document.getElementById('retry').style.display = 'none';
}

// Função para carregar os dados e criar o gráfico de barras na página de resultados
window.onload = function () {
  if (document.getElementById('resultsChart')) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_votes.php', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const votes = JSON.parse(xhr.responseText);
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
    xhr.send();
  }
};

// Função para limpar os dados salvos no servidor
function clearData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'clear_votes.php', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      location.reload(); // Atualiza a página para refletir os dados limpos
    }
  };
  xhr.send();
}
