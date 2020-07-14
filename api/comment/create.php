<?php
    require('../index.php');
    $profile = authorize();
    if($profile){
        $_POST = json_decode(file_get_contents("php://input"),true);
        if($_POST == NULL)
            $_POST = $_REQUEST;
        createComment($_POST['message'],$_POST['event'],$profile->email);
        sendStatus(200);
    }
?>