<?php
$file = 'votes.txt';
if (file_exists($file)) {
    unlink($file);  // Deleta o arquivo de votos
}
?>
