<?php
    require_once(__DIR__.'/../index.php');
    try {
        if(updateUser($_POST['email'],$_POST['password'],$_POST['name'],$_POST['phone']));
            return sendStatus(200);
        sendStatus(500);
    } catch (\Throwable $th) {
        handleError($th);
    }    
?>