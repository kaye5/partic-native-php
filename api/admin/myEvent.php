<?php
    require_once(__DIR__.'/../index.php');
    $profile = authorize();
    if($profile){
        $event = getMyEvent($profile->email);
        json($event);
    }        
?>