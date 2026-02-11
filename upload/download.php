<?php
$dir = __DIR__ . '/arquivos'; // pasta que será zipada
$zipFileName = 'arquivos.zip';

// Cria objeto ZipArchive
$zip = new ZipArchive();

if ($zip->open($zipFileName, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
    // Abre a pasta e adiciona arquivos
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dir),
        RecursiveIteratorIterator::LEAVES_ONLY
    );

    foreach ($files as $name => $file) {
        if (!$file->isDir()) {
            // Caminho dentro do zip
            $filePath = $file->getRealPath();
            $relativePath = substr($filePath, strlen($dir) + 1);
            $zip->addFile($filePath, $relativePath);
        }
    }

    $zip->close();

    // Força download
    header('Content-Type: application/zip');
    header('Content-Disposition: attachment; filename="' . $zipFileName . '"');
    header('Content-Length: ' . filesize($zipFileName));
    readfile($zipFileName);

    // Remove o zip temporário do servidor
    unlink($zipFileName);
    exit;
} else {
    echo 'Erro ao criar o zip';
}
?>
