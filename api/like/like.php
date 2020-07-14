<?php
    require('../index.php');
    $profile = authorize();
    if($profile){
        $_POST = json_decode(file_get_contents("php://input"),true);
        if($_POST == NULL)
            $_POST = $_REQUEST;
        $sth = $pdo->prepare('insert into favourite values (:event,:email)');
        $sth->execute(array(
            'event'=>$_POST['event'],
            'email'=>$profile->email
        ));
        sendStatus(200);
    }
?>