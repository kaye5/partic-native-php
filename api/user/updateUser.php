<?php
    require_once(__DIR__.'/../index.php');
    try {
        $_POST = json_decode(file_get_contents("php://input"),true);
        if($_POST == NULL)
            $_POST = $_REQUEST;
        if(updateUser($_POST['email'],$_POST['password'],$_POST['name'],$_POST['phone'],$_POST['instagram'],$_POST['job'],$_POST['company'],$_POST['blog'],$_POST['website']));
            return sendStatus(200);
        sendStatus(500);
    } catch (\Throwable $th) {
        handleError($th);
    }
?>