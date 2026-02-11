<?php

$diretorio = "arquivos/";
$limite_tamanho = 5 * 1024 * 1024; // 5MB

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $grupo = preg_replace("/[^a-zA-Z0-9_-]/", "", $_POST["grupo"]);
    $turma = preg_replace("/[^a-zA-Z0-9_-]/", "", $_POST["turma"]);

    $arquivo = $_FILES["arquivo"];
    $nome_original = $arquivo["name"];
    $tamanho = $arquivo["size"];
    $tmp = $arquivo["tmp_name"];

    $extensao = strtolower(pathinfo($nome_original, PATHINFO_EXTENSION));

    $permitidos = ["jpg", "jpeg", "png"];

    if (!in_array($extensao, $permitidos)) {
        die("Tipo de arquivo não permitido.");
    }

    if ($tamanho > $limite_tamanho) {
        die("Arquivo muito grande. Máximo 5MB.");
    }

    $novo_nome = date("Ymd_His") . "_" . $turma . "_" . $grupo . "." . $extensao;

    if (move_uploaded_file($tmp, $diretorio . $novo_nome)) {
        echo "Arquivo enviado com sucesso!";
    } else {
        echo "Erro ao enviar arquivo.";
    }

} else {
    echo "Acesso inválido.";
}

?>
