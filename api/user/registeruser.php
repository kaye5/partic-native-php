<?php
    require_once(__DIR__.'/../index.php');
    try {
        $result = addUser($_POST['name'],$_POST['email'],$_POST['password'],$_POST['phone'],$_POST['gender']);
        if($result)
            return sendStatus(200);
        return send('duplicate');
        
    } catch (\Throwable $th) {
        handleError($th);
    }    
?>