<?php
$file = 'votes.txt';
if (file_exists($file)) {
    echo file_get_contents($file);
} else {
    echo json_encode(['A' => 0, 'B' => 0, 'C' => 0, 'D' => 0, 'E' => 0]);
}
?>
