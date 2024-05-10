<?php

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["imagem"])) {
    $nomeArquivo = $_FILES["imagem"]["name"];
    $caminhoTemp = $_FILES["imagem"]["tmp_name"];

    // Converter imagem para PDF
    $pdf = new Imagick();
    $pdf->readImage($caminhoTemp);

    // Salvar PDF
    $nomePDF = pathinfo($nomeArquivo, PATHINFO_FILENAME) . ".pdf";
    $caminhoPDF = "uploads/" . $nomePDF;
    $pdf->writeImages($caminhoPDF, true);

    // Fazer o download do PDF
    header("Content-type: application/pdf");
    header("Content-Disposition: attachment; filename=" . $nomePDF);
    readfile($caminhoPDF);

    // Limpar
    unlink($caminhoPDF);
} else {
    echo "Erro: Nenhum arquivo enviado.";
}

?>
