<?php 
    require('../index.php');
    global $pdo;
    $sth = $pdo->prepare("SELECT * FROM event LIMIT :limit");
    $sth->bindValue(':limit', (int) $_GET['limit'], PDO::PARAM_INT); 
    $sth->execute();
    json($sth->fetchAll());
?>