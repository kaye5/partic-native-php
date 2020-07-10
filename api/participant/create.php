<?php
    require('../index.php');
    $profile = authorize();    
    if($profile){
        $_POST = json_decode(file_get_contents("php://input"),true);
        if($_POST == NULL)
            $_POST = $_REQUEST;
        $res = createTicket('Waiting for payment',$_POST['qty'],$_POST['price'],
        $_POST['event'],$profile->email);
        if($res)
            return sendStatus(200);
    }
    //else {
    //     sendStatus(403);
    // }
?>