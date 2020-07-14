<?php
    function getComment($eventid){
        global $pdo;
        $sth = $pdo->prepare('select * from comment where event=:event');
        $sth->execute(array(
            'event'=>$eventid
        ));
        return $sth->fetchAll();
    }
    function createComment($message,$eventid,$userEmail){
        global $pdo;
        $sth = $pdo->prepare('insert into comment (message,event,email) values
        (:message,:event,:email)');
        return $sth->execute(array(
            'message'=>$message,
            'event'=>$eventid,
            'email'=>$userEmail,
        ));
    }
    function deleteComment($adminEmail,$id){
        global $pdo;
        $sth = $pdo->prepare('delete comment com
        inner join event ev on com.event = ev.id where ev.email = :email and com.id = $id');
        return $sth->execute(array(
            'email'=>$adminEmail,
            'id'=>$id
        ));
    }
?>