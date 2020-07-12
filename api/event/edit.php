<?php
    require('../index.php');
    $profile = authorize();
    if($profile){
        $email = $profile->email;                
        $_POST = json_decode(file_get_contents("php://input"),true);
        if($_POST == NULL)
            $_POST = $_REQUEST;
        $image_path = uploadFile($_POST["name"]);
        if(!$image_path)
            $image_path = $_POST['image'];
        editEvent($_POST["name"],$_POST["description"],$_POST["price"],
        $_POST["start"],$_POST["openregis"],$_POST["closeregis"],$_POST["location"],$image_path,$_POST["slot"],$_POST["city_id"],
        $_POST["category_id"],$_POST['id']);
        sendStatus(200);
    }
?>