<?php     
    try {
        require_once(__DIR__.'/../index.php');
        $profile = authorize();
        if($profile){            
            json($profile);
        }
        else
            sendStatus(403);
    } catch (\Throwable $th) {
        handleError($th);
    }    
?>