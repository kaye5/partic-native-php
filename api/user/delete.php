<?php
    require_once(__DIR__.'/../index.php');
    try {
        $profile = authorize();
        if($profile){
            if(deleteUser($profile->email))
                return sendStatus(200);
        }            
        sendStatus(403);
    } catch (\Throwable $th) {
        handleError($th);
    }    
?>