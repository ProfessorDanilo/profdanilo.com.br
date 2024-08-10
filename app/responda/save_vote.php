<?php
if (isset($_POST['vote'])) {
    $vote = $_POST['vote'];

    // Carrega os votos existentes do arquivo
    $file = 'votes.txt';
    $votes = file_exists($file) ? json_decode(file_get_contents($file), true) : ['A' => 0, 'B' => 0, 'C' => 0, 'D' => 0, 'E' => 0];

    // Incrementa o voto escolhido
    if (array_key_exists($vote, $votes)) {
        $votes[$vote] += 1;
    }

    // Salva os dados atualizados de volta no arquivo
    file_put_contents($file, json_encode($votes));
}
?>
