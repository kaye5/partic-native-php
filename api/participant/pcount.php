<?php 
    require('../index.php');
    global $pdo; 
    $sth = $pdo->prepare('select sum(qty) as count from ticket where event = :event');
    $sth->execute(array(
       'event'  => $_GET['event']
    ));
    $data = $sth->fetch();
    json($data);
?>