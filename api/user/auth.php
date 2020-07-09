<?php     
    try {
        require_once(__DIR__.'/../index.php');
        if(authorize()){
            sendStatus(200);
        }
        else
            sendStatus(403);
    } catch (\Throwable $th) {
        handleError($th);
    }    
?>