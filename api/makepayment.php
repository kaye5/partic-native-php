<?php
    require('./index.php');
    $_POST = json_decode(file_get_contents("php://input"),true);
        if($_POST == NULL)
            $_POST = $_REQUEST;
    $ticket = getPrice($_POST['id']);
    global $pdo;
    $sth = $pdo->prepare('insert into transaction (
        `payment_method`,
        `total`,
        `name`,
        `email`,
        `ticket`)
            VALUES
            (:method,:total,:name,:email,:ticket)');    
    if($sth->execute(array(
        'method'=>$_POST['method'], 'total'=>1000,
        'name'=>$_POST['name'], 'email'=>$_POST['email'], 'ticket'=>$_POST['id']
    ))){
        if(updateStatus('WAITING CONFIRMATION',$_POST['id']))
            sendStatus(200);
    }    
?>