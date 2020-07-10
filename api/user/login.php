<?php
    require_once(__DIR__.'/../index.php');
    try {
        $token = authenticate();
        if($token)
            return send($token);
    } catch (\Throwable $th) {
        handleError($th);
    }    
?>