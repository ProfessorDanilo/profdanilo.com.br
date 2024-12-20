<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escolha uma alternativa</title>
    <link rel="stylesheet" href="style.css"></link>
    <link rel="icon" type="image/png" href="icon.png" />
</head>
<body>
    <h1>Escolha uma opção</h1>
    <div>
        <button onclick="submitVote('A')" class="btn">A</button>
        <button onclick="submitVote('B')" class="btn">B</button>
        <button onclick="submitVote('C')" class="btn">C</button>
        <button onclick="submitVote('D')" class="btn">D</button>
        <button onclick="submitVote('E')" class="btn">E</button>
    </div>
    <p id="message"></p>
    <div id="retry" style="display:none;">
        <button onclick="retry()">Enviar novamente</button>
    </div>
    <br>
    <div>
        <a href="QR-code.png"> <button>QR-Code</button> </a>
    </div>
    <br>    
    <div>
        <a href="results.php"> <button>RESULTADOS</button> </a>
    </div>
    <script src="script.js"></script>
</body>
</html>

