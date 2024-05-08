<?php
// Verificar se os dados foram enviados via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['hora']) && isset($_POST['mes']) && isset($_POST['dia']) && isset($_POST['nivel'])) {
    // Receber os dados de nivel
    $nivel = $_POST['nivel'];
    $hora = $_POST['hora'];
    $mes = $_POST['mes'];
    $dia = $_POST['dia'];

    // Faça o que desejar com os dados, como salvar em um banco de dados ou arquivo

    // Exemplo: Salvar em um arquivo
    $arquivo = 'niveis.csv';
    $dados = $hora . ',' . $mes . ',' . $dia . ','. $nivel . "\n";
    file_put_contents($arquivo, $dados, FILE_APPEND);

    // Responder ao cliente que os dados foram recebidos com sucesso
    echo 'Dados recebidos com sucesso.';
} else {
    // Se os dados não foram recebidos corretamente, responder com erro
    http_response_code(400);
    echo 'Erro: Dados não recebidos.';
}
?>
