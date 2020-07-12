<?php
require('../index.php');
    $profile = authorize();
    if($profile){
        $_POST = json_decode(file_get_contents("php://input"),true);
        if($_POST == NULL)
            $_POST = $_REQUEST;
        global $pdo;
        $sth = $pdo->prepare('UPDATE ticket t
        inner join event e on t.event = e.id
        set t.status = :status
        where t.id = :id and e.email = :email
        ');
        $sth->execute(array(
            'id'=>$_POST['id'],
            'email'=>$profile->email, 
            'status'=>$_POST['status']

        ));
        sendStatus(200);
    }
?>