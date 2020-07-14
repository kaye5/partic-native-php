<?php
    require('../index.php');
    global  $pdo;
    $sth = $pdo->prepare('select count(*) as count from favourite where event = :event');
    $sth->execute(array(
        'event' => $_GET['id']
    ));
    $data = $sth->fetch();
    try {
        error_reporting(0);
        $profile = authorize();
        $sth = $pdo->prepare('select *  from favourite where event=:id and email=:email');
        $sth->execute(array("email"=>$profile->email,'id'=>$_GET['id']));
        $temp = $sth->fetch();
        if($temp){
            $data->isLike = true;
        }
    } catch (\Throwable $th) {
        //throw $th;
    }
    json($data);
?>