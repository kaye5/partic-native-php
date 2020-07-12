<?php
    //View participant by event organizer
    require('../index.php');
    $profile = authorize();
    if($profile){
        $data = getParticipant($_GET['id'],$profile->email);
        return json($data);
    }
?>