<?php
session_start();

// Defina aqui sua senha
$senha_correta = "12345";

// Quando o formulário é enviado
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $senha = $_POST["senha"] ?? "";

    if ($senha === $senha_correta) {
        $_SESSION["autenticado"] = true;
        header("Location: videos.php");
        exit;
    } else {
        $erro = "Senha incorreta!";
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <style>
        body {
            font-family: Arial;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #f0f0f0;
        }
        form {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 5px #aaa;
        }
        input {
            margin: 5px 0;
            padding: 8px;
            width: 100%;
        }
    </style>
</head>
<body>
    <form method="post">
        <h2>Área Restrita</h2>
        <input type="password" name="senha" placeholder="Digite a senha">
        <input type="submit" value="Entrar">
        <?php if (!empty($erro)) echo "<p style='color:red;'>$erro</p>"; ?>
    </form>
</body>
</html>
