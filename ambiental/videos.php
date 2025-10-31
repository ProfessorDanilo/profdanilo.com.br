<?php
session_start();
if (empty($_SESSION["autenticado"])) {
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Vídeos Privados</title>
    <style>
        body { font-family: Arial; margin: 40px; background: #fafafa; }
        video { margin: 10px 0; display: block; max-width: 100%; }
        a { text-decoration: none; color: #007bff; }
    </style>
</head>
<body>
    <h1>Vídeos Privados</h1>

    <video controls src="videos/video1.mp4"></video>
    <video controls src="videos/video2.mp4"></video>

    <p><a href="logout.php">Sair</a></p>
</body>
</html>
