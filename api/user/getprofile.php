<?php     
    try {
        require_once(__DIR__.'/../index.php');
        if(authorize()){
            $profile = findUser($_POST['email']);
            json($profile);
        }
        else
        http_response_code(403);        
    } catch (\Throwable $th) {
        handleError($th);
    }    
?>