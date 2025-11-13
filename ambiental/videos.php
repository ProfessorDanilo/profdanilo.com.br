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
     <h1>Sumário</h1>
  <ul>
    <li><a href="#lista7">Lista 7</a></li>
    <li><a href="#lista8">Lista 8</a></li>
    <li><a href="#sair">Sair com segurança</a></li>
  </ul>
  <br>
  <br>
    <h1 id="lista7">LISTA 7</h1>
    <p dir="ltr" style="text-align: left;"></p>
<p dir="ltr" style="text-align: left;">Baixe <a href="Lista 7 - resolução.pdf" target="_blank">a resolução da lista 7</a>.</p>
<p dir="ltr" style="text-align: left;"><br></p>
<h2>EXERCÍCIO 1</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1134323582?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 01 - Lista 07 CORRETA - Ambiente Atmosférico"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 2</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1134323658?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 02 - Lista 07 CORRETA - Ambiente Atmosférico"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 3</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1134323692?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 03 - Lista 07 CORRETA - Ambiente Atmosférico"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 4</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1134323724?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 04 - Lista 07 CORRETA - Ambiente Atmosférico"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 5</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1134323746?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 05 - Lista 07 CORRETA - Ambiente Atmosférico"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 6</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1134323769?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 06 - Lista 07 CORRETA - Ambiente Atmosférico"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 7</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1134323799?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 07 - Lista 07 CORRETA - Ambiente Atmosférico"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 8</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1134323838?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 08 - Lista 07 CORRETA - Ambiente Atmosférico"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 9</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1134323867?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 09 - Lista 07 CORRETA - Ambiente Atmosférico"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 10</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1134323895?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 10 - Lista 07 CORRETA - Ambiente Atmosférico"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>

<p></p>
<h1 id="lista8">LISTA 8</h1>
<p>Baixe a <a href="Lista 8 - resolução.pdf" target="_blank">resolução da lista 8</a>.</p>
<h2>EXERCÍCIO 1</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1136351979?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 01 - Lista 08 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 2</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1136352003?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 02 - Lista 08 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 3</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1136352016?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 03 - Lista 08 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 4</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1136352036?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 04 - Lista 08 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 5</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1136352045?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 05 - Lista 08 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 6</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1136352056?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 06 - Lista 08 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 7</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1136352069?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 07 - Lista 08 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 8</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1136352082?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 08 - Lista 08 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 9</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1136352096?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 09 - Lista 08 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>
<h2>EXERCÍCIO 10</h2><br>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1136352132?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exercício 10 - Lista 08 - Ambiente Atmosférico"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>
    <p id="sair"><a href="logout.php">Sair</a></p>
</body>
</html>
