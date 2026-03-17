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
        echo "<script>
            alert('Tipo de arquivo não permitido.');
            window.history.back();
        </script>";
        exit;
    }

    if ($tamanho > $limite_tamanho) {
        echo "<script>
            alert('Arquivo muito grande. Máximo 5MB.');
            window.history.back();
        </script>";
        exit;
    }

    $novo_nome = date("Ymd_His") . "_" . $turma . "_" . $grupo . "." . $extensao;

    if (move_uploaded_file($tmp, $diretorio . $novo_nome)) {
        // Sucesso: popup + redirecionamento
        echo "<script>
            alert('Arquivo enviado com sucesso!');
            window.location.href = 'parte3.html';
        </script>";
    } else {
        echo "<script>
            alert('Erro ao enviar arquivo.');
            window.history.back();
        </script>";
    }

} else {
    echo "<script>
        alert('Acesso inválido.');
        window.history.back();
    </script>";
}

?>