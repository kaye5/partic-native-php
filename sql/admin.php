<?php
    function getMyEvent($email){
        global $pdo;
        $sth = $pdo->prepare("SELECT * FROM event
        where email = :email
        order by id desc");
        $sth->execute(array('email'=>$email));
        return $sth->fetchAll();
    }
    function getMyEventDetail($id,$email){
        global $pdo;
        $sth = $pdo->prepare("SELECT *,e.name as name, us.name as hostName FROM event e
        inner join user us on e.email = us.email
        where e.id = :id and e.email = :email");
        $sth->execute(array(
            'id' => $id,
            'email' => $email
        ));
        return $sth->fetch();
    }
?>