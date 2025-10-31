<?php
session_start();
if (empty($_SESSION["autenticado"])) {
    header("Location: index.php");
    exit;
}


// --- LOG DE ACESSOS ---
$ip = $_SERVER['REMOTE_ADDR'] ?? 'desconhecido';
$data = date('Y-m-d H:i:s');
$arquivo_log = __DIR__ . '/acessos.log';

// Salva a linha no arquivo
$linha = "$data - IP: $ip\n";
file_put_contents($arquivo_log, $linha, FILE_APPEND);

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
    <p dir="ltr" style="text-align: left;"></p>
<h3>Exercício 1</h3>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1132343947?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 01 - Lista 07 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<p><br></p>
<h3>Exercício 2</h3><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1132343992?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 02 - Lista 07 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<p></p>
<p></p>
<h3>Exercício 3</h3><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1132344027?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 03 - Lista 07 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<p></p>
<p></p>
<h3>Exercício 4</h3><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1132344053?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 04 - Lista 07 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<p></p>
<p></p>
<h3>Exercício 5</h3><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1132344085?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 05 - Lista 07 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<p></p>
<p></p>
<h3>Exercício 6</h3><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1132344102?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 06 - Lista 07 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<p></p>
<p></p>
<h3>Exercício 7</h3><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1132344127?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 07 - Lista 07 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<p></p>
<p></p>
<h3>Exercício 8</h3><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1132344138?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 08 - Lista 07 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<script src="https://player.vimeo.com/api/player.js"></script>
<p></p>
<p></p>
<h3>Exercício 9</h3><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1132344180?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 09 - Lista 07 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<p></p>
<p></p>
<h3>Exercício 10</h3><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1132344206?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 10 - Lista 07 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<p></p>
<p></p>

    <p><a href="logout.php">Sair</a></p>
</body>
</html>
