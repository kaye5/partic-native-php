<?php
    require('../index.php');
    $profile = authorize();
    if($profile){
        $_POST = json_decode(file_get_contents("php://input"),true);
        if($_POST == NULL)
            $_POST = $_REQUEST;
        deleteComment($profile->email,$_POST['id']);
        sendStatus(200);
    }
?>