<?php
    require('../index.php');
    $profile = authorize();
    if($profile){
        $data = getTicket($profile->email);
        return json($data);
    }
?>