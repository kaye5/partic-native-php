<?php
    require_once(__DIR__.'/../index.php');
    try {
        $token = authenticate();
        if($token)
            return send($token);
        sendStatus(403);
    } catch (\Throwable $th) {
        handleError($th);
    }    
?>