<?php
    require('../index.php');
    $profile = authorize();
    if($profile){
        $email = $profile->email;
        $_POST = json_decode(file_get_contents("php://input"),true);
        if($_POST == NULL)
            $_POST = $_REQUEST;
        createEvent($_POST["name"],$_POST["desc"],$_POST["price"],date("Y/m/d"),
        $_POST["start"],$_POST["open"],$_POST["end"],$_POST["location"],$_POST["img"],$_POST["slot"],$_POST["city"],
        $_POST["cat"],$email);
        return sendStatus(200);
    }
    sendStatus(403);
?>