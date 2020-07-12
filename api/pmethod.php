<?php
    require('./index.php');
    global  $pdo;
    $sth = $pdo->prepare('select * from payment_method');
    $sth->execute();
    json($sth->fetchAll());
?>