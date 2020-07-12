<?php
    require_once(__DIR__.'/../index.php');
    $profile = authorize();
    if($profile)
    {
            $event = getMyEventDetail($_GET['id'],$profile->email);
            json($event);
    }
?>