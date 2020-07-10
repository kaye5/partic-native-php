<?php     
    try {
        require_once(__DIR__.'/../index.php');
        $profile = authorize();
        if($profile){            
            json($profile);
        }        
    } catch (\Throwable $th) {
        handleError($th);
    }    
?>