<?php
    require_once(__DIR__.'/../index.php');
    try {
        send(authenticate());      
    } catch (\Throwable $th) {
        handleError($th);
    }    
?>